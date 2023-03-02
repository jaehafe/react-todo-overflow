// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import TaskList from '../TaskList/TaskList';

function TaskLists({ taskData, handleDeleteTask }) {
  // const sortedTask = [...taskList].sort((a, b) => b.updatedAt - a.updatedAt);
  // console.log(sortedTask);
  return (
    <S.TaskListContainer>
      {taskData?.map((task) => {
        // console.log('task', task);
        const { id, title, order, done, createdAt, updatedAt } = task;
        return (
          <div key={id}>
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
          </div>
        );
      })}
    </S.TaskListContainer>
  );
}

export default TaskLists;
