import React from "react";
import planet from "../../assets/mundo.png";
import logo from "../../assets/logo.png"
import styled from "styled-components";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";


export default function CountdownPage() {  

  //Mudar o event para ser pego via server-side
  //Usar useEffect para rodar uma request á API
  const event = new Date('December 11, 2020 18:00:00');  

  return (
    <Container>
      <Planet src={planet} alt="camps party planet" />
      <div>
        <Logo src={logo} alt="campus party logo" />
        <div>
          <StyledCountdown date={Date.now() + 5000} daysInHours={true}>
            <Link to="/pre-registration">           
              <GoToPage>              
                  <span>A ESPERA ACABOU! <br/> </span>
                  <span>FAÇA JÁ SUA PRÉ INSCRIÇÃO!</span>              
              </GoToPage>
            </Link>
          </StyledCountdown>
        </div>
      </div>
    </Container>
  );
}

const Planet = styled.img`
  margin-top: 5rem;
`;

const Logo = styled.img`
  width:auto;
  height:14rem;
  margin-bottom:3rem;
`;

const StyledCountdown = styled(Countdown)`
  font-size:8rem;
`;

const Container = styled.div`
  display: flex;
  width:100%;

  & > div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;

    > div{
      display: flex;
      justify-content:center;
      align-items:center;
      width:42rem;
      padding:2rem;
      border-radius:2rem;
      background-color:rgb(255,255,255,0.24);
    }
  }
`;

const GoToPage = styled.button`
  z-index:9999;
  background-color: rgb(16,37,66,0.14);  
  width:30rem;
  height:100%;
  border-radius:2rem;
  padding:1.5rem; 
  outline:none;
  text-align:center;
  color:white;
  transition: 0.1s all ease-in;

  &:hover{
    background-color: rgb(16,37,66,0.45);
  }

  & > span{
    width:100%;
    text-align:center;
    font-size:1.5rem;
  }
`;