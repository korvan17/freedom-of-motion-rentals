import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(18, 20, 23, 0.5);
  z-index: 3;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const ModalWindow = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background-color: white;
`;
