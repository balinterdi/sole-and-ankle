import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe}/>
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 32px;
`;

const ShoeWrapper = styled.div`
  width: 275px;
  flex-grow: 1;
  flex-shrink: 0;
`;
/*
  This, above, could also be
  flex: 1 (short-hand for flex-grow: 1, flex-shrink: 1);
  min-width: 275px;
*/

export default ShoeGrid;
