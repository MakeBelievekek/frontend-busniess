import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  greeting = 'Hello world!';
  additionalData: string;
  additionalDataTwo: string;
  additionalDataThree: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
