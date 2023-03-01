import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './style/GlobalStyle';
import ResetCss from './style/ResetCss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { axiosInstance } from './constants/axios';

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

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      title: taskInputValue,
      done: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    // axios post
    requestAddTask(taskList);
  };

  const requestAddTask = async () => {
    try {
      await axiosInstance.post({
        title: taskInputValue,
        done: false,
      });
    } catch (err) {
      const response = err.response;
      alert(`${response.status} error: ${response.data.message}`);
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
