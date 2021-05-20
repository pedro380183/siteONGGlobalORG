import styled from 'styled-components';

export const Estilos = {
  cores: {
    azulClaro: "#3D98C4",
    rosaClaro: "#C75491",
    rosa: "#C73583",
    azul: "#1F8EC4",
    azulEscuro: "#11709E",
    brancoAzul: "#F0F5F7",
    pretoLeve: "#393E40"
  },
  fontes: {
    serif: "'Merriweather', serif",
    sans: "'Merriweather Sans', sans-serif"
  }
};

export const SocialMedia = styled.div`
  background-color: ${Estilos.cores.azulEscuro};
  display: flex;
  justify-content: flex-end;
  justify-items: space-between;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0 1% 0 0;

    li {
      display: flex;
      align-content: center;
      margin: 0 10px;
      padding: 5px 0;
    }
  }
`;


export const Primeira = styled.section`
  background-color: ${Estilos.cores.azulClaro};
  height: auto;
  width: auto;
  color: white;
  padding: 5% 12% 2% 12%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  img:first-of-type {
    width: 40vw;
    position: absolute;
    right: 0;
    top: 50px;

    @media(max-width: 1200px) {
      display: none;
    }
  }

  @media(max-width: 939px) {
    padding: 5% 1%;
    text-align: center;
  }

  @media(max-width: 500px) {
    display: flex;
    padding: 0;
  }

  h2 {
    display: block;
    margin: 60px auto;
    text-align: center;
    flex-grow: 4;
    width: 100%;
    font: bold 24px ${Estilos.fontes.sans};
  }
`;

export const Texto = styled.div`
  color: ${Estilos.cores.brancoAzul};
  height: auto !important;
  width: 40vw;
  display: inline;

  @media(max-width: 1200px) {
    width: 90vw;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-family: ${Estilos.fontes.serif};
    font-size: 54px;
    font-weight: 400;

    @media(max-width: 939px) {
      font-size: 64px;
    }
  }

  p {
    font-size: 21px;
    font-weight: 200;
    margin: 20px 0;

    @media(max-width: 939px) {
      font-size: 30px;
    }
  }

  button {
    background-color: ${Estilos.cores.rosaClaro};
    padding: 10px 25px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    border: none;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.2);
    transition: transform 300ms;

    @media(max-width: 1260px) {
      width: 90%;
      margin: 20px 0 0 0;
    }

    :hover {
      transform: translate(5px, 5px);
    }
  }
`;

export const Categorias = styled.div`
  display: block;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media(max-width: 1050px) {
      justify-content: center;
      width: 90%;
      margin: 0 auto;
    }
  }

    li {
      background-color: ${Estilos.cores.brancoAzul};
      display: grid;
      grid-template-rows: 80% 20%;
      place-items: center;
      height: 220px;
      width: 234px;
      border-radius: 16px;
      box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);
      
      @media(max-width: 1050px) {
        margin: 10px;
      }

      @media(max-width: 500px) {
        width: 180px;
      }

      img {
        width: 150px !important;
        position: static !important;
        display: block !important;

        @media(max-width: 900px) {
          display: block !important;
        }
      }

      a {
        place-self: start center;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: ${Estilos.cores.azulEscuro};
      }
    }
  }
  
`;

export const Segunda = styled.section`
  background: ${Estilos.cores.brancoAzul};
  padding: 5% 12% 0% 12%;
  color: white;

  @media(max-width: 939px) {
    padding: 8% 1%;
  }

  h1 {
    color: ${Estilos.cores.azulEscuro};
    font-weight: 700;
    font-size: 24px;
    margin: -15px 0 35px 0;
  }

  h1 + p {
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0;
    color: rgba(57, 62, 64, 1);
  }

  h1, h1 + p {
    font-family: ${Estilos.fontes.sans};
    
    @media(max-width: 1275px) {
      text-align: center;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 1275px) {
    justify-content: space-evenly;
  }
`;

export const Terceira = styled.section`
  padding: 2% 12%;
  background: ${Estilos.cores.azulClaro};
  color: ${Estilos.cores.brancoAzul};

  @media(max-width: 939px) {
    padding: 8% 1.5%;
    text-align: center;
  }

  h1 {
    @media(max-width: 939px) {
      font-size: 30px;
    }
  }

  h1 + p, h1  {
    font-family: ${Estilos.fontes.sans};
  }

  h1 + p {
    margin: 25px 0 25px 0;
    font-weight: 500;

    @media(max-width: 939px) {
      font-size: 24px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    
    @media(max-width: 1050px) {
      justify-content: center;
      width: 90%;
      margin: 0 auto;
    }

    li {
      background-color: ${Estilos.cores.rosa};
      display: grid;
      grid-template-rows: 80% 20%;
      place-items: center;
      height: 220px;
      width: 234px;
      border-radius: 16px;
      box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);

      @media(max-width: 1050px) {
        margin: 15px
      }

      @media(max-width: 500px) {
        width: 180px;
      }

      img {
        width: 150px !important;
        position: static !important;
        display: block !important;

        @media(max-width: 900px) {
          display: block !important;
      }
    }

    a {
      place-self: start center;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      color: ${Estilos.cores.brancoAzul};
    }
  }


  }

  div:last-of-type {
    p {
      display: block;
      margin: 25px 0 15px;
      width: 100%;
      flex-grow: 1;
    }

    div {
      box-sizing: border-box;
      background: #C73583;
      border-radius: 26px;
      padding: 5px 10px;
      margin-right: 45px;
      position: relative;

      @media(max-width: 900px) {
        margin: 0 0 10px 0;
      }

      button:first-of-type {
        height: auto;
        border-radius: 26px;
        margin-right: 45px;
        position: relative;
        background: #C73583;
        transform: scale(0.8);
        border: none;
        z-index: 99;
      }

      button:nth-of-type(2) {
        position: relative;
        left: -10px;
        border-radius: 26px;
        margin: 0;
        background: #C73583;
        border: none;
      }

      div {
        background: white;
        width: 100%;
        border-radius: 0;
      }
    }
  }
`;

export const Quarta = styled(Segunda)`

`;

export const Quinta = styled.section`
  padding: 5% 12%;
  display: flex;
  color: ${Estilos.cores.brancoAzul};
  background: ${Estilos.cores.azulClaro};
  
  @media(max-width: 1250px) {
    padding: 25px 50px;
  }

  img {
    @media(max-width: 1250px) {
      display: none;
    }
  }

  h1, p {
    margin: 0 0 20px 0;
  }

  h1 {
    font-size: 54px;
    font-weight: 400;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }

  button {
    padding: 10px 45px 10px 20px;
    margin: 45px 0;
    font-size: 19px;
    font-weight: 500;
    background-color: #C75491;
    border-radius: 6px;
    outline: none;
    border: none;
    place-items: center;
    color: white;
    box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
    cursor: pointer;

    :after {
        content: "";
        background-image: url(${arrow});
        background-size: contain;
        background-position: center;
        margin-left: 10px;
        min-width: 30px;
        min-height: 40px;
        transform: translate(-20%, -20%);
        position: absolute;
    }
  }
`;

export const Footer = styled.footer`
  padding: 3% 12%;
  font-family: ${Estilos.fontes.serif};
  color: #393E40;
  background: ${Estilos.cores.brancoAzul};

  @media(max-width: 1250px) {
    padding: 25px 50px;
  }
  
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    
    @media(max-width: 900px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
    }
    
    li {
      width: 25%;
      padding: 0 35px 50px 0;

      @media(max-width: 900px) {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
      }

      p {
        @media(max-width: 900px) {
          text-align: center;
        }
      }
  
      a {
        text-decoration: none;
        color: ${Estilos.cores.pretoLeve};
        display: flex;
        flex-direction: row;
        margin: 0 0 15px 0;
      }

      button, input {
        width: 80%;
      }

      form {
        @media(max-width: 900px) {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        input {
          padding: 5px;
          margin: 10px 0;
          border-radius: 4px;
          border: solid 1px ${Estilos.cores.pretoLeve};
          background: rgba(0,0,0,0);

          @media(max-width: 900px) {
            width: 100%;
          }
        }
      }

      

      img {
        width: 25px;
        height: 25px;
        margin: 0 10px 0 0;

        @media(max-height: 500px) {
          width: 15%;
          height: 15%;
        }
      }
    
      h1 {
        font-weight: bold;
        font-size: 24px;
        margin: 0 0 25px 0;
        display: flex;
      }
    
      p {
        line-height: 140%;
      }

      button {
        padding: 7px 35px;
        margin: 10px 0;
        font-size: 19px;
        font-weight: 400;
        background-color: #C75491;
        border-radius: 6px;
        border: none;
        color: white;
        box-shadow: 0px 8px 14px rgba(0,0,0,0.3);
        cursor: pointer;
      }
    }
  }

  div:last-of-type {
    display: flex;
    margin: 40px 0 0 0;
    justify-content: space-between;
    font-family: ${Estilos.fontes.sans};
    color: ${Estilos.cores.pretoLeve};

    @media(max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: ${Estilos.cores.pretoLeve};
    }
  }
`;
