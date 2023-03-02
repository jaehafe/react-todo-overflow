import { requestDeleteTask } from '../../constants/request';
import Form from '../Form/Form';
// import TaskList from '../TaskList/TaskList';
import TaskLists from '../TaskLists/TaskLists';
import * as S from './Main.style';

function Main({
  taskData,
  setTaskData,
  handleTaskSubmit,
  taskInputValue,
  setTaskInputValue,
  handleDeleteTask,
  handleCompleteTask,
}) {
  /** 완료한 task만 삭제 */
  const handleDeleteCompletedTask = async () => {
    const completedTask = taskData.filter((task) => {
      return task.done === true;
    });
    const completedTaskIds = completedTask.map((task) => {
      return task.id;
    });
    console.log(completedTaskIds);

    completedTaskIds.map(async (id) => {
      await requestDeleteTask({ id });

      setTaskData(
        taskData.filter((task) => {
          console.log(completedTaskIds.includes(task.id));
          return !completedTaskIds.includes(task.id);
        })
      );
    });
  };

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
            <S.DeleteCompletedTaskBtn onClick={handleDeleteCompletedTask}>
              완료만 삭제
            </S.DeleteCompletedTaskBtn>
            <S.DeleteAllTaskBtn>전체 삭제</S.DeleteAllTaskBtn>
          </S.DeleteBtnContainer>
        </S.MainHeaderContainer>
        <Form
          handleTaskSubmit={handleTaskSubmit}
          taskInputValue={taskInputValue}
          setTaskInputValue={setTaskInputValue}
        />
        <TaskLists
          taskData={taskData}
          setTaskData={setTaskData}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      </S.MainPadding>
    </S.Main>
  );
}

export default Main;
