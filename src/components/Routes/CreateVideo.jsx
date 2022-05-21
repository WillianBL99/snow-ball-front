import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
export default function CreateVideo() {
  const [body,setBody]=useState({title:'',type:'',link:'',email:''})
  function criarVideo(evt){
    evt.preventDefault()
    const promessa=axios.post('http://localhost:5000/videos',body)
    promessa.then(()=>console.log('criado com sucesso'))
    promessa.catch((e)=>console.log('erro ao criar video'))
  }
  
  return(
    
    <ContainerCreateVideo>
      <span className='topo'>

      <BotoesTopo>
          <ion-icon name="arrow-back"></ion-icon>
          <p>Voltar</p>
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
      <Total>
        <div className='formulario'>
          <form onSubmit={criarVideo}>
            <div>
            <label>Título</label>
            <input value={body.title} onChange={e=>setBody({...body,title:e.target.value})} ></input>
            </div>
            <div>
            <label>Matéria</label>
            <input value={body.type} onChange={e=>setBody({...body,type:e.target.value})} ></input>
            </div>
            <div>
            <label>Link</label>
            <input value={body.link} onChange={e=>setBody({...body,link:e.target.value})} placeholder='cole o link do seu vídeo do youtube' ></input>
            </div>
            <div>
            <label>e-Mail</label>
            <input value={body.email} onChange={e=>setBody({...body,email:e.target.value})} ></input>
            </div>
            <button type='submit'>Salvar</button>
            </form>
        </div>
      </Total>

    </ContainerCreateVideo>
  );
}
const Total=styled.div`
width:100%;height:80vh;background-color:#16aa8f;
display:flex;justify-content:center;align-items:center;
.formulario{display:flex;flex-direction:column;
  background-color:#137f6b;width:95%;height:95%;
  border-radius:10px;justify-content:space-evenly;align-items:center;
  div{display:flex;flex-direction:column}
}
input{border:0;background-color:#0c6050;width:300px;height:40px;border-radius:5px;
  font-size:18px;color:white;
}
label{font-size:20px;color:white}
form{height:80%;display:flex;align-items:center;flex-direction:column;justify-content:space-evenly}
button{border:0;background-color:#074236;width:150px;height:40px;border-radius:5px;
  font-size:18px;color:white;}
`

const ContainerCreateVideo = styled.section`
width:100%;height:100vh;background-color:green;
span{display:flex;justify-content:space-between;align-items:center}
.topo{height:20vh;width:100%;justify-content:space-between;background-color:#16aa8f;}
`

const BotoesTopo = styled.button`
border:0;background-color:#16aa8f;

display:flex;flex-direction:column;justify-content:center;align-items:center;
width: 25% ;height:100%;
p{font-size:20px;color:white}
ion-icon{color:white;font-size:50px}
`