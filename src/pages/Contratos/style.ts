import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    position: relative;
    right: 28rem;
    display: flex;
    flex-direction: column;
    width: 60vw;
    padding: 10px;
    background-color: #61728C;

    .infos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #55AAE1;
        padding: 15px;

        p {
            color: white;
            font-weight: bold;
            background-color: #475161;
            padding: 10px;
        }

        div {
            display: flex;
            justify-content: space-between;
            background-color: #D9D9D9;
            width: 30%;

            input {
                border: none;
                padding: 7px;
                width: 100%;
                background-color: #D9D9D9;
                outline: none;
            }

            button {
                background-color: #D9D9D9;
                border: none;
                cursor: pointer;

                svg {
                    margin: auto 1rem;
                }
            }
        }
    }

    .contratos {
        section {
            background-color: #D9D9D9;
            padding: 10px;
            margin: 1rem 0;

            hgroup {
                display: flex;
                justify-content: space-between;

                h3 + h3 {
                    margin-right: 3rem;
                }
            }
        }
    }
`;

export { Container }