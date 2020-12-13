import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import Button from "../../../utils/Button";


import TrailOptions from "./TrailOptions";

export default function ActivitiesPage({value}) {
    let {user} = value;

    const [disableDay1, setDisableDay1] = useState(false);
    const [disableDay2, setDisableDay2] = useState(false);
    const [disableDay3, setDisableDay3] = useState(false);
    const [loading, setLoading] = useState(false)

    const [morning, setMorning] = useState("Gaming");
    const [afternoon, setAfternoon] = useState("Gaming");
    const [night, setNight] = useState("Gaming");

    const [dayOne, setDayOne] = useState("");
    const [dayTwo, setDayTwo] = useState("");
    const [dayThree, setDayThree] = useState("");
    
    const handleTrails = (state) => {
        state(false);
    };

    const fetchTrails = () => {
        axios.get(
            `${process.env.REACT_APP_BACKURL}/api/trails/get-trails`,            
            { headers: { "x-access-token": user.token } }        
        )
        .then(({data}) => {
            setDayOne({...data.trails[0].dayOne, day: 1})
            setDayTwo({...data.trails[1].dayTwo, day: 2})
            setDayThree({...data.trails[2].dayThree, day: 3})
        })
        .catch(err => console.log(err))
    }

    useEffect(() => fetchTrails(),[]); 

    

    return (
        <>
            <h2>
                Escolha Suas Atividades
            </h2>
            <ActivitiesContainer>

                <DaysColumns>
                    <h3>Dia 1</h3>
                    <TrailOptions value={{
                        day: dayOne, setDay: setDayOne,
                        morning, setMorning,
                        afternoon, setAfternoon,
                        night, setNight,
                        disableBtn: disableDay1
                    }}/>
                    {!disableDay1 && !disableDay2 && !disableDay3 ? (
                        <CustomBtn onClick={() => setDisableDay1(true)}>Alterar</CustomBtn>
                    ) : !disableDay2 && !disableDay3 ? (
                        <CustomBtn disabled={loading} onClick={() => handleTrails(setDisableDay1)}>Salvar</CustomBtn>
                    ) : (
                        <CustomBtn disabled>Alterar</CustomBtn>
                    )}                    
                </DaysColumns>

                <DaysColumns>
                    <h3>Dia 2</h3>
                    <TrailOptions value={{
                        day: dayTwo, setDay: setDayTwo,
                        morning, setMorning,
                        afternoon, setAfternoon,
                        night, setNight,
                        disableBtn: disableDay2
                    }}/>    
                    {!disableDay2 && !disableDay1 && !disableDay3 ? (
                        <CustomBtn onClick={() => setDisableDay2(true)}>Alterar</CustomBtn>
                    ) : !disableDay1 && !disableDay3 ? (
                        <CustomBtn disabled={loading} onClick={() => handleTrails(setDisableDay2)}>Salvar</CustomBtn>
                    ) : (
                        <CustomBtn disabled>Alterar</CustomBtn>
                    )}  
                </DaysColumns>

                <DaysColumns>
                    <h3>Dia 3</h3>
                    <TrailOptions value={{
                        day: dayThree, setDay: setDayThree,
                        morning, setMorning,
                        afternoon, setAfternoon,
                        night, setNight,
                        disableBtn: disableDay3
                    }}/>
                    {!disableDay3 && !disableDay2 && !disableDay1 ? (
                        <CustomBtn onClick={() => setDisableDay3(true)}>Alterar</CustomBtn>
                    ) : !disableDay2 && !disableDay1 ? (
                        <CustomBtn disabled={loading} onClick={() => handleTrails(setDisableDay3)}>Salvar</CustomBtn>
                    ): (
                        <CustomBtn disabled>Alterar</CustomBtn>
                    )}  
                </DaysColumns>

            </ActivitiesContainer>
        </>
    );
}

const CustomBtn = styled(Button)`    
    max-width:5rem;    
`;

const ActivitiesContainer = styled.section`
    margin-top:3rem;
    display:flex;
    width:100%;
    height:100%;    
    justify-content:space-evenly;   
`;

const DaysColumns = styled.aside`
    min-height:40vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;

    .slot {
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;     

      svg{
        font-size: 2rem;
        margin-top:1rem;      
      }

      .select {
        width: 10rem;
        height: 1.5rem;
        background: transparent;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #9A9999;
        border-radius:0.4rem;
        font-family: var(--formFont);
        color: #9A9999;
      }
    }

`;