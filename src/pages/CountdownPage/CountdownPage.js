import React, { useEffect, useState } from "react";
import axios from "axios";
import planet from "../../assets/mundo.png";
import logo from "../../assets/logo.png"
import styled from "styled-components";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";


export default function CountdownPage() {

  //Initializing valid timer
  const event = Date.now() + 5000; 
  const [date,setDate] = useState(event)

  useEffect(()=>{
    axios.get("http://localhost:3000/api/users/countdown")
    .then(({ data }) => setDate(data.event))
  },[]);   

  return (
    <Container>
      <Planet src={planet} alt="camps party planet" />
      <div>
        <Logo src={logo} alt="campus party logo" />
        <div>
          <StyledCountdown date={Date.now() + 3000} daysInHours={true}>
            <div className="link-container">
              <Link to="/pre-registration">           
                <GoToPage>              
                    <span>A ESPERA ACABOU! <br/> </span>
                    <span>FAÇA JÁ SUA PRÉ INSCRIÇÃO!</span>              
                </GoToPage>
              </Link>
              <Link to="/login">           
                <GoToPage>              
                    <span className="to-login">JÁ FIZ MINHA INSCRIÇÃO! <br/> </span>                                 
                </GoToPage>
              </Link>
            </div>
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

  .link-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    button{
      margin:1rem;
    }
    .to-login{
      font-size: 1rem;      
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
  border:none;
  text-align:center;
  color:white;
  transition: 0.1s all ease-in;
  box-shadow: 3px 5px 10px 0px rgba(0,0,0,0.45);

  &:hover{
    background-color: rgb(16,37,66,0.45);
  }

  & > span{
    width:100%;
    text-align:center;
    font-size:1.5rem;
  }
`;