import { axiosInstance } from './axios';

interface RequestAddTask {
  title: string;
  order?: number;
  done?: boolean;
}

interface Todo {
  id: string; // 할 일 ID
  order: number; // 할 일 순서
  title: string; // 할 일 제목
  done: boolean; // 할 일 완료 여부
  createdAt: string; // 할 일 생성일
  updatedAt: string; // 할 일 수정일
}

// type UpdateTaskType = Pick<Todo, 'id' | 'title' | 'done' | 'order'>;
type UpdateTaskType = Omit<Todo, 'createdAt' | 'updatedAt'>;

/** axios add post */
export const requestAddTask = async (
  newTask: RequestAddTask
): Promise<Todo[]> => {
  try {
    const res = await axiosInstance.post('/', newTask);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
    // throw(err)
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
}: UpdateTaskType): Promise<Todo[]> => {
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
    return [];
  }
};
