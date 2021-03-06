import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TicketSelection from "./TicketSelection";
import Form from "../../utils/Form";
import Button from "../../utils/Button";
import { cpfMask } from "../../utils/masks";

export default function PreRegistration() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [ticket, setTicket] = useState(null);
  const [invalid1, setInvalid1] = useState(false);
  const [invalid2, setInvalid2] = useState(false);
  const [chooseTicket, setChooseTicket] = useState(false);
  const [persistTicketForm, setPersistTicketForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const preRegInfo = {
    email,
    cpf,
    password: pwd,
    confirmPassword: pwdConfirm,
    ticket,
  };

  const next = () => {
    if (pwd !== pwdConfirm) return setInvalid1("As senhas não são idênticas!");
    setInvalid1(false);
    setChooseTicket(true);
  };  

  const sendForm = (e) => {
    e.preventDefault();
    setPersistTicketForm(true);     
    if (!ticket) return setInvalid2("Nenhum ingresso selecionado!");
    setInvalid2(false);
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BACKURL}/api/users/sign-up`, preRegInfo)
      .then(() => history.push("/pre-registration/success"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Header>
        <span>PRÉ-INSCRIÇÃO</span>
        <span>CAMPS PARTY</span>
      </Header>
      <Container>
        <Form value="center" id="form1" onSubmit={sendForm}>
          {!chooseTicket || !persistTicketForm ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="CPF"
                value={cpfMask(cpf)}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <input
                type="password"
                minLength="6"
                placeholder="Senha"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
              <input
                type="password"
                minLength="6"
                placeholder="Confirmação de Senha"
                value={pwdConfirm}
                onChange={(e) => setPwdConfirm(e.target.value)}
                required
              />
              <div className="btn-container">
                <Button onClick={next}>PROSSEGUIR</Button>
              </div>
              {invalid1 ? <span className="invalid">{invalid1}</span> : ""}
            </>
          ) : (
            <>
              <h3>Escolha seu ingresso</h3>
              <TicketSelection setTicket={setTicket} />
              <div className="btn-container">
                {!loading ? (
                  <Button type="submit">Finalizar</Button>
                ) : (
                  <Button disabled={true} type="submit">
                    Enviando...
                  </Button>
                )}
              </div>
              {!ticket ? <span className="invalid">{invalid2}</span> : ""}
            </>
          )}
        </Form>
      </Container>
    </>
  );
}

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 4rem;

  span {
    width: 100%;
    text-align: center;
    font-size: 5rem;
  }

  @media (max-width: 800px) {
    padding-top: 2rem;

    span {
      font-size: 2rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  button {
    margin: 1rem 0;
    width: 50%;
    box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.45);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .invalid {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 800px) {
    padding-top: 2rem;
  }
`;
