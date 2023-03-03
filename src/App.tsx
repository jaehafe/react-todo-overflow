import React, { useCallback, useEffect, useState } from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { axiosInstance } from './constants/axios';
import {
  requestAddTask,
  requestDeleteTask,
  requestUpdateTask,
  Todo,
} from './constants/request';

const App = () => {
  const [taskData, setTaskData] = useState<Todo[]>([]);
  const [taskInputValue, setTaskInputValue] = useState<string>('');

  console.log(taskData);
  const fetchTask = async () => {
    try {
      const res = await axiosInstance.get('');
      console.log(res.data);
      setTaskData(res.data);
      return;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  /** task 추가 버튼 클릭 시 작동 */
  const handleTaskSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInputValue.trim().length === 0) return;

    let newTaskData: Todo = {
      title: taskInputValue,
      order: taskData.length + 1,
      done: false,
    };

    // try {
    const { id, createdAt, updatedAt } = await requestAddTask(newTaskData);

    newTaskData = { ...newTaskData, id, createdAt, updatedAt };
    setTaskData((prev: Todo[]) => [...prev, newTaskData]);
    // } catch (err) {
    //   console.log(err);
    // }

    setTaskInputValue('');
  };

  /** task 삭제 버튼 클릭 시 작동 */
  const handleDeleteTask = (id: string) => {
    let newTaskData = taskData.filter((task) => task.id !== id);
    console.log('newTaskData', newTaskData);
    setTaskData(newTaskData);
    requestDeleteTask({ id });
  };

  /** task 완료 버튼 클릭 시 작동 */
  const handleCompleteTask = async (id: string) => {
    const specificTask: Todo | undefined = taskData.find(
      (task) => task.id === id
    );

    if (specificTask) {
      const { done, order, title } = specificTask;
      const updatedTask = await requestUpdateTask({
        id,
        title,
        done: !done,
        order,
      });

      setTaskData(
        taskData.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              done: updatedTask.done,
              updatedAt: updatedTask.updatedAt,
            };
          } else {
            return task;
          }
        })
      );
    }
  };

  return (
    <div>
      <ResetCss />
      <GlobalStyles />
      <Header taskData={taskData} />
      <Main
        taskData={taskData}
        setTaskData={setTaskData}
        handleTaskSubmit={handleTaskSubmit}
        taskInputValue={taskInputValue}
        setTaskInputValue={setTaskInputValue}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
};

export default App;
