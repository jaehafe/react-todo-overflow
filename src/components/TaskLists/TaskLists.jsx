// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import TaskList from '../TaskList/TaskList';

function TaskLists({ taskData, handleDeleteTask }) {
  // const sortedTask = [...taskList].sort((a, b) => b.updatedAt - a.updatedAt);
  // console.log(sortedTask);
  return (
    <S.TaskListContainer>
      {taskData?.map(({ id, title, order, done, createdAt, updatedAt }) => {
        // console.log('task', task);
        // const { id, title, order, done, createdAt, updatedAt } = task;
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
          />
        );
      })}
    </S.TaskListContainer>
  );
}

export default TaskLists;
