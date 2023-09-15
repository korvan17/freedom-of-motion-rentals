import styled from 'styled-components';

export const MenuStyled = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  gap: 8px;
  overflow: hidden;
  overflow-y: scroll;
  color: rgba(18, 20, 23, 0.2);
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }
  > li {
    cursor: pointer;
    > button {
      border: none;
      all: inherit;
    }
  }
`;
