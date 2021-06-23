import { Component, OnInit } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'ameh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public copyrightYear: number = new Date().getFullYear();

  public socialIconLinks: {
    href: string;
    fontSet: IconPrefix;
    fontIcon: IconName;
  }[] = [
    {
      href: 'https://www.linkedin.com/in/allen-hansen',
      fontSet: 'fab',
      fontIcon: 'linkedin',
    },
    {
      href: 'https://github.com/ameh64',
      fontSet: 'fab',
      fontIcon: 'github',
    },
    {
      href: 'https://stackoverflow.com/users/8083333/allen-hansen',
      fontSet: 'fab',
      fontIcon: 'stack-overflow',
    },
    { href: 'https://dev.to/ameh64', fontSet: 'fab', fontIcon: 'dev' },
    {
      href: 'https://twitter.com/ameh64',
      fontSet: 'fab',
      fontIcon: 'twitter',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
