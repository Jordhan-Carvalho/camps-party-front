import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { VscBook } from "react-icons/vsc";
import { FaHotel } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import Header from "../components/Header";
import Label from "../utils/Label";
import Button from "../utils/Button";

import { userContext } from "../contexts/UserContext";

export default function ResumePage() {
  const { user } = useContext(userContext);
  const [changeType, setChangeType] = useState(false);
  const [page, setPage] = useState("1");
  const [userInfo, setUserInfo] = useState("");

  const CPF = user.cpf;
  const cpfMasked =
    CPF.slice(0,3) + "."
    + CPF.slice(3,6) + "."
    + CPF.slice(6,9) + "-"
    + CPF.slice(9,11)

  useEffect(() => {
    fetchFullReg();
  }, []);

  const fetchFullReg = async () => {
    try {
      const {
        data,
      } = await axios.get(
        `${process.env.REACT_APP_BACKURL}/api/users/${user.id}/complete-reg`,
        { headers: { "x-access-token": user.token } }
      );
      setUserInfo(data)
      console.log("COMPLETE REG", data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <Title>
        <span>Área do Participante</span>
      </Title>
      <InfoContainer>
        <InfoWindow>
          <form>
            <div>              
              <input type='radio' id='resumo' name="option" value='Resumo' defaultChecked/>                        
              <CustomLabel htmlFor='resumo' onClick={() => setPage("1")} >
                <VscBook size={40}/>               
                <p>Resumo</p>
              </CustomLabel>              
            </div>

              <div>
                <input type='radio' id='hotel' name="option" value='Hotel'/>
                <CustomLabel htmlFor='hotel' onClick={() => setPage("2")} >
                  <FaHotel size={40}/>               
                  <p>Hotel</p>
                </CustomLabel>
              </div>

              <div>
                <input type='radio' id='activities' name="option" value='Activities'/>
                <CustomLabel htmlFor='activities' onClick={() => setPage("3")} >
                  <AiOutlineSchedule size={40}/>                          
                  <p>Atividades</p>
                </CustomLabel>
              </div>
          </form>
          <Info>
            { page === "1" ? (
              <>
                <h2>
                  Seu Resumo
                </h2>
                <div>
                  <span>Data: 21, 22, 23 de Janeiro</span>
                  <span>Camps do Jordão</span>
                </div>
                <div>
                  <span>{userInfo.name}</span>
                  <span>{user.email}</span>
                  <span>{userInfo.phone}</span>
                  <span>{cpfMasked}</span>
                </div>
                <div>
                  <span>Tipo de ingresso: {
                    !changeType ? user.ticket : (
                      <select required>
                        <option value="" disabled hidden>Selecione seu ingresso</option>
                        <option value="noAcommodation">Sem alojamento</option>
                        <option value="camping">Camping</option>
                        <option value="hotel">Hotel</option>
                      </select>
                    )
                  }</span>
                  {!changeType ? (
                    <Button onClick={() => setChangeType(true)}>Mudar tipo de ingresso</Button>
                  ) : (
                    <Button onClick={() => setChangeType(false)}>Salvar ingresso</Button>
                  )
                  }
                  
                </div>
              </>
            ) : page === "2" ? (
              <>
                <h2>
                  Escolha Seu Hotel
                </h2>               
              </>
            ) :  (
              <>
                <h2>
                  Escolha Suas Atividades
                </h2>               
              </>
            )
            }
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

  & > div :first-child{
    margin-top:2rem;
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
  height:50vh;
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

  form{
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

const CustomLabel = styled(Label)`  
  display:flex;
  flex-direction:column; 
`;
