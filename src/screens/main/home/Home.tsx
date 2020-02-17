import React from 'react';
import {Icon} from 'react-native-elements';
import {goToPage} from '../../../navigation';
import Container from '../../../components/container';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {drinkLogo} from '../../../assets/images';
import style from './styles';

const Home = () => {
  return (
    <Container>
      <View style={style.container}>
        <Image style={style.logo} source={drinkLogo} />
        <View style={style.wrapperLogo}>
          <Text style={style.textLogoBold}>Cocktail</Text>
          <Text style={style.textLogo}>Finder</Text>
        </View>
        <TouchableOpacity
          onPress={() => goToPage('FetchDrink')}
          style={style.searchBar}>
          <View style={style.searchBarIcon}>
            <Icon name="search" type="material" color="#DF3E3C" />
          </View>
          <View>
            <Text>Search your Favorite Cocktail</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Home;
