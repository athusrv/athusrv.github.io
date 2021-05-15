export class MenuItem {
  id!: string
  name!: string
  selected!: boolean

  static build(payload: any): MenuItem {
    const item = new MenuItem()

    item.id = payload.id
    item.name = payload.name
    item.selected = payload.selected

    return item
  }
}
