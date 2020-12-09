import React from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';

export default function PersonalData({register, handleSubmit, errors}){
    const onSubmit = data => {
        console.log(data);
    }

    return(
        <>
        <h2>Confirmar Inscrição</h2>
        <Form value='flex-end' onSubmit = {handleSubmit(onSubmit)}>
           <h3>Dados pessoais</h3>
           <input 
              name='name' 
              placeholder="Nome Completo" 
              ref={register({
                required: true,
                minLength: 3,
              })} 
            />
            {errors.name && errors.name.type === 'required' && <p>Preencha este campo!</p>}
            {errors.name && errors.name.type === 'minLength' && <p>Entrada inválida!</p>}
           <input 
              name='address' 
              placeholder="Endereço" 
              ref={register({
                required: true,
                minLength: 3
              })} 
            />
            {errors.address && errors.address.type === 'required' && <p>Preencha este campo!</p>}
            {errors.address && errors.address.type === 'minLength' && <p>Entrada inválida!</p>}
           <input 
              name='phone' 
              placeholder="Fone" 
              ref={register({
                required: true,
                minLength: 8
              })} 
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
              <Button>Próximo</Button>
           </div>
        </Form>  
        </>
    )
}