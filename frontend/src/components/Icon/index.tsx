import { css } from '../../../styled-system/css';

type Props = {
  text: string;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'blue' | 'green' | 'pink';
};

const Icon = (props: Props) => {
  const { text, size, color } = props;

  // style
  const sizeStyles = {
    small: '16px',
    medium: '32px',
    large: '48px',
  };

  const fontSizeStyles = {
    small: '10px',
    medium: '20px',
    large: '32px',
  };

  const iconStyle = css({
    w: sizeStyles[size],
    h: sizeStyles[size],
    bg: color,
    fontSize: fontSizeStyles[size],
    textAlign: 'center',
    borderRadius: '50%',
  });

  return <div className={iconStyle}>{text}</div>;
};

export default Icon;
