import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import * as S from './TaskModal.style';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export interface TaskModalProps {
  id: string;
  order: number;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  title: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskModal({
  id,
  order,
  done,
  createdAt,
  updatedAt,
  title,
  openModal,
  setOpenModal,
}: TaskModalProps) {
  const taskDetailModalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(taskDetailModalRef, () => {
    setOpenModal(false);
  });

  return ReactDOM.createPortal(
    <S.ModalContainer ref={taskDetailModalRef} $openModal={openModal}>
      {openModal && (
        <S.ModalContent>
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

    document.getElementById('overlay-root') as HTMLDivElement
  );
}

export default TaskModal;
