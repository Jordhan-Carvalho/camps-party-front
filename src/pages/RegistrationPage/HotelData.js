import React, { useContext, useState } from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';
import axios from 'axios';

import Label from '../../utils/Label'
import { userContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function HotelData({personalData, setPersonalData, setPage, setIsHotel}){
  const [hotel, setHotel] = useState('');
  const { user } = useContext(userContext);
  const history = useHistory();

  function sendPersonalHotelData(){
    const request = axios.post('http://localhost:3000/api/registration/create', {...personalData, hotel},{headers: {"x-access-token": user.token}});
    request.then(() =>{
      history.push('/registration-trail');
    }).catch(error => {
      alert(error.response);
    })
  }

  return(
      <>
      <h2>Selecione Seu Hotel</h2>
      <Form value='space-between' onSubmit = {event => {
        event.preventDefault();
        sendPersonalHotelData();
      }}>
          <input type='radio' id='laResidence' name="option" value='laResidence' 
          //defaultChecked={personalData && personalData.type && personalData.type === 'noAccommodation'} 
          />
          <Label htmlFor='laResidence' onClick={() => {
            setHotel('laResidence')
          }}>
            <div></div>
            <p>La Residence Paulista - R$1000,00 (ingresso incluso)</p>
          </Label>
          <input type='radio' id='danInn' name="option" value='danInn'
          //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
          />
          <Label htmlFor='danInn' onClick={() => {
            setHotel('danInn')
          }}>
            <div></div>
            <p>Dan Inn Planalto São Paulo - R$1200,00 (ingresso incluso)</p>
          </Label>
          <input type='radio' id='intercity' name="option" value='intercity'
          //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
          />
          <Label htmlFor='intercity' onClick={() => {
            setHotel('intercity')
          }}>
            <div></div>
            <p>Intercity São Paulo Ibirapuera - R$1300,00 (ingresso incluso)</p>
          </Label>
          <input type='radio' id='blue' name="option" value='blue'
          //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
          />
          <Label htmlFor='blue' onClick={() => {
            setHotel('blue')
          }}>
            <div></div>
            <p>Blue Tree Premium - R$1450,00 (ingresso incluso)</p>
          </Label>
          <input type='radio' id='quality' name="option" value='quality'
          //defaultChecked={personalData && personalData.type && personalData.type === 'camping'} 
          />
          <Label htmlFor='quality' onClick={() => {
            setHotel('quality');
          }}>
            <div></div>
            <p>Quality Faria Lima - R$1600,00 (ingresso incluso)</p>
          </Label>
            
         <div className= 'btn-container'>
            <Button onClick={() => {
                setPage(1);
              }}>Anterior</Button>
            <Button type='submit'>Finalizar</Button>
         </div>
      </Form>  
      </>
  )
}