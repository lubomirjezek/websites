import { ChangeDetectionStrategy, Component, HostBinding, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';

import { SIDENAV_DATA } from '../../../../models/sidenav-data';
import { NavigationLink } from '../../../../models/navigation-link';

@Component({
  selector: 'janhanko-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ width: '0' }),
        animate('125ms cubic-bezier(.4, 0, 1, 1)', style({ width: '*' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  @HostBinding('@slideIn') doAnimate = true;

  overlayRef: OverlayRef;
  navigation: NavigationLink[];

  constructor(
    @Inject(SIDENAV_DATA) private data: { [key: string]: any }
  ) {
    this.navigation = data.navigation;
  }

  ngOnInit() { }

  public detachSidenav(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }

}
