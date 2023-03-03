import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './TaskModal.style';

function TaskModal({
  id,
  order,
  done,
  createdAt,
  updatedAt,
  title,
  openModal,
  handleCloseTaskDetailModal,
}) {
  console.log('openModal:', openModal);
  return ReactDOM.createPortal(
    <S.ModalContainer $openModal={openModal}>
      {openModal && (
        <S.ModalContent>
          <div onClick={handleCloseTaskDetailModal}>x</div>
          <S.ModalTitle>task: {title}</S.ModalTitle>
          <S.ModalDescription>
            <div>task id: {id}</div>
            <div>task 순서: {order}</div>
            <div>완료여부: {done ? '완료' : '하는 중'}</div>
            <div>생성 일: {createdAt}</div>
            <div>수정 일: {updatedAt}</div>
          </S.ModalDescription>
        </S.ModalContent>
      )}
    </S.ModalContainer>,

    document.getElementById('overlay-root')
  );
}

export default TaskModal;
