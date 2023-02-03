import { ButtonBaseProps } from '.';
import { ButtonWrapper, ScalableSVGPause } from './button.styles';

export function PauseButton({ color, label, onClick, title }: ButtonBaseProps) {
  return (
    <ButtonWrapper title={title}>
      <ScalableSVGPause
        enable-background='new 0 0 24 24'
        fill={color}
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <rect fill='none' height='24' width='24' />
          <rect fill='none' height='24' width='24' />
          <rect fill='none' height='24' width='24' />
        </g>
        <g>
          <g />
          <path d='M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z' />
        </g>
      </ScalableSVGPause>
    </ButtonWrapper>
  );
}
