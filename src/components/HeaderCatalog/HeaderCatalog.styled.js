import styled from 'styled-components';

export const HeaderCatalogStyle = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 18px;
  width: 859px;
  height: 124px;
  align-items: flex-start;
`;

export const MenuBlock = styled.div`
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
  &.entring,
  &.entered {
    transform: scaleY(100%);
  }
  &.exiting,
  &.exited {
    transform: scaleY(0);
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

export const MenuMake = styled(Menu)`
  width: 224px;
`;

export const MenuPrice = styled(Menu)`
  width: 125px;
`;

export const TitleMenu = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const FormMileage = styled.form`
  position: relative;
  width: auto;
  display: flex;
  align-items: baseline;
`;

export const InputStyled = styled.input`
  font-family: inherit;
  font-size: inherit;
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
  padding-left: 60px;
  padding-right: 10px;
  &:focus {
    outline: none;
    border-color: transparent;
  }
`;

export const InputStyledRight = styled(InputStyled)`
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  margin-left: -18px;
  padding-left: 30px;
`;

export const Label = styled.span`
  position: absolute;
  top: 20px;
  left: 15px;
`;

export const RightLabel = styled(Label)`
  left: 150px;
`;

export const Search = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  color: white;
  margin-left: 18px;
`;
