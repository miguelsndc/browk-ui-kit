import { Wrapper } from './styles';

type TooltipProps = {
  text: string;
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right';
};

export default function Tooltip({ text, position }: TooltipProps) {
  return <Wrapper position={position}>{text}</Wrapper>;
}
