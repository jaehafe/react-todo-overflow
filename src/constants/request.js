import { axiosInstance } from './axios';

/** axios post */
export const requestAddTask = async (newTask) => {
  try {
    await axiosInstance.post('', newTask);
  } catch (err) {
    console.log(err);
  }
};

/** axios delete */
export const requestDeleteTask = async ({ id }) => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (err) {
    console.log(err);
  }
};
