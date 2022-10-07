export const coffee = [
  {
    id: '16643568597297',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 1,
    imageURL: '../../../assets/traditionalEspresso.svg',
    inventory: 400,
    amount: 1,
    type: {
      traditional: true,
      withMilk: false,
      special: false,
      iced: false,
      alcoholic: false,
    },
  },
  {
    id: '1664568597297',
    name: 'cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 2,
    imageURL: '../../../assets/cuban.svg',
    inventory: 1,
    amount: 1,
    type: {
      traditional: false,
      withMilk: false,
      special: true,
      iced: true,
      alcoholic: true,
    },
  },
  {
    id: '1664563597297',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 5,
    imageURL: '../../../assets/cuban.svg',
    inventory: 20,
    amount: 1,
    type: {
      traditional: true,
      withMilk: true,
      special: false,
      iced: false,
      alcoholic: false,
    },
  },
]
