// import TaskList from '../TaskList/TaskList';
import * as S from './TaskLists.style';
import TaskList from '../TaskList/TaskList';
import { Todo } from '../../constants/request';

interface TaskListsProps {
  taskData: Todo[];
  setTaskData: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleDeleteTask: (id: string) => void;
  handleCompleteTask: (id: string) => void;
}

function TaskLists({
  taskData,
  setTaskData,
  handleDeleteTask,
  handleCompleteTask,
}: TaskListsProps) {
  return (
    <S.TaskListContainer>
      {taskData?.map(({ id, title, order, done, createdAt, updatedAt }) => {
        return (
          <TaskList
            key={id}
            id={id!}
            order={order!}
            title={title!}
            done={done}
            createdAt={createdAt!}
            updatedAt={updatedAt!}
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
