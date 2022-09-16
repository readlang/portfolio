import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Nav = styled.div`
    width: 200px;
`
const Title = styled.h3`
    
`

function SideBar() {
    let activeStyle = {
        textDecoration: "green wavy underline",
        fontWeight: "900",
    };

    return(
        <Nav>
            <NavLink to="/dev" style={({ isActive }) => isActive ? activeStyle : undefined } >Web Development</NavLink> <br/>
            <Link to="/dev" >Lightship</Link>
            <p>Neighborhood Exchange</p>
            <br/>
            <Title><NavLink to="/design" style={({ isActive }) => isActive ? activeStyle : undefined } >Architecture</NavLink></Title>
            <p>Project A</p>
            <p>Project B</p>
            <p>Project C</p>
            <br/>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined } >About</NavLink>
            <p>Background</p>
            <p>Experience</p>
            <br/>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined } >Contact</NavLink>
            <p>Say Hello</p>
        </Nav>
    )
}

export default SideBar;