import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { WiHorizonAlt } from 'react-icons/wi';

import Header from "../components/Header";

export default function RegistrationTrail() {
  const { user } = useContext(userContext);
  const [page, setPage] = useState(1);
  const [morning, setMorning] = useState("Gaming");
  const [afternoon, setAfternoon] = useState("Gaming");
  const [night, setNight] = useState("Gaming");

  const [dayOne, setDayOne] = useState("");
  const [dayTwo, setDayTwo] = useState("");
  const [dayThree, setDayThree] = useState("");

  useEffect(() => {
    if (dayThree !== "") {
      sendTrailsToDatabase();
    }
  }, [dayThree]);

  const history = useHistory();

  const listOptions = [
    { id: "Gaming", name: "Gaming" },
    { id: "Hacking", name: "Hacking" },
    { id: "Makers", name: "Makers" },
    { id: "Startups", name: "Startups" },
  ];

  function nextPage() {
    if (page === 1) {
      setDayOne({
        dayOne: { morning, afternoon, night },
      });

      setMorning("Gaming");
      setAfternoon("Gaming");
      setNight("Gaming");
      setPage(page + 1);
    }

    if (page === 2) {
      const day2trails = [morning, afternoon, night];

      if (
        day2trails.some((t) => t === "Hacking") &&
        !day2trails.every((t) => t === "Hacking")
      ) {
        alert(
          "Neste dia, Hacking será um workshop e quem escolher, deve selecionar esta opção em todos os horários!"
        );
        return;
      }
      setPage(page + 1);
      setDayTwo({
        dayTwo: { morning, afternoon, night },
      });

      setMorning("Gaming");
      setAfternoon("Gaming");
      setNight("Gaming");
    }

    if (page === 3) {
      const day3trails = [morning, afternoon, night];

      if (
        day3trails.some((t) => t === "Gaming") &&
        !day3trails.every((t) => t === "Gaming")
      ) {
        alert(
          "Neste dia, Gaming será um campeonato e quem escolher, deve selecionar esta opção em todos os horários!"
        );
        return;
      }
      setDayThree({
        dayThree: { morning: morning, afternoon: afternoon, night: night },
      });
    }
  }

  function backPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function sendTrailsToDatabase() {
    const dataTrails = [dayOne, dayTwo, dayThree];

    const request = axios.post(
      `${process.env.REACT_APP_BACKURL}/api/trails/post-trails`,
      dataTrails,
      { headers: { "x-access-token": user.token } }
    );

    request.then(() => {
      history.push(`/finished`);
    });
  }

  return (
    <>
      <ContainerBox>
        <Header />
        <h1>Selecione Suas Trilhas</h1>
        <div className="boxOptions">
          {page === 1 ? (
            <h3>Dia 1</h3>
          ) : page === 2 ? (
            <h3>Dia 2</h3>
          ) : (
            <h3>Dia 3</h3>
          )}

          <div className="slot">
            <FiSun />

            <select
              id="morning"
              className="select"
              value={morning}
              onChange={(e) => {
                if (e.target.value === "Hacking" && page === 2) {
                  setAfternoon("Hacking");
                  setNight("Hacking");
                }
                if (e.target.value === "Gaming" && page === 3) {
                  setAfternoon("Gaming");
                  setNight("Gaming");
                }
                setMorning(e.target.value);
              }}
            >
              {listOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="slot">
            <WiHorizonAlt/>

            <select
              id="afternoon"
              className="select"
              value={afternoon}
              onChange={(e) => {
                if (e.target.value === "Hacking" && page === 2) {
                  setMorning("Hacking");
                  setNight("Hacking");
                }
                if (e.target.value === "Gaming" && page === 3) {
                  setMorning("Gaming");
                  setNight("Gaming");
                }
                setAfternoon(e.target.value);
              }}
            >
              {listOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="slot">
            <FiMoon/>

            <select
              id="night"
              className="select"
              value={night}
              onChange={(e) => {
                if (e.target.value === "Hacking" && page === 2) {
                  setMorning("Hacking");
                  setAfternoon("Hacking");
                }
                if (e.target.value === "Gaming" && page === 3) {
                  setMorning("Gaming");
                  setAfternoon("Gaming");
                }
                setNight(e.target.value);
              }}
            >
              {listOptions.map((item) => (
                <option key={item.id} value={item.id} selected>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="boxButtons">
            {page === 1 ? (
              <>
                <div></div>
                <button onClick={() => nextPage()}> Próximo </button>
              </>
            ) : page === 2 ? (
              <>
                <button onClick={() => backPage()}> Anterior </button>
                <button onClick={() => nextPage()}>Próximo </button>{" "}
              </>
            ) : (
              <>
                <button onClick={() => backPage()}> Anterior </button>
                <button onClick={() => nextPage()}> Finalizar </button>{" "}
              </>
            )}
          </div>
        </div>
      </ContainerBox>
    </>
  );
}

const ContainerBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }

  h3 {
    font-size: 2.25rem;
    margin: 0 0 20px 0;
  }

  .boxOptions {
    background: rgb(0, 0, 0, 24%);
    width: 25rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;

    .slot {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2rem;
      margin-left: -6rem;

      svg{
        font-size: 3rem;
        margin-right: 1rem;
      }

      .select {
        width: 10rem;
        height: 1.5rem;
        background: transparent;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #9A9999;
        border-radius:0.4rem;
        font-family: var(--formFont);
        color: #9A9999;
      }
    }

    .boxButtons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      margin-top: 1rem;

      button {
        width: 8rem;
        height: 2rem;
        background: #a003a4;
        color: #fff;
        border-radius: 0.6rem;
        border: none;
        font-size: 1.5rem;
        outline: none;
        cursor: pointer;;
      }
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
    h1 {
      font-size: 2rem;
      margin: 0;
      padding: 20px 0;
      text-align: center;
    }

    h3 {
      margin-bottom: 1rem;
    }

    .boxOptions {
      width: 90%;

      .slot {
        justify-content: center;
        margin-left: 0;
        margin-bottom: 1rem;
      }

      .boxButtons {
        margin-top: 1rem;

        button {
          width: 6rem;
          height: 2rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
