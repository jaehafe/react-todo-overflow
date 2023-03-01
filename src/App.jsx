import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { axiosInstance } from './constants/axios';
import { formattedDate } from './constants/utils';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axiosInstance.get();
        console.log(res.data);
        setTaskList(res.data);
      } catch (err) {
        console.log(err);
        return [];
      }
    };
    fetchTask();
  }, []);

  const taskOrder = () => {
    return Date.now();
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();

    let newTask = {
      id: taskOrder(),
      title: taskInputValue,
      order: taskOrder(),
      done: false,
      createdAt: formattedDate(taskOrder()),
      updatedAt: formattedDate(taskOrder()),
    };

    console.log(newTask);
    setTaskList((prev) => [newTask, ...prev]);

    requestAddTask(newTask);
    setTaskInputValue('');
  };

  /** axios post */
  const requestAddTask = async (newTask) => {
    try {
      await axiosInstance.post('', newTask);
    } catch (err) {
      console.log(err.response);
    }
  };

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
      />
    </>
  );
};

export default App;
