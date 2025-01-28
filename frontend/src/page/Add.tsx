import { useContext, useEffect } from 'react';
import { LayoutContext } from '../components/Layout';

const Add = () => {
  const { setCurrentPage } = useContext(LayoutContext);

  useEffect(() => {
    setCurrentPage('message');
  }, [setCurrentPage]);

  return <div>Add</div>;
};

export default Add;
