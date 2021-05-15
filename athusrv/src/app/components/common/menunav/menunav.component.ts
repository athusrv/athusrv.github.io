import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { MenuItem } from "../../../models/menu-item";

@Component({
  selector: 'menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuNavComponent implements OnInit {
  items: MenuItem[] = [
    MenuItem.build({
      id: uuid(),
      name: 'Home',
      selected: true,
    }),
    MenuItem.build({
      id: uuid(),
      name: 'About me',
      selected: false,
    }),
    MenuItem.build({
      id: uuid(),
      name: 'Portfolio',
      selected: false,
    }),
    MenuItem.build({
      id: uuid(),
      name: 'Hire me',
      selected: false,
    })
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectMenuItem(item: MenuItem) {
    this.items.forEach(item => item.selected = false);
    this.items.find(i => i.id === item.id)!.selected = true;
  }
}
