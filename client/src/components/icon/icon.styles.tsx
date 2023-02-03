import styled from 'styled-components';
import { Width, Height } from '../../common/types';

export const ScalableSVG = styled.svg<Width & Height>`
  width: ${({ width }) => width || '1.5rem'};
  width: ${({ height }) => height || '1.5rem'};
`;
