import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

export default function Video() {
    const [videoInfo, setVideoInfo] = useState({});
    const [videoLink, setVideoLink] = useState('');
    const [answer, setAnswer] = useState(true);
    const id = useParams().id;

    const URL = `http://localhost:5000/videos/${id}`;

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setVideoInfo(response.data);
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
            });
    }, []);

    useEffect(() => {
        if (videoInfo.link) {
            setVideoLink(`https://www.youtube.com/embed/${(videoInfo?.link).split("=")[1]}`);
        }
    }, [videoInfo]);

    return (

        <Main>
            {videoLink ? <>
                <iframe width="516px" height="50%" src={videoLink} title={videoInfo.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h2>{videoInfo.title}</h2>
                <Questions>
                    {videoInfo.questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <p className="question">{question.question}</p>
                                {answer ?
                                    <></>
                                    :
                                    <p className="answer">{question.answer}</p>
                                }
                            </div>
                        );
                    })}
                </Questions>
            </>
                : <></>}
            <Buttons>
                <button onClick={() => alert("Infelizmente não deu tempo de implementar no front :'(")}>Adicionar pergunta</button>
                <button onClick={() => setAnswer(!answer)}>{answer ? "Mostrar Respostas" : "Esconder Respostas"}</button>
            </Buttons>
        </Main>
    );
}

const Main = styled.main`
    width:100%;
    height:100%;
    display:flex;
    padding:10px;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h2{
        margin-top: 5px;
        font-size:25px;
        font-weight:bold;
    }

`

const Questions = styled.div`
    width:100%;
    max-width:500px;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
    text-align:start;
    overflow:auto;
    margin: 20px;
    margin-bottom: 70px;

    div{
        margin: 10px;
        p{
            font-size:20px;
            font-weight: bold;
        }
        .question {
            color: #13c113;
        }
        .answer {
            color: red;
        }
    }
`
const Buttons = styled.div`
    width:100%;
    max-width:500px;
    position: fixed;
    bottom: 10px;
    left: calc(50vw - 170px);
    button{
        width: 150px;
        height: 60px;
        font-size: 20px;
        border-radius: 10px;
        margin: 10px;
    }
`