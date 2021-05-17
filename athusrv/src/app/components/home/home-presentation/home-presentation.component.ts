import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDownloadCV() {
    window.open('assets/Athus CV.pdf', '_blank');
  }
}
