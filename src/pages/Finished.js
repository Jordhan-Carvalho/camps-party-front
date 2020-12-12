import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import mundoCortado from '../assets/mundoCortado.png';
import mundo from '../assets/mundo.png';
import Button from '../utils/Button';



export default function Finished() {


  return (
    <>
      <ContainerBox> 
        
        <h1>Parabéns!<br /> Seu cadastro foi finalizado com sucesso!</h1>

        <Link to="/login">
          <Button>
            Fazer Login
          </Button>
        </Link>

        <><img className="mundao" src={mundo} alt="camps party planet"/></>

        <div className="images">
          <><img src={logo} alt="camps party"/> </>
          <><img src={mundoCortado} alt="camps party planet"/> </>
        </div>
        
      </ContainerBox>
    </>
    )
}

const ContainerBox = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .mundao {
    display: none;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 6rem;
  }

  .images{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .images img:nth-child(1){
    margin: 1rem;
    width: 7%;
  }

  .images img:nth-child(2){
    width: 30%;
  }
  .images img:nth-child(3){
    display: none;
  }




  @media(max-width: 800px) {
    justify-content: center;


    h1 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    padding: 1rem;
    }

    .mundao {
    display: flex;
    width: 50%;
    }


    .images{
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .images img:nth-child(2){
      display: none;
    }

    .images img:nth-child(1){
      width: 13%;
      display: flex;
      justify-content: flex-start;
    }
  }
`;