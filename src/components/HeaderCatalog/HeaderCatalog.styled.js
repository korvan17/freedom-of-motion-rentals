import styled from 'styled-components';

export const HeaderCatalogStyle = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 18px;
  width: 859px;
  height: 124px;
  align-items: flex-start;
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
  }
  .make {
    width: 224px;
  }
  .price {
    width: 125px;
  }
  .menuBlock {
    height: 272px;
    position: absolute;
    top: 75px;
    padding: 14px 8px 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background-color: #fff;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    width: 100%;
    transform-origin: top;
    transition: transform 0.3s;
    z-index: 1;
  }
  .title {
    color: #8a8a89;
    /* font-family: Manrope; */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
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
  margin-top: 8px;
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
