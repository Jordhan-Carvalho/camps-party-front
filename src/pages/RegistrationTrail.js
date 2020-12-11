import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { userContext } from "../contexts/UserContext";
import Header from "../components/Header";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { WiHorizonAlt } from "react-icons/wi";

export default function RegistrationTrail() {

  const { user } = useContext(userContext);
  const [page, setPage] = useState(1);


  const [morning, setMorning] = useState('Gaming');
  const [afternoon, setAfternoon] = useState('Gaming');
  const [night, setNight] = useState('Gaming');

  const [dayOne, setDayOne] = useState('');
  const [dayTwo, setDayTwo] = useState('');
  const [dayThree, setDayThree] = useState('');
  
  const [listOptions, setListOptions] = useState([
    {id: 'Gaming',   name: 'Gaming'},
    {id: 'Hacking',  name: 'Hacking'},
    {id:'Makers',    name: 'Makers'},
    {id: 'Startups', name: 'Startups'},
  ])

  useEffect( () => { 
    if (dayThree !== ''){
      sendTrailsToDatabase()
    }     
  }, [dayThree]);
  
  const history = useHistory();


  function nextPage(){
    
  
    if (page === 1){
      setDayOne({ 
        "dayOne":  {"morning": morning, 
                    "afternoon": afternoon, 
                    "night": night}
                });
      
      setMorning('Gaming');
      setAfternoon('Gaming');
      setNight('Gaming');
      setPage(page +1)

    } 
    
    if (page === 2){
      setPage(page +1);
      setDayTwo({ 
        "dayTwo":  {"morning": morning, 
                    "afternoon": afternoon, 
                    "night": night}
                });

      setMorning('Gaming');
      setAfternoon('Gaming');
      setNight('Gaming');
      

    } 


    if (page === 3) {
      
      setDayThree({ 
        "dayThree":  {"morning": morning, 
                    "afternoon": afternoon, 
                    "night": night}
                });

    }

    
  }

  function backPage(){
    if (page >1){
      setPage(page -1);

    }

  } 
    
  function sendTrailsToDatabase() {

    const dataTrails = [dayOne, dayTwo, dayThree];

      const request = axios.post( `http://localhost:3000/api/trails/post-trails`, dataTrails, {headers: {"x-access-token": user.token}} );
          
        request.then(() => {
          history.push(`/finished`) 
        });
    


  }
  

  return (
    <>
    
    <ContainerBox>
      <Header />
      <h1>Selecione Suas Trilhas</h1>
      <div className="boxOptions">
      {( page === 1 ) 
        ? <h3>Dia 1</h3>
        : (page === 2) ? <h3>Dia 2</h3> : <h3>Dia 3</h3>}

        <div className="slot">
          <div className="coverMorning"> <FiSun /> </div>
       
          <select id="morning" className="select"  value={morning} onChange={e => setMorning(e.target.value)}>
          {listOptions.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))} 
          </select>

        </div>

        <div className="slot">
          <div className="coverAfternoon"> <WiHorizonAlt /> </div>

          <select id="afternoon" className="select"  value={afternoon} onChange={e => setAfternoon(e.target.value)}>
          {listOptions.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))} 
          </select>

        </div>

        <div className="slot">
            <div className="coverNight"> <FiMoon /> </div>

            <select id="night" className="select" value={night} onChange={e => setNight( e.target.value)}>
             {listOptions.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))} 
            </select>

        </div>

        

        <div className="boxButtons">
          
          {( page === 1 ) 
            ? <><div></div><button onClick = { () => nextPage()}> Próximo > </button></>
            : (page === 2) 
            ? <><button onClick = { () => backPage()}>  Anterior </button>
              <button onClick = { () => nextPage()}>Próximo > </button> </>
            : <><button onClick = { () => backPage()}>  Anterior </button>
            <button onClick = { () => nextPage()}> Finalizar </button> </>}

        </div>
        
          
      

      </div>

      

    </ContainerBox>
    </>
  );
  }

const ContainerBox = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      margin-top: 2rem;

    }

    h3 {
        font-size: 2.25rem;
        margin-bottom: 3rem;
        margin-top: 2rem;
          
    }

    .boxOptions {
      background: rgb(0, 0 ,0, 24%);
      width: 25rem;
      height: 30rem;
      border-radius: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 3rem;

        .slot{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 2rem;
          margin-left: -6rem;

          .coverMorning {
            font-size: 3rem;
            margin-right: 3rem;
          }

          .coverAfternoon {
            font-size: 3rem;
            margin-right: 3rem;

            
          }

          .coverNight {
            font-size: 3rem;
            margin-right: 3rem;
          }

          .select{
            width: 10rem;
            height: 2rem;
            
          }

        
        }

        .boxButtons {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          margin-top: 1.5rem;
          

          button {
            width: 10rem;
            height: 2rem;
            background: #A003A4;
            color: #fff;
            border-radius: 0.6rem;
            border: none;
            font-size: 1.5rem;


          }
          
        }
    
    }

      @media(max-width: 800px) {

        h1 {
          font-size: 2rem;
        }
        
        h3 {
          
          margin-bottom: 1.5rem;
         
          
        }

        .boxOptions {
          width: 20rem;
          height: 25rem;
          margin-top: 2rem;

          .slot {
            justify-content: center;
            margin-left: 0;
            margin-bottom: 1rem;
          }

          .boxButtons {
            margin-top: 1.5rem;

            button {
              width: 8rem;
              height: 2rem;
      
            }
          
          }
        
        }

        

      }

`;