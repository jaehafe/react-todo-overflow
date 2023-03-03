import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { StyledComponentProps } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const Main = styled.main`
  padding: 36px;
  width: 80%;
  margin: 30px auto;
  border: 1px solid var(--main-color);
  border-radius: 7px;
  box-shadow: var(--box-shadow);
`;

export const MainPadding = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainHeaderTitle = styled.h2`
  font-size: 20px;
`;

export const Select = styled.select`
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

export const Btn = styled.button`
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

export const SelectContainer = styled.select<
  React.HTMLProps<HTMLSelectElement> & { theme: DefaultTheme }
>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Option = styled.option``;

export const DeleteBtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const DeleteCompletedTaskBtn = styled(Btn)<
  StyledComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, any, {}, never>
>``;

export const DeleteAllTaskBtn = styled(Btn)<
  StyledComponentProps<ButtonHTMLAttributes<HTMLButtonElement>, any, {}, never>
>``;
