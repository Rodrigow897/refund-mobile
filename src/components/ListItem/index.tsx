import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

type ExpenseItemProps = {
  name: string;
  category: string;
  value: number;
  icon: string;
};

export function ListItem({ name, category, value, icon }: ExpenseItemProps) {
  return (
      <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name={icon as any} size={18} color="#3F8C7C" />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>
      <Text style={styles.value}>R$ {value.toFixed(2).replace('.', ',')}</Text>
    </View>
  );
}

export default ListItem;