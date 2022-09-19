import styled from "styled-components";

const TitleBar = styled.div`
    height: 50px;
    max-width: 1200px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: hsl(0, 0%, 100%);
    font-size: 35px;
    font-weight: 900;
    font-family: 'Source Sans Pro', 'SF Pro Display', 'Futura', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
`
const Button = styled.button`
    height: 35px;
    width: 35px;
    margin: 0 2px;
    font-size: 30px;
    color: hsl(0, 0%, 20%);
    border-radius: 4px;
    border: 0px solid hsl(0, 0%, 50%);
    background-color: hsl(0, 0%, 100%);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.0);
    cursor: pointer;
`

function TopBar({showNav, setShowNav}) {
    return(
        <TitleBar>
            Read Langworthy
            <Button onClick={()=> showNav ? setShowNav(false) : setShowNav(true) } >☰</Button>
        </TitleBar>
    )
}

export default TopBar;