import styled from 'styled-components';
import { RemIntegerWidth, Color, Width } from '../../common/types';
import { ScalableSVG } from '../icon/icon.styles';

// Triangle styles calculated from the passed integer rem width
export const ArrowRight = styled.div<RemIntegerWidth>`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: ${({ width }) => (width ? `${width * 0.5}rem` : '0.5rem')} solid
    transparent;
  border-bottom: ${({ width }) => (width ? `${width * 0.5}rem` : '0.5rem')}
    solid transparent;
  border-left: ${({ width }) => (width ? `${width * 0.75}rem` : '0.75rem')}
    solid ${(props) => props?.color || 'black'};
`;

export const PauseTick = styled.div<Color>`
  color: ${(props) => props?.color || 'black'};
  position: absolute;
  height: 100%;
  width: 33%;
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
`;

export const PauseWrapper = styled.div<Width>`
  position: relative;
  width: ${({ width }) => width || '3rem'};
`;

export const ScalableSVGPlay = styled(ScalableSVG)`
  width: 2rem;
  height: 2rem;
`;

export const ScalableSVGPause = styled(ScalableSVG)`
  width: 2rem;
  height: 2rem;
`;
