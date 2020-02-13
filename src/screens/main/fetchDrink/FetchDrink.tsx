import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ScrollView, Text, Image, View, SafeAreaView} from 'react-native';
import {SearchBar, Icon, ListItem} from 'react-native-elements';
import State from '../../../reducers';
import {fetchDrink, clearDrink} from '../../../actions/drink';
import Container from '../../../components/container';
import {goToPage} from '../../../navigation';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  fetchDrink: Function;
  clearDrink: Function;
  drinkData: any;
  fetchDrinkError: string;
  fetchDrinkIsLoading: boolean;
  navigation: any;
}

const FetchDrink = (props: Props) => {
  const {
    fetchDrink,
    drinkData,
    fetchDrinkError,
    fetchDrinkIsLoading,
    clearDrink,
  } = props;
  const [search, setSearch] = useState('');

  const updateSearch = (search: any) => {
    setSearch(search);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      await fetchDrink(search);
    }
    if (search.length > 3) fetchMyAPI();
  }, [search]);

  return (
    <>
      <SafeAreaView
        style={{
          width: '80%',
          maxHeight: 100,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <Icon
            name="arrow-left"
            type="font-awesome"
            onPress={() => goToPage('Home')}
          />
        </View>
        <SearchBar
          showLoading={fetchDrinkIsLoading}
          onChangeText={updateSearch}
          onCancel={() => clearDrink()}
          value={search}
          platform="ios"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{color: '#DF3E3C'}}
          placeholder="Search"
          containerStyle={{backgroundColor: 'transparent'}}
        />
      </SafeAreaView>

      <Container>
        {fetchDrinkIsLoading || fetchDrinkError ? (
          <Text>{fetchDrinkError}</Text>
        ) : (
          <>
            <ScrollView>
              {!!drinkData &&
                !!drinkData.drinks &&
                drinkData.drinks.map((drink: any) => (
                  <ListItem
                    key={drink.idDrink}
                    leftAvatar={{
                      rounded: true,
                      size: 'large',
                      source: {
                        uri: drink.strDrinkThumb,
                      },
                    }}
                    title={drink.strDrink}
                    titleStyle={{fontWeight: '500'}}
                    chevron={{color: 'white'}}
                    containerStyle={{
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10,
                      borderRadius: 10, // adds the rounded corners
                      backgroundColor: '#fff',
                    }}
                  />
                ))}
            </ScrollView>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  drinkData: state.drink.drinkData,
  fetchDrinkError: state.drink.fetchDrinkError,
  fetchDrinkIsLoading: state.drink.fetchDrinkIsLoading,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchDrink: (search: String) => dispatch(fetchDrink(search)),
  clearDrink: () => dispatch(clearDrink()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchDrink);
