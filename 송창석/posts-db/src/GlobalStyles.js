import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:boerder-box;
  }
  body{
    font-size: 14px;
  }
  .btn {
    font-weight: bold;
    background-color: #fff;
    text-transform: none;
    & + .btn {
      margin-left: 10px;
    }
    &.btn_add,
    &.btn_update {
      background-color: #222;
      color: #fff;
    }
    &.btn_back {
      background-color: #1D4CD8;
      color: #fff;
    }
    &.btn_del {
      background-color: #eee;
      color: #222;
    }
  }
`;

export default GlobalStyles;