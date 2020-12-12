import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/Header";

import SideMenu from "./SideMenu";
import OverviewPage from "./OverviewPage";
import HotelPage from "./HotelPage";
import ActivitiesPage from "./ActivitiesPage";

import { userContext } from "../../contexts/UserContext";

export default function ResumePage() {
  const { user } = useContext(userContext);
  const [userInfo, setUserInfo] = useState(false);
  const [changeType, setChangeType] = useState(false);
  const [changePersonal, setChangePersonal] = useState(false);
  const [ticketType, setTicketType] = useState(user.ticket);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [page, setPage] = useState("1");
  

  const CPF = user.cpf;    

  const fetchFullReg = () => {
    axios.get(
        `${process.env.REACT_APP_BACKURL}/api/users/${user.id}/complete-reg`,
        { headers: { "x-access-token": user.token } }
      ).then(({data}) => {
        setUserInfo(data);
        setPhone(data.phone);
        setAddress(data.address);
        console.log("COMPLETE REG", data); 
      })
      .catch((err) => console.log(err))        
  }; 

  useEffect(() => fetchFullReg(),[]);

  return (
    <>
      <Header />
      <Title>
        <span>Área do Participante</span>
      </Title>
      <InfoContainer>
        <InfoWindow>          
          <SideMenu value={{ setPage }}/>
          <Info>
            { userInfo && page === "1" ? (

              <OverviewPage value={
                {
                  user,
                  userInfo,
                  changePersonal, setChangePersonal,
                  address, setAddress,
                  phone, setPhone,
                  CPF,
                  ticketType, setTicketType,
                  changeType, setChangeType                
                }}/>

            ) : userInfo && page === "2" ? (

              <HotelPage value={{user}}/>

            ) : userInfo ? (

              <ActivitiesPage />

            ) : ("")}
          </Info>
        </InfoWindow>
      </ InfoContainer>
    </>
  );
}

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 5rem;

  span {
    width: 100%;
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 800px){
    padding-top: 2rem;

    span{
      font-size: 2rem;
    }
  }
`;

const Info = styled.div`
  width:100%;
  height: 100%;

  .change-ticket{
    margin-bottom:3rem;
  }

  .change-personal{
    height:2rem;
    width:10rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  
  h2{
    width:100%;
    padding-left:4rem;
    padding-top:2rem;
    font-size:2rem;
    color:white;
  }

  span{
    font-size:1.5rem;
    color:white;
  }

  div{    
    display: flex;
    flex-direction:column;
    padding-left:4rem;
  }

  .infoDiv{
    margin-top:2rem;
    span{
      margin-bottom:0.4rem;
    }

    input{
      width:15rem;
    }
  }

  select{
    margin-left:1rem;
    margin-top:0;
    font-size:1rem;
    width: 10rem;
  }

  button{
    margin-top:1rem;
    width:15rem;
  }
  
`;

const InfoContainer = styled.div`
  display: flex;
  width:100%;  
  justify-content:center;
  align-items:center;
  margin-top: 3rem;
`;

const InfoWindow = styled.div`
  width:65vw;
  min-height:65vh;
  background: rgba(255, 255, 255, 0.24);
  display: flex;
  color: #9A9999;
  border-radius: 25px;  

  h3{
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: white;

  }

  #side-menu{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    padding: 1rem 2rem;    
    border-right: 1px solid #9A9999;

    > div{
      display:flex;
      width:100%;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }

    input[type=radio]{
      display:none;
    }

    input[type=radio] + label{
      cursor:pointer;
    }

    input[type=radio]:checked + label{
      p,svg{
        color:lightgreen;
      }
    }
  }
`;
