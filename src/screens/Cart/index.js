import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import CartStatus from '../../components/CartStatus';

const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
    quantity: 1
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantity: 2
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantity: 3
  }
];

export default function Cart() {
  const total = services.reduce((soma, { price, quantity }) => soma + (price * quantity), 0);
  return <>
    <CartStatus total={total} />
    <FlatList
      data={services}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ id }) => String(id)}
    />
  </>

}