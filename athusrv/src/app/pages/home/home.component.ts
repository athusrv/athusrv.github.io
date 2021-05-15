import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isMobile!: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isMobile = breakpointObserver.isMatched('(max-width: 649px)')
    breakpointObserver.observe([
      '(max-width: 649px)',
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
  }

}
