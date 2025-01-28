import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import { todoType } from '../../../types/todoType';
import { formatDate } from '../../../utils/formatDate';

import './ToDoItem.scss';

type Props = {
  items: todoType;
};

const ToDoItem = (props: Props) => {
  const { items } = props;

  return (
    <div className="todo-item">
      <div className="item-header">
        <div>{`#${items.id}`}</div>
        <Button size="small" bg="white">
          ・・・
        </Button>
      </div>
      <div>{items.title}</div>
      <div className="user-icon-content">
        {items.applicable.map((name) => (
          <Icon text={name[0]} size="medium" color="pink" />
        ))}
      </div>
      <div>{formatDate(items.endDate)}</div>
    </div>
  );
};

export default ToDoItem;
