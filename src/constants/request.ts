import { axiosInstance } from './axios';

// export interface RequestAddTask {
//   id?: string;
//   title: string;
//   order?: number;
//   done?: boolean;

// }

export interface Todo {
  id?: string; // 할 일 ID
  order?: number; // 할 일 순서
  title?: string; // 할 일 제목
  done: boolean; // 할 일 완료 여부
  createdAt?: string; // 할 일 생성일
  updatedAt?: string; // 할 일 수정일
}

// type UpdateTaskType = Pick<Todo, 'id' | 'title' | 'done' | 'order'>;
export type UpdateTaskType = Omit<Todo, 'createdAt' | 'updatedAt'>;

/** axios add post */
export const requestAddTask = async (newTask: Todo): Promise<Todo> => {
  try {
    const res = await axiosInstance.post('/', newTask);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/** axios delete */
export const requestDeleteTask = async ({
  id,
}: {
  id: string;
}): Promise<void> => {
  try {
    await axiosInstance.delete(`/${id}`);
  } catch (err) {
    console.log(err);
  }
};

/** axios put */
export const requestUpdateTask = async ({
  id,
  title,
  done,
  order,
}: UpdateTaskType): Promise<Todo> => {
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
    // return [];
    throw err;
  }
};
