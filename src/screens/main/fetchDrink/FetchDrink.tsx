import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Text, View, SafeAreaView} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import State from '../../../reducers';
import {fetchDrink, cleanDrink} from '../../../actions/drink';
import Container from '../../../components/container';
import {goToPage} from '../../../navigation';
import style from './styles';
import List from '../../../components/list/List';
import IDrinks from '../../../entities/drinks/IDrinks';

interface Props {
  fetchDrink: Function;
  cleanDrink: Function;
  drinkData: IDrinks;
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
    cleanDrink,
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
      <SafeAreaView style={style.navWrapper}>
        <View style={style.backButtonWrapper}>
          <Icon
            name="arrow-left"
            type="font-awesome"
            onPress={() => goToPage('Home')}
          />
        </View>
        <SearchBar
          showLoading={fetchDrinkIsLoading}
          onChangeText={updateSearch}
          onCancel={() => cleanDrink()}
          value={search}
          platform="ios"
          cancelButtonTitle="Cancel"
          cancelButtonProps={style.searchBarCancelButtonColor}
          placeholder="Search"
          containerStyle={style.searchBar}
        />
      </SafeAreaView>

      <Container>
        {fetchDrinkIsLoading || fetchDrinkError ? (
          <Text>{fetchDrinkError}</Text>
        ) : (
          <List list={!!drinkData && drinkData.drinks} />
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
  cleanDrink: () => dispatch(cleanDrink()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchDrink);
