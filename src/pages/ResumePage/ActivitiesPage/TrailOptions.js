import React from "react";
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { WiHorizonAlt } from 'react-icons/wi';


export default function TrailOptions({value}) {

    const {
        day, setDay,
        morning, setMorning,
        afternoon, setAfternoon,
        night, setNight,
        disableBtn
    } = value;   
    
    console.log(day)

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
                    if (e.target.value === "Hacking" && day.day === 2 ) {
                        setDay(day.afternoon = "Hacking");
                        setDay(day.night = "Hacking");
                    }
                    if (e.target.value === "Gaming" && day.day === 3 ) {
                        setDay(day.afternoon = "Gaming");
                        setDay(day.night = "Gaming");
                    }
                    setDay(day.morning = e.target.value);
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
                    if (e.target.value === "Hacking" ) {
                        setDay(day.afternoon = "Hacking");
                        setDay(day.night = "Hacking");
                    }
                    if (e.target.value === "Gaming" ) {
                        setDay(day.afternoon = "Gaming");
                        setDay(day.night = "Gaming");
                    }
                    setDay(day.afternoon = e.target.value);
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
                    if (e.target.value === "Hacking") {
                        setDay(day.afternoon = "Hacking");
                        setDay(day.night = "Hacking");
                    }
                    if (e.target.value === "Gaming") {
                        setDay(day.afternoon = "Gaming");
                        setDay(day.night = "Gaming");
                    }
                    setDay(day.night = e.target.value);
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