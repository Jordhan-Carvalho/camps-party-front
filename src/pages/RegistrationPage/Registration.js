import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import Header from '../../components/Header';
import PersonalData from "./PersonalData";
import TicketData from "./TicketData";
import HotelData from './HotelData'
import { userContext } from "../../contexts/UserContext";

export default function Registration() {
  const [personalData, serPersonalData] = useState(null);
  const [isHotel, setIsHotel] = useState(false);
  const [page, setPage] = useState(1);
  const { user } = useContext(userContext);
  console.log(personalData);

  useEffect(() => {
    const request = axios.get('http://localhost:3000/api/registration/ticket', {headers: {"x-access-token": user.token}});
    request.then(response =>{
      if(response.data === 'hotel') setIsHotel(true);
      else setIsHotel(false);
    }).catch(err => {
      console.log(err.response);
    })
  })

  
  return(
    <>
      <Header />
      <RegContainer>
          {
            page === 1 ?
            <PersonalData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} setIsHotel={setIsHotel} isHotel = {isHotel} /> :
            null
          }
          {
            isHotel && page === 2 ?
            <HotelData personalData={personalData} setPersonalData = {serPersonalData} setPage={setPage} setIsHotel={setIsHotel} isHotel = {isHotel} />:
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

