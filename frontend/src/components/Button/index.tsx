import { ReactNode } from 'react';

import { cva } from '../../../styled-system/css';
import { sizeType } from '../types/sizeType';

// style
const buttonStyle = cva({
  base: { fontSize: '14px', bg: 'pink', textAlign: 'center', borderRadius: '8px', _hover: { opacity: 0.9 } },
  variants: {
    size: {
      small: { w: '63px', h: '24px' },
      medium: { w: '79px', h: '32px' },
      large: { w: '86px', h: '40px', fontSize: '16px' },
    },
    disabled: {
      true: { bg: 'silver', cursor: 'not-allowed', color: 'rgba(0, 0, 0, 0.4)' },
    },
  },
});

type Props = {
  children: ReactNode;
  size?: sizeType;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, size = 'medium', disabled, onClick } = props;

  return (
    <button className={buttonStyle({ disabled: disabled, size: size })} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
