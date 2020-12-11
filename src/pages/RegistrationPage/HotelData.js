import React, { useContext, useState } from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';
import axios from 'axios';

import Label from '../../utils/Label'
import { userContext } from '../../contexts/UserContext';
import { useHistory } from 'react-router-dom';

export default function HotelData({personalData, setPage}){
  const [hotel, setHotel] = useState('');
  const { user } = useContext(userContext);
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  function sendPersonalHotelData(){
    if(hotel){
      setDisabled(true)
      const request = axios.post(
        `${process.env.REACT_APP_BACKURL}/api/registration/create`, 
        {...personalData, hotel},
        {
          headers: {"x-access-token": user.token}
        }
      );
      request
      .then(() =>{
        history.push('/pre-registration/success');
      })
      .catch(error => {
        alert(error.response);
        setDisabled(false);
      })
    }else alert('Escolha um hotel!');
  }

  return(
      <>
      <h2>Selecione Seu Hotel</h2>
      <Form value='space-between' onSubmit = {event => {
        event.preventDefault();
        sendPersonalHotelData();
      }}>
          <input type='radio' id='laResidence' name="option" value='laResidence' 
          defaultChecked={personalData && personalData.hotel && personalData.hotel === 'La Residence Paulista'} 
          />
          <Label htmlFor='laResidence' onClick={() => {
            setHotel('La Residence Paulista')
          }}>
            <div></div>
            <p>La Residence Paulista - R$1000,00</p>
          </Label>
          <input type='radio' id='danInn' name="option" value='danInn'
          defaultChecked={personalData && personalData.hotel && personalData.hotel === 'Dan Inn Planalto São Paulo'} 
          />
          <Label htmlFor='danInn' onClick={() => {
            setHotel('Dan Inn Planalto São Paulo')
          }}>
            <div></div>
            <p>Dan Inn Planalto São Paulo - R$1200,00</p>
          </Label>
          <input type='radio' id='intercity' name="option" value='intercity'
          defaultChecked={personalData && personalData.hotel && personalData.hotel === 'Intercity São Paulo Ibirapuera'} 
          />
          <Label htmlFor='intercity' onClick={() => {
            setHotel('Intercity São Paulo Ibirapuera')
          }}>
            <div></div>
            <p>Intercity São Paulo Ibirapuera - R$1300,00 </p>
          </Label>
          <input type='radio' id='blue' name="option" value='blue'
          defaultChecked={personalData && personalData.hotel && personalData.hotel === 'Blue Tree Premium'} 
          />
          <Label htmlFor='blue' onClick={() => {
            setHotel('Blue Tree Premium')
          }}>
            <div></div>
            <p>Blue Tree Premium - R$1450,00</p>
          </Label>
          <input type='radio' id='quality' name="option" value='quality'
          defaultChecked={personalData && personalData.hotel && personalData.hotel === 'Quality Faria Lima'} 
          />
          <Label htmlFor='quality' onClick={() => {
            setHotel('Quality Faria Lima');
          }}>
            <div></div>
            <p>Quality Faria Lima - R$1600,00</p>
          </Label>
          <p>* Ingresso incluso</p>
          <div className= 'btn-container'>
             <Button onClick={() => {
                 setPage(1);
               }}>Anterior</Button>
             <Button type='submit' disabled={disabled}>Finalizar</Button>
          </div>
      </Form>  
      </>
  )
}