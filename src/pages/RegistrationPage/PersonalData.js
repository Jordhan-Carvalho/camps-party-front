import React, { useContext, useState } from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';
import {useForm, Controller} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../../contexts/UserContext';

export default function PersonalData({personalData, setPersonalData, setPage, isHotel}){
  const { register, handleSubmit, control, errors } = useForm();
  const { user } = useContext(userContext);
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = data => {
    setDisabled(true);
    if(isHotel){
      if(personalData && personalData.hasOwnProperty('hotel')){
        const hotel = personalData.hotel;
        setPersonalData({...data, hotel});
      }else setPersonalData(data);
      setPage(2);
    }else{
      sendPersonalData(data);
    } 
    
  }

  function sendPersonalData(data){
    const request = axios.post(
      `${process.env.REACT_APP_BACKURL}/api/registration/create`, 
      data,
      {
        headers: {"x-access-token": user.token}
      }
    );
    request
    .then(() =>{
      history.push('/registration-trail');
    })
    .catch(error => {
      alert(error.response);
      setDisabled(false);
    })
  }

  return(
      <>
      <h2>Confirmar Inscrição</h2>
      <Form value='flex-end' onSubmit = {handleSubmit(onSubmit)}>
         <h3>Dados pessoais</h3>
         <Controller
            as={<input />}
            control={control}
            name='name' 
            placeholder="Nome Completo" 
            defaultValue={personalData ? personalData.name : ""} 
            rules = {{
              required: true,
                minLength: 3,
              }}
           />
            {errors.name && errors.name.type === 'required' && <p>Preencha este campo!</p>}
            {errors.name && errors.name.type === 'minLength' && <p>Entrada inválida!</p>}
            <Controller 
              as={<input />}
              control={control}
              name='address' 
              placeholder="Endereço"
              defaultValue={personalData ? personalData.address : ""} 
              rules = {{
                required: true,
                minLength: 3,
              }}
            />
            {errors.address && errors.address.type === 'required' && <p>Preencha este campo!</p>}
            {errors.address && errors.address.type === 'minLength' && <p>Entrada inválida!</p>}
            <Controller 
              as={<input />}
              control={control}
              name='phone' 
              placeholder="Fone"
              defaultValue={personalData ? personalData.phone : ""} 
              rules = {{
                required: true,
                minLength: 8,
              }}
            />
            {errors.phone && errors.phone.type === 'required' && <p>Preencha este campo!</p>}
            {errors.phone && errors.phone.type === 'minLength' && <p>Entrada inválida!</p>}
           <select name='gender' ref={register({ required: true })}>
              <option value="">Gênero</option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
              <option value="others">Outros</option>
              <option value="ratherNotSay">Prefiro não informar</option>
           </select>
           {errors.gender && errors.gender.type === 'required' && <p>Preencha este campo!</p>}
           <div className= 'btn-container'>
              <Button type='submit' disabled = {disabled}>{isHotel ? 'Próximo' : 'Finalizar'}</Button>
           </div>
        </Form>  
        </>
    )
}