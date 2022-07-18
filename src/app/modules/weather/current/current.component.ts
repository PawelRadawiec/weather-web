import { Component, Input, OnInit } from '@angular/core';
import { Current } from 'src/app/models/weather-details.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  @Input() current: Current;

  constructor() {}

  ngOnInit() {}
}
