import React from 'react';
import {FlatList} from 'react-native';
import {IDrink} from '../../entities/drinks/IDrinks';
import Item from './Item';

interface Props {
  list: IDrink[];
}

const List = (props: Props) => {
  const {list} = props;
  return (
    <>
      {!!list && (
        <FlatList
          data={list}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={item => item.idDrink}
        />
      )}
    </>
  );
};

export default List;
