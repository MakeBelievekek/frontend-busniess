import {Component, OnInit} from '@angular/core';
import {StartComponent} from './start.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartCompanyComponent extends StartComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
