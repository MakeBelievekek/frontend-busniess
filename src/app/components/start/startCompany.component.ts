import {Component, OnInit} from '@angular/core';
import {StartComponent} from './start.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartCompanyComponent extends StartComponent implements OnInit {
<<<<<<< HEAD
=======
  superSecret: string;
  moreSecret: string;
>>>>>>> 6edeb75... more secret

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
