import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  logo: {width: 50, height: 50, alignSelf: 'center', marginBottom: 10},
  wrapperLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textLogo: {fontSize: 30, color: 'white'},
  textLogoBold: {fontSize: 30, fontWeight: 'bold', color: 'white'},
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: 40,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchBarIcon: {width: 80},
});
