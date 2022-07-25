import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  constructor(
    private darkModeService: DarkModeService,
    private overlay: OverlayContainer
  ) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode) =>
      this.handleTheme(darkMode)
    );
  }

  handleTheme(darkMode: boolean) {
    const themeAdd = darkMode ? 'darkMode' : 'lightMode';
    const themeRemove = !darkMode ? 'darkMode' : 'lightMode';

    this.className = themeAdd;
    this.overlay.getContainerElement().classList.remove(themeRemove);
    this.overlay.getContainerElement().classList.add(themeAdd);
  }
}
