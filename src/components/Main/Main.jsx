import React from 'react';
import TaskLists from '../TaskLists/TaskLists';
import * as S from './Main.style';

function Main() {
  return (
    <S.Main>
      <S.MainPadding>
        <S.MainHeaderContainer>
          <S.MainHeaderTitle>할 일 전체</S.MainHeaderTitle>
          <S.SelectContainer>
            <S.Option>전체</S.Option>
            <S.Option>완료</S.Option>
            <S.Option>하는 중</S.Option>
          </S.SelectContainer>
          <S.SelectContainer>
            <S.Option>시간 정렬</S.Option>
            <S.Option>최신 순</S.Option>
            <S.Option>오래된 순</S.Option>
          </S.SelectContainer>
          <S.DeleteBtnContainer>
            <S.DeleteCompletedTaskBtn>완료만 삭제</S.DeleteCompletedTaskBtn>
            <S.DeleteAllTaskBtn>전체 삭제</S.DeleteAllTaskBtn>
          </S.DeleteBtnContainer>
          {/*  */}
        </S.MainHeaderContainer>
        <S.InputContainer>
          <S.AddTaskInput />
          <S.AddTaskBtn>추가</S.AddTaskBtn>
        </S.InputContainer>
        {/*  */}
        <TaskLists />
      </S.MainPadding>
    </S.Main>
  );
}

export default Main;