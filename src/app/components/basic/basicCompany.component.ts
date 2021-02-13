import { Component, OnInit } from '@angular/core';
import {BasicComponent} from './basic.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicCompanyComponent extends BasicComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
