import styled from 'styled-components';

export const HeaderStyled = styled.nav`
  height: 150px;
  left: 50%;
  width: 1440px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
  .notLink {
    color: grey;
    cursor: pointer;
  }
`;
