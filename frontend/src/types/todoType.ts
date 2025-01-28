export type todoType = {
  id: string;
  state: StateType; // 状態
  title: string; // タイトル
  creator: string; // 作成者
  applicable: string[]; // 該当者
  endDate: Date; // 期日
};

// type stateType = {
//   notStarted: string; // 未着手
//   inProgress: string; // 進行中
//   pendingApproval: string; // 承認待ち
//   completed: string; // 完了
//   onHold: string; // 保留
// };

type StateType = 'notStarted' | 'inProgress' | 'pendingApproval' | 'completed' | 'onHold';
