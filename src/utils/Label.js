import styled from 'styled-components';

import tickets from '../assets/tickets.png';
import campingTent from '../assets/camping.png';
import hotel from '../assets/hotel.png';

const Label = styled.label`
   display: flex;
   align-items: center;
   font-family: var(--formFont);
   padding: 5px;
   margin: 15px 0 5px 0;
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

export default Label;