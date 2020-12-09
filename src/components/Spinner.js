import React from "react";
import styled from "styled-components";

import loadingGif from "../assets/loading.webp";

export default function Spinner() {
  return (
    <ContainerDiv>
      <LoadingImage src={loadingGif} alt="Loading spinner" />
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const LoadingImage = styled.img`
  width: 150px;
  display: block;
`;
