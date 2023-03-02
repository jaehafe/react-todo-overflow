import React, { useEffect, useRef, useState } from 'react';
import * as S from './TaskList.style';
import { formattedDate } from '../../constants/utils.js';
import { requestUpdateTask } from '../../constants/request';

function TaskList({
  id,
  order,
  title,
  done,
  createdAt,
  updatedAt,
  handleDeleteTask,
  handleCompleteTask,
  taskData,
  setTaskData,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const editTitleRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editTitleRef.current.focus();
    }
  }, [isEditing]);

  /** task 수정 버튼 클릭 시 작동 */
  const handleEditTitle = () => {
    setIsEditing(true);
    setEditedTitle(editedTitle);
  };

  /** task 저장 버튼 클릭 시 작동 */
  const handleSaveTitle = async (id) => {
    setIsEditing(false);
    let specificTask = taskData.find((task) => task.id === id);
    const { done, order } = specificTask;
    const updatedTask = await requestUpdateTask({
      id,
      title: editedTitle,
      done,
      order,
    });
    setTaskData(
      taskData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: updatedTask.title,
            updatedAt: updatedTask.updatedAt,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <S.TaskContainer
      key={id}
      id={id}
      done={done ? 'true' : 'false'}
      order={order}
    >
      <S.TaskWrapper>
        <S.TaskDateWrapper>
          <S.TaskDate>생성: {formattedDate(createdAt)}</S.TaskDate>
          <S.TaskDate>수정: {formattedDate(updatedAt)}</S.TaskDate>
        </S.TaskDateWrapper>
        {isEditing ? (
          <S.TaskTitleInput
            ref={editTitleRef}
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <S.TaskTitle>{title}</S.TaskTitle>
        )}
      </S.TaskWrapper>
      <S.TaskBtnWrapper>
        <S.TaskBtn onClick={() => handleCompleteTask(id)}>
          {done ? '완료' : '하는 중'}
        </S.TaskBtn>
        {isEditing ? (
          <S.TaskBtn onClick={() => handleSaveTitle(id)}>저장</S.TaskBtn>
        ) : (
          <S.TaskBtn onClick={handleEditTitle}>수정</S.TaskBtn>
        )}
        <S.TaskBtn onClick={() => handleDeleteTask(id)}>삭제</S.TaskBtn>
      </S.TaskBtnWrapper>
    </S.TaskContainer>
  );
}

export default TaskList;
