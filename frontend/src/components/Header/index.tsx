import { ReactNode } from 'react';

import { cva } from '../../../styled-system/css';

// style
const HeaderStyle = cva({
  base: {
    bg: '#322653',
    w: '100%',
    h: '50px',
    pl: '5px',
    pr: '5px',
    zIndex: '5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// type
type Props = {
  items: {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
  };
};

const Header = (props: Props) => {
  const { items } = props;

  return (
    <div className={HeaderStyle()}>
      <div>{items.left}</div>
      <div>{items.center}</div>
      <div>{items.right}</div>
    </div>
  );
};

export default Header;
