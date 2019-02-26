import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { NavigationLink } from '../../../../models/navigation-link';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SIDENAV_DATA } from '../../../../models/sidenav-data';
import { timer } from 'rxjs';

@Component({
  selector: 'janhanko-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  overlayRef: OverlayRef;
  navigation: NavigationLink[] = [
    {
      name: 'Homepage',
      url: '',
      highlight: false
    }, {
      name: 'Youtube',
      url: '/youtube',
      highlight: true
    }, {
      name: 'Můj merch',
      url: '/muj-merch',
      highlight: true
    }, {
      name: 'Usc store',
      url: '/usc-store',
      highlight: false
    }, {
      name: 'US academy',
      url: '/us-academy',
      highlight: false
    }, {
      name: 'Urban Sense',
      url: '/urban-sense',
      highlight: false
    }, {
      name: 'Studio usp',
      url: '/studio-usp',
      highlight: false
    }
  ];

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
  ) { }

  ngOnInit() { }

  private getPosition(): GlobalPositionStrategy {
    return this.overlay
      .position()
      .global()
      .right('0px')
      .top('0px')
      .bottom('0px');
  }

  private getConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.getPosition(),
      height: '100%',
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

  private getInjector(): PortalInjector {
    const customTokens = new WeakMap();

    customTokens.set(SIDENAV_DATA, {
      navigation: this.navigation.slice(1)
    });

    return new PortalInjector(this.injector, customTokens);
  }

  private getPortal(): ComponentPortal<any> {
    return new ComponentPortal(SidenavComponent, this.viewContainerRef, this.getInjector());
  }

  private createOverlay(): OverlayRef {
    const config = this.getConfig();

    this.overlayRef = this.overlay.create(config);

    this.overlayRef
      .backdropClick()
      .subscribe(() => this.detachSidenav());

    return this.overlayRef;
  }

  public attachSidenav(): void {
    if (!this.overlayRef || !this.overlayRef.hasAttached()) {
      const portal = this.getPortal();

      const componentRef = this.createOverlay().attach(portal);

      // set overlayRef after animation finishes to avoid triggering change detection
      timer(200)
        .subscribe(() => {
          componentRef.instance.overlayRef = this.overlayRef;
        });
    }
  }

  public detachSidenav(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

}
