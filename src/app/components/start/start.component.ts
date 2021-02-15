import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  greeting = 'Hello world!';
  dummier: string;
  dummierTWO: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
