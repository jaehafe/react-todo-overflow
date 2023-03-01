import styled from 'styled-components';

export const TaskListContainer = styled.ul``;

export const TaskContainer = styled.li`
  margin-top: 16px;
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-shadow: var(--box-shadow);
  border-radius: 7px;

  background-color: ${(props) =>
    props.done === true ? ' rgb(201, 240, 240)' : undefined};

  text-decoration: ${(props) =>
    props.done === true ? 'line-through' : undefined};

  color: ${(props) =>
    props.done === true ? 'rgba(142, 134, 134, 0.407)' : undefined};
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const TaskDateWrapper = styled.div``;

export const TaskDate = styled.span`
  min-width: 20px;
`;

export const TaskTitle = styled.span`
  display: block;
  // overflow: scroll;
  padding: 6px;
  border-radius: 7px;

  &:active,
  &:focus {
    outline: none;
    background-color: rgb(165, 234, 234);
  }
`;

export const TaskBtnWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const TaskBtn = styled.button`
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
