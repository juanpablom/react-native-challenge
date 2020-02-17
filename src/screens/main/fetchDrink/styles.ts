import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navWrapper: {
    width: '80%',
    maxHeight: 100,
    flexDirection: 'row',
  },
  backButtonWrapper: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
  },
  listItem: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10, // adds the rounded corners
    backgroundColor: '#fff',
  },
  searchBar: {
    backgroundColor: 'transparent',
  },
  searchBarCancelButtonColor: {
    color: '#DF3E3C',
  },
});
