import styled from 'styled-components';
import { Btn } from '../Main/Main.style';

export const InputContainer = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const AddTaskInput = styled.input`
  min-width: 200px;
  width: 100%;
  margin-right: 6px;
  padding-left: 20px;
  border: 1px solid var(--main-color);
  border-radius: 7px;

  &::placeholder {
    color: #f48225;
  }
`;

export const AddTaskBtn = styled.button`
  min-width: 60px;
  height: 36px;
  padding: 4px;
  border: 1px solid var(--main-color);
  border-radius: 7px;
  box-shadow: var(--box-shadow);

  &:hover {
    color: #fff;
    background-color: var(--main-color);
  }
  &:active {
    transform: scale(0.95);
  }
`;
