import { axiosInstance } from './axios';

/** axios add post */
export const requestAddTask = async (newTask) => {
  try {
    const res = await axiosInstance.post('/', newTask);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

/** axios delete */
export const requestDeleteTask = async ({ id }) => {
  try {
    await axiosInstance.delete(`/${id}`);
    return;
  } catch (err) {
    console.log(err);
  }
};

/** axios put */
export const requestUpdateTask = async ({ id, title, done, order }) => {
  try {
    const res = await axiosInstance.put(`/${id}`, {
      title,
      done,
      order,
    });
    console.log('updatedTask', res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
