import React from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';

import Label from '../../utils/Label'

export default function HotelData({personalData, setPersonalData, setPage, setIsHotel}){
   
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
        <h2>Selecione Seu Hotel</h2>
        <Form value='space-between' onSubmit = {event => event.preventDefault()}>
            <input type='radio' id='laResidence' name="option" value='laResidence' 
            //defaultChecked={personalData && personalData.type && personalData.type === 'noAccommodation'} 
            />
            <Label htmlFor='laResidence' onClick={getTicketType}>
              <div></div>
              <p>La Residence Paulista - R$1000,00 (ingresso incluso)</p>
            </Label>

            <input type='radio' id='danInn' name="option" value='danInn'
            //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
            />
            <Label htmlFor='danInn' onClick={getTicketType}>
              <div></div>
              <p>Dan Inn Planalto São Paulo - R$1200,00 (ingresso incluso)</p>
            </Label>

            <input type='radio' id='intercity' name="option" value='intercity'
            //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
            />
            <Label htmlFor='intercity' onClick={getTicketType}>
              <div></div>
              <p>Intercity São Paulo Ibirapuera - R$1300,00 (ingresso incluso)</p>
            </Label>

            <input type='radio' id='blue' name="option" value='blue'
            //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
            />
            <Label htmlFor='blue' onClick={getTicketType}>
              <div></div>
              <p>Blue Tree Premium - R$1450,00 (ingresso incluso)</p>
            </Label>

            <input type='radio' id='quality' name="option" value='quality'
            //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
            />
            <Label htmlFor='quality' onClick={getTicketType}>
              <div></div>
              <p>Quality Faria Lima - R$1600,00 (ingresso incluso)</p>
            </Label>
              
           <div className= 'btn-container'>
              <Button onClick={() => {
                  setIsHotel(false);
                  setPage(1);
                }}>Anterior</Button>
              <Button onClick={() => setPage(1)}>Finalizar</Button>
           </div>
        </Form>  
        </>
    )
}