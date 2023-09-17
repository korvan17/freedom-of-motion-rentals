import styled from 'styled-components';

export const LayoutStyle = styled.div`
  position: relative;
  padding: 150px 0 0;
  background-color: white;
  width: 100%;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 300px);
    max-width: 1440px;
    margin: 0 auto;
  }
`;
