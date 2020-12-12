import React from 'react';
import styled from "styled-components";
import { VscBook } from "react-icons/vsc";
import { FaHotel } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import Label from "../../utils/Label";

export default function SideMenu({value}) {

    let { setPage } = value;

    return(
        <div id="side-menu" >
            <div>              
                <input type='radio' id='resumo' name="option" value='Resumo' defaultChecked/>                        
                <CustomLabel htmlFor='resumo' onClick={() => setPage("1")} >
                <VscBook size={40}/>               
                <p>Resumo</p>
                </CustomLabel>              
            </div>

            <div>
                <input type='radio' id='hotel' name="option" value='Hotel'/>
                <CustomLabel htmlFor='hotel' onClick={() => setPage("2")} >
                    <FaHotel size={40}/>               
                    <p>Hotel</p>
                </CustomLabel>
            </div>

            <div>
                <input type='radio' id='activities' name="option" value='Activities'/>
                <CustomLabel htmlFor='activities' onClick={() => setPage("3")} >
                    <AiOutlineSchedule size={40}/>                          
                    <p>Atividades</p>
                </CustomLabel>
            </div>
        </div>
    );
};

const CustomLabel = styled(Label)`  
  display:flex;
  flex-direction:column; 
`;