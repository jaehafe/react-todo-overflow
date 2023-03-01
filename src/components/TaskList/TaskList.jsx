import React from 'react';
import * as S from './TaskList.style';
import { formattedDate } from '../../constants/utils.js';

function TaskList({ id, order, title, done, createdAt, updatedAt }) {
  // console.log('id', id);
  return (
    <S.TaskContainer
      key={id}
      id={id}
      done={done ? 'true' : 'false'}
      order={order}
    >
      <S.TaskWrapper>
        <S.TaskDateWrapper>
          <S.TaskDate>생성: {formattedDate(createdAt)}</S.TaskDate>
          <S.TaskDate>수정: {formattedDate(updatedAt)}</S.TaskDate>
        </S.TaskDateWrapper>
        <S.TaskTitle>{title}</S.TaskTitle>
      </S.TaskWrapper>
      <S.TaskBtnWrapper>
        <S.TaskBtn>완료</S.TaskBtn>
        <S.TaskBtn>수정</S.TaskBtn>
        <S.TaskBtn onClick={handleDeleteTask}>삭제</S.TaskBtn>
      </S.TaskBtnWrapper>
    </S.TaskContainer>
  );
}

export default TaskList;
