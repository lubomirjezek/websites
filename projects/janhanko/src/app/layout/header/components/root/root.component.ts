import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { NavigationLink } from '../../../../models/navigation-link';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SIDENAV_DATA } from '../../../../models/sidenav-data';
import { timer } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'janhanko-header',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  overlayRef: OverlayRef;
  navigation: NavigationLink[];

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService
      .getNavigation()
      .subscribe((navigation: NavigationLink[]) => this.navigation = navigation);
  }

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
