import styled from 'styled-components';

export const ButtonMenu = styled.button`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  padding: 14px 18px;
  align-items: flex-start;
  width: 100%;
  height: 48px;
  border-radius: 14px;
  border: none;
  background-color: #f7f7fb;
  margin-top: 8px;
  z-index: 1;
  > svg {
    width: 20px;
    height: 20px;
    margin-left: auto;
    transition: transform 0.3s ease;
  }
  .svgRotate {
    transform: rotate(-180deg);
  }
`;
