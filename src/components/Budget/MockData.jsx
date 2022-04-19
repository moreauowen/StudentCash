import { v4 as uuid } from 'uuid';

export const transactions = [
  {
    id: uuid(),
    name: 'Family',
    date: '4/13/2022',
    type: 'income',
    amount: 50000
  },
  {
    id: uuid(),
    name: 'uberEats',
    date: '4/12/2022',
    type: 'expense',
    amount: 22
  },
  {
    id: uuid(),
    name: 'uber',
    date: '4/12/2022',
    type: 'expense',
    amount: 15
  },
  {
    id: uuid(),
    name: 'uberEats',
    date: '4/11/2022',
    type: 'expense',
    amount: 30
  },
  {
    id: uuid(),
    name: 'uberEats',
    date: '4/10/2022',
    type: 'expense',
    amount: 10
  },
  {
    id: uuid(),
    name: 'YouTube',
    date: '4/9/2022',
    type: 'expense',
    amount: 19.99
  },
  {
    id: uuid(),
    name: 'Chegg',
    date: '4/9/2022',
    type: 'expense',
    amount: 29.99
  },
  {
    id: uuid(),
    name: 'SuperPizza',
    date: '4/8/2022',
    type: 'expense',
    amount: 13
  },
  {
    id: uuid(),
    name: 'uberEats',
    date: '4/1/2022',
    type: 'expense',
    amount: 97
  },
  {
    id: uuid(),
    name: 'uber',
    date: '4/12/2022',
    type: 'expense',
    amount: 24
  }
];