import styled from "styled-components";

const Form = styled.form`
    width: 33vw;
    background: rgba(255, 255, 255, 0.24);
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    color: #9A9999;
    border-radius: 25px;

    h3{
      display: flex;
      justify-content: center;
      font-size: 30px;
      color: white;

    }

    input::placeholder, select, label{
      color: #9A9999;
    }

    input{
      color: white;      
    }

    input, select{
      background: transparent;
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #9A9999;
      border-radius:0.4rem;
      font-family: var(--formFont);
      padding: 5px;
      margin: 20px 0 5px 0;
    }

    p{
      font-family: var(--formFont);
      font-size: 14px;
    }

    .btn-container{
      width:100%;
      display: flex;
      justify-content: ${props => props.value};
      margin: 20px 0 0 0;
    }
`;

export default Form;