import React from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';

import Label from '../../utils/Label'

export default function TicketData({personalData, setPersonalData, setPage}){
   
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
              <Button onClick={() => setPage(3)}>Próximo</Button>
           </div>
        </Form>  
        </>
    )
}

