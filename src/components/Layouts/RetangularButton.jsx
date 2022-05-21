import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function RetangularButton({title, to}){
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(to?to:'')} >{title}</Button>
    );
}

export default RetangularButton;

const Button = styled.button`
    width: 100%;
    height: 3rem;

    border-radius: 10px;

    font-size: 1.3rem;

    background-color: var(--color-button);
    color: #fff;
`