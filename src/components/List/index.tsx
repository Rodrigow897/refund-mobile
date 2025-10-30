import ListItem from '@/components/ListItem';
import { listData } from '@/data/listData';
import React from 'react';
import { FlatList, View } from 'react-native';
import styles from "./styles";


export function List() {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            category={item.category}
            value={item.value}
            icon={item.icon}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;