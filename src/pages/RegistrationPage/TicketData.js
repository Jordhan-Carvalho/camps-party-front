import React, { useEffect, useState } from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';
import styled from 'styled-components';

import tickets from '../../assets/tickets.png';
import campingTent from '../../assets/camping.png';
import hotel from '../../assets/hotel.png';

export default function TicketData({personalData, setPersonalData, page, setPage}){
   
   function getTicketType(e){
      const type = e.target.innerText;
      if(type.includes('Sem')){
         const newPersonalData ={...personalData, type: 'noAccommodation'}
         setPersonalData(newPersonalData);
      }else if(type.includes('Camping')){
         const newPersonalData ={...personalData, type: 'camping'}
         setPersonalData(newPersonalData);
      }else{
         const newPersonalData ={...personalData, type: 'hotel'}
         setPersonalData(newPersonalData);
      }
   }

    return(
        <>
        <h2>Confirmar Inscrição</h2>
        <Form value='space-between' onSubmit = {event => event.preventDefault()}>
           <h3>Tipo de ingresso</h3>

           <input type='radio' id='noAccommodation' name="option" value='noAccommodation' 
            defaultChecked={personalData && personalData.type && personalData.type === 'noAccommodation'} />
           <Label htmlFor='noAccommodation' onClick={getTicketType}>
              <div></div>
              <p>Sem Hospedagem -  R$500,00</p>
            </Label>

           <input type='radio' id='camping' name="option" value='camping'
            defaultChecked={personalData && personalData.type && personalData.type === 'camping'} />
           <Label htmlFor='camping' onClick={getTicketType}>
              <div></div>
              <p>Área de Camping -  R$710,00</p>
            </Label>

           <input type='radio' id='hotel' name="option" value='hotel'
            defaultChecked={personalData && personalData.type && personalData.type === 'hotel'} />
           <Label htmlFor='hotel' onClick={getTicketType}>
              <div></div>
              <p>Hotel -  À partir de R$1000,00</p>
            </Label>
              
           <div className= 'btn-container'>
              <Button onClick={() => setPage(1)}>Anterior</Button>
              <Button>Próximo</Button>
           </div>
        </Form>  
        </>
    )
}

const Label = styled.label`
   display: flex;
   align-items: center;
   font-family: var(--formFont);
   padding: 5px;
   margin: 20px 0 5px 0;
   border-radius: 5px;
   div{
      width: 2.5em;
      height: 2.5em;
      border-radius: 100%;
      background-image: ${props => 
         props.htmlFor === 'noAccommodation' ? 
         `url(${tickets})`: 
         props.htmlFor === 'camping' ? 
         `url(${campingTent})` : 
         `url(${hotel})`
         };
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin: 0 15px 0 0;
   }
   p{
      font-size: 1em;
      color: white;
   }
`;