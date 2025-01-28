import { useContext, useEffect } from 'react';

import Button from '../components/Button';
import { LayoutContext } from '../components/Layout';
import ToDoList from '../feature/ToDoList/components/ToDoList';
import { todoItemDummyData } from '../utils/dummyData/todoItem';

import './Home.scss';

const Home = () => {
  const { setCurrentPage } = useContext(LayoutContext);

  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);

  return (
    <div className="home-container">
      <div className="button-content">
        <Button size="medium" bg="white">
          フィルター
        </Button>
        <Button size="medium" bg="white">
          マイタスク
        </Button>
      </div>
      <ToDoList title="進行中" items={todoItemDummyData} />
    </div>
  );
};

export default Home;
