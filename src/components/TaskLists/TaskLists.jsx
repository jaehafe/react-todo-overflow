import React, { useState } from 'react';
// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';

function TaskLists() {
  const [completed, setCompleted] = useState('true');

  return (
    <>
      <S.TaskContainer completed={completed}>
        <S.TaskWrapper>
          <S.TaskDateWrapper>
            <S.TaskDate>생성: 2023-03-01</S.TaskDate>
            <S.TaskDate>수정: 2023-03-02</S.TaskDate>
          </S.TaskDateWrapper>
          <S.TaskTitle>123</S.TaskTitle>
        </S.TaskWrapper>
        <S.TaskBtnWrapper>
          <S.TaskBtn>완료</S.TaskBtn>
          <S.TaskBtn>수정</S.TaskBtn>
          <S.TaskBtn>완료</S.TaskBtn>
        </S.TaskBtnWrapper>
      </S.TaskContainer>
      {/*  */}
      <S.TaskContainer completed={completed}>
        <S.TaskWrapper>
          <S.TaskDateWrapper>
            <S.TaskDate>생성: 2023-03-01</S.TaskDate>
            <S.TaskDate>수정: 2023-03-02</S.TaskDate>
          </S.TaskDateWrapper>
          <S.TaskTitle>123</S.TaskTitle>
        </S.TaskWrapper>
        <S.TaskBtnWrapper>
          <S.TaskBtn>완료</S.TaskBtn>
          <S.TaskBtn>수정</S.TaskBtn>
          <S.TaskBtn>완료</S.TaskBtn>
        </S.TaskBtnWrapper>
      </S.TaskContainer>
    </>
  );
}

export default TaskLists;
