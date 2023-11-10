import * as React from 'react';
import '../../scss/main.scss';
import { Styled } from '../styled';
import { EasyUpload } from '../../src';

export const App = () => {
  return (
    <Styled.Container>
      <EasyUpload fileType={'image'} />
    </Styled.Container>
  );
};
