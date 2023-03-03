import React from 'react';
import * as S from './Header.style';
import todoLogo from '../../assets/todoLogo.svg';
import { Todo } from '../../constants/request';

interface TaskDataProps {
  taskData: Todo[];
}

function Header({ taskData }: TaskDataProps) {
  const countTask = (status: boolean) => {
    return taskData.filter((task: Todo) => {
      return task.done === status;
    });
  };
  const completedTask = countTask(true);
  const isDoingTask = countTask(false);

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoLink>
          <S.LogoImage src={todoLogo} alt="main logo" />
          <S.LogoName>Todo overflow</S.LogoName>
        </S.LogoLink>
      </S.LogoWrapper>

      <S.Nav>
        <S.TodoTotalCount>할 일 전체 {taskData.length}개</S.TodoTotalCount>
        <S.CompletedTask>완료 {completedTask.length}개</S.CompletedTask>
        <S.RemainingTask>하는 중 {isDoingTask.length}개</S.RemainingTask>
      </S.Nav>
    </S.Container>
  );
}

export default Header;
