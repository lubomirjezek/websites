import { Injectable } from '@angular/core';
import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalOptions } from '../models/modal-options';

@Injectable()
export class ModalService {
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay
  ) { }

  private getConfig(options: ModalOptions): OverlayConfig {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    config.width  = options.width;
    config.height = options.height;

    config.hasBackdrop = true;

    return config;
  }

  private getComponentPortal<T>(component: ComponentType<T>): ComponentPortal<T> {
    return new ComponentPortal<T>(component);
  }

  public open<T>(component: ComponentType<T>, options: ModalOptions): void {
    const config = this.getConfig(options);
    const portal = this.getComponentPortal(component);

    this.overlayRef = this.overlay.create(config);

    this.overlayRef
      .backdropClick()
      .subscribe(() => this.close());

    this.overlayRef.attach(portal);
  }

  public close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

}
