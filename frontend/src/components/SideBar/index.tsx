import { useContext } from 'react';
import { LayoutContext } from '../Layout';

import { useNavigate } from 'react-router-dom';
import './index.scss';

const SideBar = () => {
  const { currentPage } = useContext(LayoutContext);

  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className="sidebar-button-content">
        <button
          className={`home-button ${currentPage === 'home' ? 'active' : 'inactive'}`}
          onClick={() => navigate('/')}
        >
          ホーム
        </button>
        <button
          className={`message-button ${currentPage === 'message' ? 'active' : 'inactive'}`}
          onClick={() => navigate('/add')}
        >
          メッセージ
        </button>
      </div>
    </div>
  );
};

export default SideBar;
