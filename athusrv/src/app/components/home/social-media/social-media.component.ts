import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialMediaComponent implements OnInit {
  @Input()
  padding?: number = 4
  @Input()
  color?: string = 'black'

  socialMedias: { icon: string, url: string }[] = [
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/athusvieira/'
    },
    {
      icon: 'github',
      url: 'https://github.com/athusrv'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(url: string) {
    window.open(url)
  }
}
