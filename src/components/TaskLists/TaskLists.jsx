// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import { formattedDate } from '../../constants/utils';

function TaskLists({ taskList, handleTaskSubmit }) {
  return (
    <S.TaskListContainer>
      {taskList.map((task) => {
        const { id, order, title, done, createdAt, updatedAt } = task;
        return (
          <S.TaskContainer
            done={done ? 'true' : 'false'}
            key={id}
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
              <S.TaskBtn>삭제</S.TaskBtn>
            </S.TaskBtnWrapper>
          </S.TaskContainer>
        );
      })}
    </S.TaskListContainer>
  );
}

export default TaskLists;
