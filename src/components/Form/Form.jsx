import React from 'react';
import * as S from './Form.style';

function Form({ handleTaskSubmit, taskInputValue, setTaskInputValue }) {
  const handleTaskInputChange = (e) => {
    setTaskInputValue(e.target.value);
  };

  return (
    <S.InputContainer onSubmit={handleTaskSubmit}>
      <S.AddTaskInput
        value={taskInputValue}
        onChange={handleTaskInputChange}
        placeholder="해야 할 일을 입력하세요."
      />
      <S.AddTaskBtn type="submit">추가</S.AddTaskBtn>
    </S.InputContainer>
  );
}

export default Form;
