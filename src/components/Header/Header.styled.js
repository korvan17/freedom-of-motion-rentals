import styled from 'styled-components';

export const HeaderStyle = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 18px;
  width: 859px;
  height: 74px;
  .menuMake {
    position: relative;
    width: 224px;
  }
  .menuBlock {
    height: 272px;
    position: absolute;
    top: 50px;
    padding: 14px 8px 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background-color: #fff;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    width: 100%;
    transform-origin: top;
    transition: transform 0.3s;
  }
  .menuPrice {
    position: relative;
    width: 125px;
  }
  .entring,
  .entered {
    transform: scaleY(100%);
  }
  .exiting,
  .exited {
    transform: scaleY(0);
  }
`;

export const InputStyled = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: none;
  &.right {
    border-radius: 0px 14px 14px 0px;
    background: #f7f7fb;
    margin-left: -18px;
  }
  &:focus {
    outline: none;
    border-color: transparent;
  }
`;
