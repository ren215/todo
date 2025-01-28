import { cva } from '../../../styled-system/css';

// style
const iconStyle = cva({
  base: { textAlign: 'center', color: 'white' },
  variants: {
    size: {
      small: { w: '16px', h: '16px', borderRadius: '1rem' },
      medium: { w: '32px', h: '32px', borderRadius: '1rem' },
      large: { w: '48px', h: '48px', borderRadius: '1rem' },
    },
    fontSize: {
      small: { fontSize: '10px' },
      medium: { fontSize: '20px' },
      large: { fontSize: '32px' },
    },
    bg: {
      red: { bg: 'red' },
      blue: { bg: 'blue' },
      green: { bg: 'green' },
      pink: { bg: 'pink' },
    },
  },
});

// type
type Props = {
  text: string;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'blue' | 'green' | 'pink';
};

const Icon = (props: Props) => {
  const { text, size, color } = props;

  return <div className={iconStyle({ size: size, fontSize: size, bg: color })}>{text}</div>;
};

export default Icon;
