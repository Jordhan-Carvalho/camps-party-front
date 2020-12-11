import React from 'react';
import Label from '../../utils/Label';
import styled from "styled-components";

export default function TicketSelection({setTicket}) {

    function getTicketType(e){
        const type = e.target.innerText;
        if(type.includes('Sem')){           
           setTicket("noAccommodation");
        }else if(type.includes('Camping')){           
           setTicket("camping");
        }else{           
           setTicket("hotel");
        }
     }

    return(
        <Container>
            <input type='radio' id='noAccommodation' name="option" value='noAccommodation'/>
           <Label htmlFor='noAccommodation' onClick={getTicketType}>
              <div></div>
              <p>Sem Hospedagem -  R$300,00</p>
            </Label>

           <input type='radio' id='camping' name="option" value='camping'/>
           <Label htmlFor='camping' onClick={getTicketType}>
              <div></div>
              <p>Área de Camping -  R$600,00</p>
            </Label>

           <input type='radio' id='hotel' name="option" value='hotel'/>
           <Label htmlFor='hotel' onClick={getTicketType}>
              <div></div>
              <p>Hotel - R$1200,00</p>
            </Label>
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;    
    justify-content:space-evenly;    
`;
