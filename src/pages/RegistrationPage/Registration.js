import React, { useEffect, useState } from "react";
import styled from "styled-components";


import Header from '../../components/Header';
import PersonalData from "./PersonalData";
import TicketData from "./TicketData";
import HotelData from './HotelData'

export default function Registration() {
  const [personalData, serPersonalData] = useState(null);
  const [page, setPage] = useState(1);
  const [isHotel, setIsHotel] = useState(false)
  console.log(personalData);
  useEffect(() => {
    if(page === 3){
      if(personalData.type === 'hotel'){
        setIsHotel(true);
      }
    }
  }, [page, personalData])
  
  return(
    <>
      <Header />
      <RegContainer>
        {page === 1 ?
          <PersonalData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} /> :
          page === 2 ?
          <TicketData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} />:
          null
        }
        {
          isHotel ?
          <HotelData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} setIsHotel={setIsHotel} />:
          null
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

