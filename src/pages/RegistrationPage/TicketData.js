import React from 'react';
import Form from '../../utils/Form';
import Button from '../../utils/Button';


export default function TicketData({personalData, setPersonalData, setPage}){

    return(
        <>
        <h2>Confirmar Inscrição</h2>
        <Form value='space-between' onSubmit = {event => event.preventDefault()}>
           <h3>Tipo de ingresso</h3>
              
           <div className= 'btn-container'>
              <Button onClick={() => setPage(1)}>Anterior</Button>
              <Button>Próximo</Button>
           </div>
        </Form>  
        </>
    )
}