import React, { useCallback, useEffect, useState } from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { axiosInstance } from './constants/axios';
import { requestAddTask, requestDeleteTask } from './constants/request';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState('');

  const fetchTask = async () => {
    try {
      const res = await axiosInstance.get('');
      // console.log(res.data);
      setTaskList(res.data);
    } catch (err) {
      console.log(err);
      // return [];
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const taskOrder = () => {
    return Date.now();
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    let newTask = {
      // id: taskOrder(),
      title: taskInputValue,
      order: taskOrder(),
      // done: false,
      // createdAt: formattedDate(taskOrder()),
      // updatedAt: formattedDate(taskOrder()),
    };

    setTaskList((prev) => [newTask, ...prev]);

    requestAddTask(newTask);
    // setTaskInputValue('');
  };

  const handleDeleteTask = useCallback(
    (id) => {
      let newTaskList = taskList.filter((task) => task.id !== id);
      console.log('newTaskList', newTaskList);
      setTaskList(newTaskList);
      requestDeleteTask({ id });
    },
    [taskList]
  );

  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <Header />
      <Main
        taskList={taskList}
        handleTaskSubmit={handleTaskSubmit}
        taskInputValue={taskInputValue}
        setTaskInputValue={setTaskInputValue}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
