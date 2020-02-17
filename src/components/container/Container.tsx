import * as React from 'react';
import {SafeContainer, ContainerGradient} from './styles';
import {theme} from './../../styles';

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
}

const Container = ({children, ...props}: Props) => {
  return (
    <ContainerGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={theme.gradientColors}>
      <SafeContainer {...props}>{children}</SafeContainer>
    </ContainerGradient>
  );
};

Container.defaultProps = {
  style: {},
};

export default Container;
