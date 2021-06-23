import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, slideInRight } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'ameh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class HeaderComponent implements OnInit {
  slideInRight: any;
  bounce: any;

  constructor() {}

  ngOnInit(): void {}
}
