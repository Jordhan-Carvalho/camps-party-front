import React from "react";
import styled from "styled-components";
import {useForm} from 'react-hook-form';

import Header from '../../components/Header';
import PersonalData from "./PersonalData";

export default function Registration() {
  const { register, handleSubmit, errors } = useForm();
  
  return(
    <>
      <Header />
      <RegContainer>
        <PersonalData register={register} handleSubmit={handleSubmit} errors = {errors} />
      </RegContainer>
    </>
  )
}


const RegContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-size: 40px;
    margin: 30px 0;
  }
`;

