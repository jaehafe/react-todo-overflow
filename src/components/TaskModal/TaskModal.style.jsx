import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;
  width: 60%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--main-color);
  border-radius: 6px;
  background-color: #fff;
  opacity: ${(props) => (props.$openModal ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;

// export const ModalContainer = styled.div.attrs(({ openModal }) => ({
//   style: {
//     opacity: openModal ? '1' : '0',
//   },
// }))`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1;
//   position: fixed;
//   width: 60%;
//   height: 30%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border: 1px solid var(--main-color);
//   border-radius: 6px;
//   background-color: #fff;
//   transition: opacity 0.3s ease-in-out;
// `;
export const ModalContent = styled.div``;
export const ModalTitle = styled.div``;
export const ModalDescription = styled.div``;
