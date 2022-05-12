import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 50px;
    width: 150px;
    border: solid 1px black;
`;

type Props = {
  label?: string;
  onClick: () => void;
};

export default function Button(props: Props) {
  const { label = '', onClick } = props;
  return (
    <StyledButton
      type="button"
      onClick={() => onClick()}
    >
      {label}
    </StyledButton>
  );
}
