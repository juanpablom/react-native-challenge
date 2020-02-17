import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

const defaultStyle = {
  flex: 1,
};

export const SafeContainer = styled(SafeAreaView)(defaultStyle);
export const ContainerGradient = styled(LinearGradient)(defaultStyle);
