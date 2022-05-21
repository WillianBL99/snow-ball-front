import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getContext } from "../../hooks/UserContext";

export default function MainScreen() {
  const [tipoInfo, setTipoInfo] = useState("meus-cursos");
  const [resposta, setResposta] = useState([]);
  const [lista, setLista] = useState([]);
  const { setUser, url } = getContext();

  useEffect(() => {
    const promisse = axios.get(`${url}videos`);
    promisse
      .then((res) => {
        console.log(res.data);
        setResposta(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <ContainerMainScreen>
      <span className="topo">
        <BotoesTopo>
          <Link to={"/create"}>
            <ion-icon name="alert-outline"></ion-icon>
          </Link>
          <p>Criar</p>
        </BotoesTopo>

        <BotoesTopo>
          <ion-icon name="bicycle"></ion-icon>
          <p>Meus Cursos</p>
        </BotoesTopo>
        <BotoesTopo>
          <ion-icon name="library"></ion-icon>
          <p>Cursos</p>
        </BotoesTopo>
      </span>
      <Caixote>
        <div className="caixa">
          <ul>
            {resposta.map((obj) => {
              const { title, _id, type, email } = obj;
              switch (tipoInfo) {
                case "meus-cursos":
                  return (
                    <Link to={`/videos/${_id}`} key={_id}>
                      <CaixaVideo>
                        <h1>{title}</h1>
                        <p>{type}</p>
                        <p>
                          <small>{email}</small>
                        </p>
                      </CaixaVideo>
                    </Link>
                  );
              }
            })}
          </ul>
        </div>
      </Caixote>
    </ContainerMainScreen>
  );
}
const Caixote = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #16aa8f;
  display: flex;
  justify-content: center;
  align-items: center;
  .caixa {
    background-color: #137f6b;
    width: 95%;
    height: 95%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    width: 88%;
    height: 95%;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #137f6b;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #0c6050;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #0c6050;
    }
  }
`;
const CaixaVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-1);
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  h1 {
    color: var(--color-2);
    font-weight: 600;
    font-size: 25px;
  }
  p {
    color: var(--color-2);
    font-weight: 600;
    font-size: 20px;
  }
  small {
    font-weight: 400;
    font-size: 16px;
  }
`;

const ContainerMainScreen = styled.section`
  width: 100%;
  height: 100vh;
  background-color: green;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topo {
    height: 20vh;
    width: 100%;
    justify-content: space-between;
    background-color: #16aa8f;
  }
`;

const BotoesTopo = styled.button`
  border: 0;
  background-color: #16aa8f;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  p {
    font-size: 20px;
    color: white;
  }
  ion-icon {
    color: white;
    font-size: 50px;
  }
`;
