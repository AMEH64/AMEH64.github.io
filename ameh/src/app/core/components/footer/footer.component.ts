import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ameh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyrightYear: number = new Date().getFullYear();

  public socialIconLinks: { href: string; fontSet: string; fontIcon: string }[] = [
    { href: 'https://www.linkedin.com/in/allen-hansen', fontSet: 'fab', fontIcon: 'fa-linkedin' },
    { href: 'https://github.com/ameh64', fontSet: 'fab', fontIcon: 'fa-github' },
    {
      href: 'https://stackoverflow.com/users/8083333/allen-hansen',
      fontSet: 'fab',
      fontIcon: 'fa-stack-overflow'
    },
    { href: 'https://dev.to/ameh64', fontSet: 'fab', fontIcon: 'fa-dev' },
    { href: 'https://twitter.com/ameh64', fontSet: 'fab', fontIcon: 'fa-twitter' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
