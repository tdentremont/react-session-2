import styled from 'styled-components';

const HeaderHolder = styled.div`
  position: relative;
  background-color: black;
  min-height: 50px;
  max-width: 90%;
  margin: 0 auto;
  .logo {
    position: absolute;
    left: 5%;
    margin-top: 10px;
    max-width: 50px;
  }
  &.blue {
    background-color: rgb(38, 38, 160) !important;
  }
  &.red {
    background-color: rgb(143, 46, 46) !important;
  }
  &.orange {
    background-color: rgb(202, 148, 48) !important;
  }
  &.black {
    background-color: black !important;
  }
  &.gray {
    background-color: gray !important;
  }
`;

export default HeaderHolder;