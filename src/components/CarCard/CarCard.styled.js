import styled from 'styled-components';

export const Card = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const BlockImg = styled.div`
  position: relative;
  height: 268px;
  overflow: hidden;
  border-radius: 12px;
  > button {
    position: absolute;
    top: 14px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: none;
    > svg {
      height: 20px;
      width: 20px;
      z-index: 3;
    }
  }
`;

export const CarImg = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  padding: 0;
`;

export const MakeModel = styled.ul`
  display: flex;
  margin-top: 14px;
  color: #121417;
  gap: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  > li:nth-child(2) {
    color: #3470ff;
  }
`;

export const EndItem = styled.li`
  margin-left: auto;
`;

export const ListOfDetail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 10px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  > li {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      width: 1px;
      height: 16px;
      position: absolute;
      top: 50%;
      right: -4px;
      transform: translateY(-50%);
      background-color: rgba(18, 20, 23, 0.1);
    }

    @media (max-width: 500px) {
      width: 50%;
    }
  }
`;

export const LearnMoreButton = styled.button`
  font-family: Manrope;
  font-size: 14px;
  display: flex;
  margin-top: auto;
  width: 274px;
  height: 44px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
`;
