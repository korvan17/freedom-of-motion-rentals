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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: white;

  > img {
    border-radius: 14px;
    background: #f3f3f2;
    width: 461px;
    height: 248px;
  }
  > ul {
    color: #121417;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > li:nth-child(3) {
      margin-top: 14px;
    }
    > li:nth-child(4),
    > li:nth-child(5) {
      margin-top: 24px;
    }
  }
  .rentalConditionals {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .fontMontserrat {
      font-family: Montserrat;
    }
    > li {
      border-radius: 35px;
      background: #f9f9f9;
      padding: 7px 14px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      .number {
        color: #3470ff;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: -0.24px;
      }
    }
  }
  .button {
    font-family: Manrope;
    font-size: 14px;
    display: flex;
    margin-top: auto;
    height: 44px;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 12px;
    border: none;
    background-color: #3470ff;
    width: 168px;
    margin-right: auto;
    margin-top: auto;
  }
`;
