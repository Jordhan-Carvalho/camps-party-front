import React, { useState } from "react";
import styled from "styled-components";


import Header from '../../components/Header';
import PersonalData from "./PersonalData";
import TicketData from "./TicketData"

export default function Registration() {
  
  const [personalData, serPersonalData] = useState(null);
  const [page, setPage] = useState(1);
  console.log(personalData);
  return(
    <>
      <Header />
      <RegContainer>
        {page === 1 ?
          <PersonalData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} /> :
          <TicketData personalData={personalData} setPersonalData = {serPersonalData} page={page} setPage={setPage} />
        }
      </RegContainer>
    </>
  )
}


const RegContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-size: 40px;
    margin: 30px 0;
  }
`;

