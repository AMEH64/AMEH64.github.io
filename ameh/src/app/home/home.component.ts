import { Component, OnInit } from '@angular/core';
import { fadeInDown } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'ameh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public text: string = 'Lorem ipsum dolor sit amet.';

  public enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter',
    isEnter: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
