import styled, { css } from "styled-components";

const LoginWrapper = styled.div`
  ${() => css`
    &.login-component {
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      form {
        padding: 10px 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        div {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }

        button {
          width: 100%;
          padding: 12px 14px;
          margin-top: 10px;
          background-color: green;
          color: #fff;
          outline: none;
          border: none;
        }
      }
    }
  `}
`;

export default LoginWrapper;
