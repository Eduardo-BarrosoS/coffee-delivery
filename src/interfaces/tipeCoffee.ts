export interface ICoffee {
  id: string
  name: string
  description: string
  price: number
  imageURL: string
  inventory: number
  type: {
    traditional: boolean
    withMilk: boolean
    special: boolean
    iced: boolean
    alcoholic: boolean
  }
}
