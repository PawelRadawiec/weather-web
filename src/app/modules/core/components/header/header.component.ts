import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') className = '';
  theme = new FormControl(true);

  constructor(
    private darkModeService: DarkModeService
  ) {}

  ngOnInit() {
    this.theme.valueChanges.subscribe((toggled) => {
      this.darkModeService.setDarkMode(toggled);
    });
  }
}
