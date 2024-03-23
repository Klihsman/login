import React from 'react';
import LoginWrapper from './login.style';

interface IProps {
  login: () => void;
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRememberMe: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginViewNoMemo: React.FC<IProps> = (props) => (
  <LoginWrapper className='login-component'>
    <h1>Login</h1>

    <form onSubmit={props.login}>
      <div>
        <label htmlFor="">Nome</label>
        <input onChange={props.onChangeName}></input>
      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input onChange={props.onChangePassword} type='password'></input>
      </div>
      <div>
        <label>
          <input type="checkbox" onChange={props.onChangeRememberMe} />
          Lembrar-me
        </label>
      </div>
      <button type='submit'>Entrar</button>
    </form>
  </LoginWrapper>
);

const LoginView = React.memo(LoginViewNoMemo);
export default LoginView;
