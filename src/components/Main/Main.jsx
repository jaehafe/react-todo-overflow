import { useEffect, useState } from 'react';
import { requestDeleteTask } from '../../constants/request';
import Form from '../Form/Form';
import TaskLists from '../TaskLists/TaskLists';
import * as S from './Main.style';

const taskStatusList = ['전체', '완료', '하는 중'];

function Main({
  taskData,
  setTaskData,
  handleTaskSubmit,
  taskInputValue,
  setTaskInputValue,
  handleDeleteTask,
  handleCompleteTask,
}) {
  const [taskStatusSelected, setTaskStatusSelected] = useState('전체');

  /** task 삭제 boilerplate */
  const deleteTasks = async (ids) => {
    await Promise.all(
      ids.map(async (id) => {
        await requestDeleteTask({ id });
      })
    );
  };

  /** 완료한 task만 삭제 */
  const handleDeleteCompletedTask = async () => {
    const completedTask = taskData.filter((task) => {
      return task.done === true;
    });
    const completedTaskIds = completedTask.map((task) => {
      return task.id;
    });
    console.log(completedTaskIds);

    await deleteTasks(completedTaskIds);

    setTaskData(
      taskData.filter((task) => {
        return !completedTaskIds.includes(task.id);
      })
    );
  };

  /** 전체 task 삭제 */
  const handleDeleteAllTask = async () => {
    const allTaskIds = taskData.map((task) => {
      return task.id;
    });

    await deleteTasks(allTaskIds);

    setTaskData([]);
  };

  /** task select 변화 감지 함수 */
  const handleTaskStatusSelect = (e) => {
    setTaskStatusSelected(e.target.value);
  };

  /** select로 필터된 task */
  const filteredTaskData =
    taskStatusSelected === '전체'
      ? taskData
      : taskData.filter(
          // taskStatusSelected === '완료' // true
          (task) => task.done === (taskStatusSelected === '완료')
        );

  return (
    <S.Main>
      <S.MainPadding>
        <S.MainHeaderContainer>
          <S.MainHeaderTitle>할 일 전체</S.MainHeaderTitle>
          <S.SelectContainer
            onChange={handleTaskStatusSelect}
            value={taskStatusSelected}
          >
            {taskStatusList.map((item) => (
              <S.Option value={item} key={item}>
                {item}
              </S.Option>
            ))}
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
            <S.DeleteAllTaskBtn onClick={handleDeleteAllTask}>
              전체 삭제
            </S.DeleteAllTaskBtn>
          </S.DeleteBtnContainer>
        </S.MainHeaderContainer>
        <Form
          handleTaskSubmit={handleTaskSubmit}
          taskInputValue={taskInputValue}
          setTaskInputValue={setTaskInputValue}
        />
        <TaskLists
          taskData={filteredTaskData}
          setTaskData={setTaskData}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
        />
      </S.MainPadding>
    </S.Main>
  );
}

export default Main;
