import React from "react";
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { WiHorizonAlt } from 'react-icons/wi';


export default function TrailOptions({value}) {

    const {
        dayNumber,
        day, setDay,
        disableBtn
    } = value;   
    
    const trailObj = {
        morning: day.morning,
        afternoon: day.afternoon,
        night: day.night
    }

    const listOptions = [
        { id: "Gaming", name: "Gaming" },
        { id: "Hacking", name: "Hacking" },
        { id: "Makers", name: "Makers" },
        { id: "Startups", name: "Startups" },
    ];    
    
    return(
        <>
            <section className="slot">
                <FiSun />

                <select
                disabled={!disableBtn}
                id="morning"
                className="select"
                value={day.morning}
                onChange={(e) => {
                    if (e.target.value === "Hacking" && dayNumber === 2 ) {
                        trailObj.afternoon = "Hacking";
                        trailObj.night = "Hacking"
                        setDay({...trailObj});                        
                    }
                    if (e.target.value === "Gaming" && dayNumber === 3 ) {
                        trailObj.afternoon = "Gaming";
                        trailObj.night = "Gaming";
                        setDay({...trailObj});
                    }
                    trailObj.morning = e.target.value;
                    setDay({...trailObj});
                }}
                >
                {listOptions.map((item) => (
                    <option key={item.id} value={item.id}>
                    {item.name}
                    </option>
                ))}
                </select>
            </section>

            <section className="slot">
                <WiHorizonAlt/>

                <select
                disabled={!disableBtn}
                id="afternoon"
                className="select"
                value={day.afternoon}
                onChange={(e) => {
                    if (e.target.value === "Hacking" && dayNumber === 2) {
                        trailObj.afternoon = "Hacking";
                        trailObj.night = "Hacking"
                        setDay({...trailObj}); 
                    }
                    if (e.target.value === "Gaming" && dayNumber === 3) {
                        trailObj.afternoon = "Gaming";
                        trailObj.night = "Gaming";
                        setDay({...trailObj});
                    }
                    trailObj.afternoon = e.target.value;
                    setDay({...trailObj});
                }}
                >
                {listOptions.map((item) => (
                    <option key={item.id} value={item.id} >
                    {item.name}
                    </option>
                ))}
                </select>
            </section>

            <section className="slot">
                <FiMoon/>

                <select
                disabled={!disableBtn}
                id="night"
                className="select"
                value={day.night}
                onChange={(e) => {
                    if (e.target.value === "Hacking" && dayNumber === 2) {
                        trailObj.afternoon = "Hacking";
                        trailObj.night = "Hacking"
                        setDay({...trailObj}); 
                    }
                    if (e.target.value === "Gaming" && dayNumber === 3) {
                        trailObj.afternoon = "Gaming";
                        trailObj.night = "Gaming";
                        setDay({...trailObj});
                    }
                    trailObj.night = e.target.value;
                    setDay({...trailObj});
                }}
                >
                {listOptions.map((item) => (
                    <option key={item.id} value={item.id} >
                    {item.name}
                    </option>
                ))}
                </select>
            </section>
        </>
    );
}