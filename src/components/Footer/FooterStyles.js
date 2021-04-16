import styled from "styled-components";

const FooterHolder = styled.div`
  position: absolute;
  bottom: 0;
  background-color: black;
  min-height: 300px;
  width: 100%;
  margin: 0 auto;
  .footer-nav {
    position: absolute;
    left: 5%;
    a {
      display: block;
      color: white;
      padding: 20px 20px 0 0;
      text-decoration: none;
    }
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

export default FooterHolder;
