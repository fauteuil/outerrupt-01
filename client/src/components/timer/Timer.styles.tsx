import styled from 'styled-components';
import { Visible } from '../../common/types';

export const OrangeCircle = styled.div`
  border: 1rem solid orange;
  border-radius: 5rem;
  padding-top: 2rem;
  height: 3rem;
  width: 5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: orangered;
    background-color: lightgrey;
  }
  &:active {
    border-color: red;
    background-color: white;
  }
`;

export const TimerWrapper = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  padding-right:2rem;
  /* right: 4rem; */
`;

export const TimerControlToggleWrapper = styled.div<Visible>`
  cursor: pointer;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  top: 4rem;
  left: 2.5rem;
`;
