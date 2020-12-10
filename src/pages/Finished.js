import React from "react";
import styled from 'styled-components';

import logo from '../assets/logo.png';
import mundoCortado from '../assets/mundoCortado.png';




export default function Finished() {


  return (
    <>
      <ContainerBox> 
        
        <h1>Parabéns!<br /> Seu cadastro foi finalizado com sucesso!</h1>
        <div className="images">
          <><img src={logo} /> </>
          <><img src={mundoCortado} /> </>
        </div>
        
      </ContainerBox>
    </>
    )
}

const ContainerBox = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;


  h1 {
    font-size: 3rem;
    text-align: center;
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
`;