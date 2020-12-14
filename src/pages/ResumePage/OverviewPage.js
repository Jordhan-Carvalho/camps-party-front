import React, { useState } from 'react';
import axios from "axios";
import Button from "../../utils/Button";

export default function OverviewPage({value}) {
    const [disableBtn, setDisableBtn] = useState(false);
    let {
        user,
        userInfo,
        changePersonal, setChangePersonal,
        address, setAddress,
        phone, setPhone,
        CPF,
        ticketType, setTicketType,
        changeType, setChangeType                
      } = value;

    const newPersonalInfo = () => {
        setDisableBtn(true);
        setChangePersonal(false);
        axios.post(
            `${process.env.REACT_APP_BACKURL}/api/registration/personal-info`,
            { address, phone },
            { headers: { "x-access-token": user.token } }
        ).then(() => {        
            setDisableBtn(false);
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            <h2>
                Seu Resumo
                
            </h2>
            <div className="infoDiv">
                <span>Data: 21, 22, 23 de Janeiro</span>
                <span>Camps do Jordão</span>
            </div>
            <div className="infoDiv">
                <span>{userInfo.name}</span>
                <span>{userInfo.gender}</span>

                {changePersonal ? (
                <input value={address} onChange={(e) => setAddress(e.target.value)}/>
                ) : (
                <span>{address}</span>
                )}

                <span>{user.email}</span>

                {changePersonal ? (
                <input  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                ):(
                <span>{phone}</span>
                )}

                <span>{CPF}</span>

                { !changePersonal && !disableBtn ? (
                <Button 
                    className="change-personal"
                    onClick={() => setChangePersonal(true)}>
                    Alterar dados
                </Button>
                ) : !disableBtn ? (
                <Button 
                    className="change-personal"
                    onClick={() => newPersonalInfo()}>
                    Salvar dados
                </Button>
                ) : (
                    <Button disabled>Salvando...</Button>
                )}

            </div>
            <div className="infoDiv">                  
                <span>Tipo de ingresso:
                    <select 
                    disabled={!changeType} 
                    value={ticketType} 
                    onChange={(e) => setTicketType(e.target.value)} 
                    required
                    >

                    <option 
                        value="noAccommodation">
                        Sem alojamento
                    </option>

                    <option 
                        value="camping">
                        Camping
                    </option>

                    <option 
                        value="hotel">
                        Hotel
                    </option>

                    </select>
                </span>                  
                {!changeType && !disableBtn ? (
                    <Button 
                    className="change-ticket" 
                    onClick={() => setChangeType(true)}>
                        Mudar tipo de ingresso
                    </Button>
                ) : !disableBtn ? (
                    <Button                    
                    form="ticket-form" 
                    className="change-ticket" 
                    onClick={() => setChangeType(false)}>
                        Salvar ingresso
                    </Button>
                ) : (
                    <Button disabled>Salvando...</Button>
                )}                
            </div>
        </>
    );
}