import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Form from "../utils/Form";
import Button from "../utils/Button";
import Header from "../components/Header";
import { validateSignin } from "../utils/validationFuncs";
import Spinner from "../components/Spinner";
import { userContext } from "../contexts/UserContext";
import { isEmpty } from "../utils/helperFunctions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(userContext);
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      validateSignin(email, password);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKURL}/api/users/sign-in`,
        {
          email,
          password,
        }
      );
      setUser({
        id: data.id,
        cpf: data.cpf,
        token: data.token,
        email: data.email,
        ticket: data.ticket,
      });
      setIsLoading(false);
      const res = await axios.get(
        `${process.env.REACT_APP_BACKURL}/api/users/${data.id}/complete-reg`,
        { headers: { "x-access-token": data.token } }
      );
      if (!isEmpty(res.data)) return history.push("/resume");
      history.push("/registration");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <CustomForm onSubmit={login}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h3>Área do Participante</h3>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <CustomButton disabled={isLoading} type="submit">
              Entrar
            </CustomButton>
          </>
        )}
      </CustomForm>
    </>
  );
}

const CustomForm = styled(Form)`
  width: 30%;
  margin: auto;
  margin-top: 10%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 30px;
  input {
    width: 80%;
  }
  h3 {
    margin: 1rem 0 2rem 0;
  }

  @media (max-width: 800px) {
    width: 90vw;

    input {
      width: 95%;
    }
  }
`;

const CustomButton = styled(Button)`
  width: 30%;
  margin: 35px 0;
`;
