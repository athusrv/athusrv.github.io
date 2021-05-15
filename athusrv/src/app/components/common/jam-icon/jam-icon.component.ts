import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jam-icon',
  templateUrl: './jam-icon.component.html',
  styleUrls: ['./jam-icon.component.scss']
})
export class JamIconComponent implements OnInit {
  @Input()
  icon!: string
  @Input()
  size?: number = 16
  @Input()
  color?: string = 'black'

  constructor() { }

  ngOnInit(): void {
  }

}
