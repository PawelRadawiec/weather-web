import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Observable, filter, map, merge } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay: CdkConnectedOverlay;
  @ViewChild(MatInput, { read: ElementRef, static: true })
  private inputEl: ElementRef;

  private isPanelVisible$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;

  showPanel$: Observable<boolean>;

  constructor(private focousMonitor: FocusMonitor) {}

  ngOnInit() {
    this.isPanelVisible$ = this.focousMonitor.monitor(this.inputEl).pipe(
      filter((focused) => !!focused),
      map(() => true)
    );
    this.isPanelHidden$ = merge(
      this.connectedOverlay.detach,
      this.connectedOverlay.backdropClick
    ).pipe(map(() => false));

    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);
  }
}
