import React from 'react';
import {Icon} from 'react-native-elements';
import {goToPage} from '../../../navigation';
import Container from '../../../components/container';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {drinkLogo} from '../../../assets/images';

const Home = () => {
  return (
    <Container>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Image
          style={{width: 50, height: 50, alignSelf: 'center', marginBottom: 10}}
          source={drinkLogo}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            Cocktail
          </Text>
          <Text style={{fontSize: 30, color: 'white'}}>Finder</Text>
        </View>
        <TouchableOpacity
          onPress={() => goToPage('FetchDrink')}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            maxHeight: 40,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View style={{width: 80}}>
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
