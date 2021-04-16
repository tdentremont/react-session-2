import styled from 'styled-components';

const ThemePickerHolder = styled.div`
  display: inline-block;
  color: white;
  button {
    cursor: pointer;
  }
  ul {
    position: absolute;
    width: 100px;
    background-color: white;
    right: -30px;
    min-height: 50px;
    list-style-type: none;
    text-align: center;
    li {
      color: black;
      cursor: pointer;
    }
  }
`;

export default ThemePickerHolder;