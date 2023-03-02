// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import TaskList from '../TaskList/TaskList';

function TaskLists({
  taskData,
  setTaskData,
  handleDeleteTask,
  handleCompleteTask,
}) {
  // const sortedTask = [...taskData].sort((a, b) => b.updatedAt - a.updatedAt);
  // console.log(sortedTask);
  return (
    <S.TaskListContainer>
      {taskData?.map(({ id, title, order, done, createdAt, updatedAt }) => {
        return (
          <TaskList
            key={id}
            id={id}
            order={order}
            title={title}
            done={done}
            createdAt={createdAt}
            updatedAt={updatedAt}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            taskData={taskData}
            setTaskData={setTaskData}
          />
        );
      })}
    </S.TaskListContainer>
  );
}

export default TaskLists;
