import React, { useCallback, useEffect, useState } from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { axiosInstance } from './constants/axios';
import { requestAddTask, requestDeleteTask } from './constants/request';

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
      // id: taskOrder(),
      // done: false,
      // createdAt: formattedDate(taskOrder()),
      // updatedAt: formattedDate(taskOrder()),
    };

    setTaskData((prev) => [newTaskData, ...prev]);
    requestAddTask(newTaskData);
    setTaskInputValue('');
  };

  /** task 삭제 버튼 클릭 시 작동 */
  const handleDeleteTask = (id) => {
    let newTaskData = taskData.filter((task) => task.id !== id);
    console.log('newTaskData', newTaskData);
    setTaskData(newTaskData);
    requestDeleteTask({ id });
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
      />
    </div>
  );
};

export default App;
