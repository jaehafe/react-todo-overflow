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
} from './constants/request';

const taskOrder = () => {
  return Date.now();
};

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState('');

  const fetchTask = async () => {
    try {
      const res = await axiosInstance.get();
      // console.log(res.data);
      setTaskData(res.data);
      // const dataWithId = res.data.map((task) => ({ ...task, id: task.order }));
      // setTaskData(dataWithId);
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
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (taskInputValue.trim().length === 0) return;

    let newTaskData = {
      title: taskInputValue,
      order: taskOrder(),
    };

    try {
      const { id, createdAt, updatedAt } = await requestAddTask(newTaskData);
      newTaskData = { ...newTaskData, id, createdAt, updatedAt };
      setTaskData((prev) => [newTaskData, ...prev]);
    } catch (err) {
      console.log(err);
    }

    setTaskInputValue('');
  };

  /** task 삭제 버튼 클릭 시 작동 */
  const handleDeleteTask = (id) => {
    let newTaskData = taskData.filter((task) => task.id !== id);
    console.log('newTaskData', newTaskData);
    setTaskData(newTaskData);
    requestDeleteTask({ id });
  };

  /** task 완료 버튼 클릭 시 작동 */
  const handleCompleteTask = async (id) => {
    // const { done, title, order } = await requestUpdateTask({ id });
    let newTaskData = taskData.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      console.log('completeTask', task);
      return task;
    });
    let specificTask = taskData.find((task) => task.id === id);
    const { title, done, order } = specificTask;
    setTaskData(newTaskData);
    requestUpdateTask({ id, title, done, order });
  };

  return (
    <div>
      <ResetCss />
      <GlobalStyles />
      <Header />
      <Main
        taskData={taskData}
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
