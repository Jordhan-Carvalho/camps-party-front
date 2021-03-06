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

    input, select, label{
      background: transparent;
      outline: none;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #9A9999;
      border-radius:0.4rem;
      font-family: var(--formFont);
      padding: 5px;
      margin: 15px 0 5px 0;
      border-radius: 5px;
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

    input[type=radio]{
      display: none;
    }

    input[type=radio] + label{
      cursor:pointer;
    }

    input[type=radio]:checked + label{
      box-shadow: 0 0 4px #FFF;
      
    }

  @media (max-width: 800px){
    width: 90vw;
    padding: 15px 10px;

    h3{
      font-size: 20px;
    }

    p{
      font-size: 12px;
    }
  }
`;

export default Form;