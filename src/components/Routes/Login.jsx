import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getContext } from '../../hooks/UserContext';
import persistUser from '../../utils/persistUser';
import Input from '../Layouts/Input';
import RetangularButton from '../Layouts/RetangularButton';

export default function Login() {

  const [loginData, setLoginData] = useState({ email: "", name: "" });
  const { setUser, url} = getContext();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    navigate("/main-screen");
    /* const promise = axios.post(`${url}/users`, loginData);

    promise.then((res) => {
      storeLogin(res.data);
      navigate("/main-screen");
    });
    promise.catch((error) => {
      console.log(error.response);
    }); */
  }

  function storeLogin(res) {
    const { name, email} = res;
    const userInfo = {
      name,
      email
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(persistUser);
  }


  return(
    <ContainerLogin>
      <Form onSubmit={handleLogin}>
        <h1>Smart SnowBall</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={loginData.name}
          onChange={(e) => {
            setLoginData({
              ...loginData,
              name: e.target.value,
            });
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => {
            setLoginData({
              ...loginData,
              email: e.target.value,
            });
          }}
        />
        <RetangularButton type="submit" title={"Entrar"} />
      </Form>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: var(--padding-login);

  &>form h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 4.5rem;
  }
`

const Form = styled.form`
  max-width: 25rem;
`