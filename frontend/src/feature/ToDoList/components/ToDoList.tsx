import Button from '../../../components/Button';
import { todoType } from '../../../types/todoType';
import ToDoItem from './ToDoItem';

import './ToDoList.scss';

type Props = {
  title: string;
  items: todoType[];
};

const ToDoList = (props: Props) => {
  const { title, items } = props;

  return (
    <div className="todo-list">
      <div className="title-content">
        <div className="kari">
          <div>{`${title}`}</div>
          <div className="todo-item-count">{`${items.length}`}</div>
        </div>
        <Button size="small" bg="white">
          ・・・
        </Button>
      </div>
      <div className="todo-items">
        <button className="add-button">＋タスクを追加</button>
        <div className="todo-item-content">
          {items.map((item) => (
            <ToDoItem items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
