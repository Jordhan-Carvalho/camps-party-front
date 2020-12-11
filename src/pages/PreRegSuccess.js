import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import TrimmedImage from "../assets/mundoCortado.png"

export default function PreRegSuccess() {
  return (
    <>
      <Header>
        <span>PARABÉNS!</span>
        <span>SUA INSCRIÇÃO FOI REALIZADA COM SUCESSO!</span>
      </Header>
      <Subheader>
        <span>Você deseja completar o cadastro agora?</span>
      </Subheader>
      <BtnContainer>
        <Link to="/login">
          <Button>Sim, eu quero!</Button>
        </Link>              
      </BtnContainer>
      <TrimmedPlanet src={TrimmedImage}/>
    </>
  );
}

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 5rem;

  span {
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    margin:0.5rem;
  }

  @media (max-width: 800px){
    padding-top: 3rem;

    span{
      font-size: 1.2rem;
      padding: 0.5rem;
      margin: 0;
    }
  }
`;

const Subheader = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  margin-top:5.5rem;

  @media (max-width: 800px){
    font-size: 1rem;
    margin-top: 4rem;
    span{
      padding: 0.5rem;
    }
  }
`;

const BtnContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding-top:3rem;

  & button:first-child{
    font-size:2rem;
    margin-bottom:2rem;
  }

  @media (max-width: 800px){
    & button:first-child{
      font-size: 1rem;
    }
  }
`;

const TrimmedPlanet = styled.img`
  position:fixed;
  bottom:0;
  right:0;

  @media (max-width: 800px){
    width: 90vw;
  }
`;