import React, { useEffect } from "react";
import styled from "styled-components";


export default function PreRegistration() {
    
  return (
    <Header>
      <span>PRÉ-INSCRIÇÃO</span>
      <span>CAMPS PARTY</span>
    </Header>
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
