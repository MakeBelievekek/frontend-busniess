import {Component, OnInit} from '@angular/core';
import {StartComponent} from './start.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartCompanyComponent extends StartComponent implements OnInit {
<<<<<<< HEAD
  superSecret: string;
  moreSecret: string;

  constructor() {
    super();

    this.greeting = 'Extended Hello World!';
=======
  greeting = 'Hello world!';

  constructor() {
    super();
>>>>>>> 9ddb29f... re added
  }

  ngOnInit(): void {
  }

}
