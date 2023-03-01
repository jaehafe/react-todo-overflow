// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import TaskList from '../TaskList/TaskList';

function TaskLists({ taskList, handleTaskSubmit }) {
  // const sortedTask = [...taskList].sort((a, b) => b.updatedAt - a.updatedAt);
  // console.log(sortedTask);
  return (
    <S.TaskListContainer>
      {taskList.map((task, index) => {
        const { id, order, title, done, createdAt, updatedAt } = task;
        return (
          <TaskList
            key={id}
            id={id}
            order={order}
            title={title}
            done={done}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        );
      })}
    </S.TaskListContainer>
  );
}

export default TaskLists;
