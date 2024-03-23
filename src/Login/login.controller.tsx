import React, { useCallback, useEffect, useState } from 'react';
import LoginView from './login.view';
import ILogin from './login.props';
import * as singleSpa from 'single-spa';

const Login: React.FC<ILogin> = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberedName = localStorage.getItem('rememberedName');
    const rememberedNameCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('rememberedName='))
      ?.split('=')[1];

    if (rememberedName || rememberedNameCookie) {
      singleSpa.navigateToUrl(`/home`);
    }
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const login = useCallback(() => {
    if (rememberMe) {
      document.cookie = `rememberedName=${name}; expires=${new Date(Date.now() + 86400e3).toUTCString()}; path=/`;
    } else {
      localStorage.setItem('rememberedName', name);
    }
  }, [name, password, rememberMe]);

  return <LoginView login={login} onChangeName={handleNameChange} onChangePassword={handlePasswordChange} onChangeRememberMe={handleRememberMeChange} />;
};

export default Login;
