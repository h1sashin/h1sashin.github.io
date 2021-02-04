import styled from 'styled-components';


const MessageStyled = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    div {
        div {
            color: white;
        }
        h2, h3, h4 {
            margin: 0;
        }
        h2 {
            font-size: 18px;
            margin-bottom: 4px;
        }
        h3 {
            font-size: 14px;
            opacity: 0.7;
            margin-bottom: 2px;
        }
        h4 {
            font-size: 10px;
            opacity: 0.7;
        }
    }
`;

export { MessageStyled };