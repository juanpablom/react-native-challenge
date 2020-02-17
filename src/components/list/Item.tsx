import React from 'react';
import {ListItem} from 'react-native-elements';
import style from './styles';
import {IDrink} from '../../entities/drinks/IDrinks';

const Item = (item: IDrink) => (
  <ListItem
    key={item.idDrink}
    leftAvatar={{
      rounded: true,
      size: 'large',
      source: {
        uri: item.strDrinkThumb,
      },
    }}
    title={item.strDrink}
    titleStyle={style.listItemTitle}
    chevron={style.listItemChevron}
    containerStyle={style.listItem}
  />
);

export default Item;
