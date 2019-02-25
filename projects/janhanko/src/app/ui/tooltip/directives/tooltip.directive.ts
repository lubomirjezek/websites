import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[uiTooltip]'
})
export class TooltipDirective {

  overlayRef: OverlayRef;
  content: TemplateRef<any>;

  @Input() set uiTooltip(value: TemplateRef<any>) {
    this.content = value;
  }

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private elRef: ElementRef
  ) { }

  private getPosition(): FlexibleConnectedPositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.elRef)
      .withPositions([
        { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', weight: 1, offsetX: 5, offsetY: 0 },
        { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', weight: 1, offsetX: 5, offsetY: 0 },
        { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', weight: 1, offsetX: 0, offsetY: -5 },
        { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', weight: 1, offsetX: 0, offsetY: 5 },
        { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'bottom', weight: 1, offsetX: 0, offsetY: 0 },
        { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'top', weight: 1, offsetX: 0, offsetY: 0 },
        { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'bottom', weight: 1, offsetX: 0, offsetY: 0 },
        { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'top', weight: 1, offsetX: 0, offsetY: 0 },
      ]);
  }

  private getConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.getPosition(),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private getPortal<T>(template: TemplateRef<T>): TemplatePortal {
    return new TemplatePortal(template, this.viewContainerRef);
  }

  private createOverlay(): OverlayRef {
    return this.overlay
      .create(this.getConfig());
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.overlayRef = this.createOverlay();

    this.overlayRef
      .attach(this.getPortal(this.content));
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.overlayRef.dispose();
  }

}
