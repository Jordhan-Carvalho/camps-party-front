import React, { useEffect, useContext } from "react";
import axios from "axios";

import { userContext } from "../contexts/UserContext";

export default function ResumePage() {
  const { user } = useContext(userContext);

  useEffect(() => {
    fetchFullReg();
  }, []);

  const fetchFullReg = async () => {
    try {
      const {
        data,
      } = await axios.get(
        `${process.env.REACT_APP_BACKURL}/api/users/${user.id}/complete-reg`,
        { headers: { "x-access-token": user.token } }
      );
      console.log("COMPLETE REG", data);
    } catch (e) {
      console.log(e);
    }
  };

  return <div>Resume Page</div>;
}
