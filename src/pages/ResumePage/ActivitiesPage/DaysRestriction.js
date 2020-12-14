export default function DaysRestriction(dayTwo,dayThree, setRestrictionMsg) {
    if(dayTwo.morning === "Hacking" ||
        dayTwo.afternoon === "Hacking" ||
        dayTwo.night === "Hacking"){

        if(dayTwo.morning !== "Hacking" ||
        dayTwo.afternoon !== "Hacking" ||
        dayTwo.night !== "Hacking"){
            setRestrictionMsg("Dia 2: Se optar por Hacking, deverá ser todos os horários!")
            return true;
        }
    }

    if(dayThree.morning === "Gaming" ||
    dayThree.afternoon === "Gaming" ||
    dayThree.night === "Gaming"){

        if(dayThree.morning !== "Gaming" ||
        dayThree.afternoon !== "Gaming" ||
        dayThree.night !== "Gaming"){
            setRestrictionMsg("Dia 3: Se optar por Gaming, deverá ser todos os horários!")
            return true;
        }
    }

    return false;
}