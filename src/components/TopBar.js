import styled from "styled-components";

const TitleBar = styled.div`
    height: 50px;
    max-width: 1200px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    font-size: 30px;
    font-weight: 700;
`
const Button = styled.button`
    height: 35px;
    width: 35px;
    margin: 0 2px;
    font-size: 20px;
    color: hsl(0, 0%, 50%);
    border-radius: 4px;
    border: 2px solid hsl(0, 0%, 50%);
    background-color: hsl(0, 0%, 95%);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`

function TopBar() {
    return(
        <TitleBar>
            Read Langworthy
            <Button>☰</Button>
        </TitleBar>
    )
}

export default TopBar;