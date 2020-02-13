import * as React from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import {_Container} from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
}

const Container = ({children, ...props}: Props) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#C91592', '#DF3E3C']}
      style={styles.container}>
      <_Container {...props}>{children}</_Container>
    </LinearGradient>
  );
};

Container.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
