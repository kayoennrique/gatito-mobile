import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import WholeField from '../../../components/WholeField';
import Button from '../../../components/Button';
import styles from './styles';

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [expand, setExpand] = useState(false);

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calculateTotal(newQuantity)
  }

  const calculateTotal = (newQuantity) => {
    setTotal(newQuantity * price);
  }

  const invertExpand = () => {
    setExpand(!expand);
    updateTotalQuantity(1);
  }

  return <>
    <TouchableOpacity style={styles.information} onPress={invertExpand}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(price)
      }</Text>
    </TouchableOpacity>
    {expand &&
      <View style={styles.cart}>
        <View>
          <View style={styles.amount}>
            <Text style={styles.description}>Quantidade:</Text>
            <WholeField styles={styles.quantity} amount={quantity} action={updateTotalQuantity} />
          </View>
          <View style={styles.amount}>
            <Text style={styles.description}>Total:</Text>
            <Text style={styles.price}>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(total)
            }</Text>
          </View>
        </View>
        <Button amount="Adicionar ao Carrinhho" action={() => { }} />
      </View>
    }
    <View style={styles.divisor} />
  </>
}
