import React, {useState, useEffect} from 'react';
import axios from "axios";
import Label from "../../utils/Label"
import Form from "../../utils/Form";
import Button from "../../utils/Button";
import styled from 'styled-components';

export default function HotelPage({value}) {
    let {user} = value;
    const [hotel, setHotel] = useState("");
    const [changeHotel, setChangeHotel] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);
    
    const fetchHotel = () => {
        axios.get(
            `${process.env.REACT_APP_BACKURL}/api/registration/hotel`,
            { headers: { "x-access-token": user.token } }
          ).then(({data}) => {            
            setHotel(data.hotel)
          })
          .catch((err) => console.log(err))        
      };
    
      useEffect(() => fetchHotel(),[]);

    const updateHotel = () => {
        setDisableBtn(true);
        setChangeHotel(false);
        axios.post(
            `${process.env.REACT_APP_BACKURL}/api/registration/hotel`,
            { hotel },
            { headers: { "x-access-token": user.token } }
        ).then(({data}) => {
            setHotel(data.hotel);
            setDisableBtn(false);
        })
        .catch((err) => console.log(err))
    };

    return (
        <>
            <h2>
                Escolha Seu Hotel                  
            </h2>
            {user.ticket === "camping" ? (
                <>
                    <div className="infoDiv">
                        <span>Seu tipo de ingresso não requer hotel.</span>                    
                    </div>
                    <div className="infoDiv">
                        <span>Você receberá uma barraca no credenciamento do evento,<br/>
                        não é necessário agendar nada por aqui :D
                        </span>                    
                    </div>
                </>
            ) : user.ticket === "noAccommodation" ? (
                <>
                    <div className="infoDiv">
                        <span>Seu tipo de ingresso não requer hotel.</span>                    
                    </div>
                    <div className="infoDiv">
                        <span>Você decidiu por tomar as rédes do seu próprio<br/>
                        destino e escolher onde ficar!
                        </span>                    
                    </div>
                    <div className="infoDiv">
                        <span>Caso mude de idéia, é só trocar o tipo de ingresso.</span>                    
                    </div>
                </>
            ) : (
                <>
                    <div className="infoDiv">                        
                        <CustomHotelForm disabled={!changeHotel} required id="change-hotel" onSubmit={(e) => e.preventDefault()}>
                            <input 
                            disabled={!changeHotel} 
                            type='radio' 
                            id='laResidence' 
                            checked = {hotel === "La Residence Paulista"}
                            onChange = {(e) => setHotel(e.target.value)}
                            name="option" 
                            value='La Residence Paulista'/>
                            <Label htmlFor='laResidence'>
                                <div></div>
                                <p>La Residence Paulista</p>
                            </Label>

                            <input 
                            disabled={!changeHotel} 
                            type='radio' 
                            id='danInn'
                            checked = {hotel === "Dan Inn Planalto São Paulo"}
                            onChange = {(e) => setHotel(e.target.value)} 
                            name="option" 
                            value='Dan Inn Planalto São Paulo'/>
                            <Label htmlFor='danInn'>
                                <div></div>
                                <p>Dan Inn Planalto São Paulo</p>
                            </Label>

                            <input 
                            disabled={!changeHotel} 
                            type='radio' 
                            id='intercity'
                            checked = {hotel === "Intercity São Paulo Ibirapuera"}
                            onChange = {(e) => setHotel(e.target.value)} 
                            name="option" 
                            value='Intercity São Paulo Ibirapuera'/>
                            <Label htmlFor='intercity'>
                                <div></div>
                                <p>Intercity São Paulo Ibirapuera</p>
                            </Label>

                            <input 
                            disabled={!changeHotel} 
                            type='radio' 
                            id='blue'
                            checked = {hotel === "Blue Tree Premium"}
                            onChange = {(e) => setHotel(e.target.value)} 
                            name="option" 
                            value='Blue Tree Premium'/>
                            <Label htmlFor='blue'>
                                <div></div>
                                <p>Blue Tree Premium</p>
                            </Label>

                            <input 
                            disabled={!changeHotel} 
                            type='radio' 
                            id='quality'
                            checked = {hotel === "Quality Faria Lima"}
                            onChange = {(e) => setHotel(e.target.value)} 
                            name="option" 
                            value='Quality Faria Lima'/>
                            <Label htmlFor='quality'>
                                <div></div>
                                <p>Quality Faria Lima</p>
                            </Label>

                        </CustomHotelForm>
                        {changeHotel && !disableBtn ? (
                            <SaveHotel type="submit" form="change-hotel" onClick={() => updateHotel()}>
                                Salvar Hotel
                            </SaveHotel>
                        ) : !disableBtn ? (
                            <SaveHotel type="submit" form="change-hotel" onClick={() => setChangeHotel(true)}>
                                Alterar Hotel
                            </SaveHotel>
                        ) : (
                            <SaveHotel disabled>Salvando...</SaveHotel>
                        )}
                    </div>
                </>
            )}
        </>
    );
}

const CustomHotelForm = styled(Form)`
    
    input[type=radio]:checked + label{
        p{
            color:lightgreen;
        }
        box-shadow: 0 0 4px lightgreen;
    }    
    background-color: ${({disabled}) => !disabled ? "none" : "inherit"};    
`;

const SaveHotel = styled(Button)`
    margin-bottom:2rem;
`;