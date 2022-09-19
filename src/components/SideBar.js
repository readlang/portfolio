import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Expander = styled.button`
    width: 50px;
    
    height: 15px;
    border: 0;
    background-color: transparent;
    border: 2px solid hsl(0, 0%, 20%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 0.5;
    color: hsl(0, 0%, 20%);
    cursor: pointer;
`
const NavArea = styled.div`
    width: 200px;
    font-size: 20px;
`
const RegLink = styled(Link)`
    font-size: 16px;
    display: block;
    margin-top: 10px;
`

function SideBar({showNav, setShowNav}) {
    let passiveStyle = {
        fontWeight: "700",
    }
    
    let activeStyle = {
        textDecoration: "underline",
        fontWeight: "900",
        color: "#57edd7",
    };

    if (!showNav) 
    return (
        <>
            <Expander onClick={()=>setShowNav(true) }>
                •••
            </Expander>
            &nbsp; <br/> &nbsp; <br/> 
        </>
    ) 
    else 
    return(
        <NavArea>
            <NavLink to="/dev" style={({ isActive }) => isActive ? activeStyle : passiveStyle } >Web Development</NavLink>
            <RegLink to="/dev" >Lightship</RegLink>
            <RegLink to="/dev" >Neighborhood Exchange</RegLink>
            <br/>
            <NavLink to="/design" style={({ isActive }) => isActive ? activeStyle : passiveStyle } >Architecture</NavLink>
            <RegLink to="/design" >Project A</RegLink>
            <RegLink to="/design" >Project B</RegLink>
            <RegLink to="/design" >Project C</RegLink>
            <br/>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : passiveStyle } >About</NavLink>
            <RegLink to="/about" >Background</RegLink>
            <RegLink to="/about" >Experience</RegLink>
            <RegLink to="/about" >Skills</RegLink>
            <br/>
            <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : passiveStyle } >Contact</NavLink>
            <RegLink to="/contact" >Say Hello</RegLink>
            <br/><br/><br/>
        </NavArea>
    )
}

export default SideBar;