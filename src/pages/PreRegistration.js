import React, { useState } from "react";
import Form from "../utils/Form";
import Button from "../utils/Button";
import styled from "styled-components";


export default function PreRegistration() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState(null);
  const [pwd, setPwd] = useState(""); 
  const [pwdConfirm, setPwdConfirm] = useState(""); 
  const [invalid, setInvalid] = useState(false)
    
  const limitMaxLength = (element) => {
    if(element.target.value.length > 11) return;
    setCpf(element.target.value)
  };

  const sendForm = (e) => {
    e.preventDefault();
    if(cpf.length < 11) return setInvalid("CPF inválido!");
    if(pwd !== pwdConfirm) return setInvalid("As senhas não são idênticas!")
    setInvalid(false);
  }

  return (
    <>
      <Header>
        <span>PRÉ-INSCRIÇÃO</span>
        <span>CAMPS PARTY</span>      
      </Header>
      <Container>
        <Form value="center" onSubmit={sendForm}>
          <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          />
          <input 
          type="number" 
          placeholder="CPF" 
          value={cpf} 
          onChange={limitMaxLength} 
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
            <Button type="submit">CONFIRMAR</Button>            
          </div>
          {invalid ? <span className="invalid">{invalid}</span> : ""}
        </Form>
      </Container>
    </>
  );
}

const Header = styled.h1`
  display: flex;
  flex-direction:column;
  text-align: center;
  width:100%;
  padding-top:5rem;

  span{
    width:100%;
    text-align:center;
    font-size:5rem;
  }
`;

const Container = styled.div`
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  padding-top:5rem;

  button{
    margin: 2rem 0;
    width:50%;
    box-shadow: 3px 5px 10px 0px rgba(0,0,0,0.45);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .invalid{
    width:100%;
    text-align:center;
  }
`;

