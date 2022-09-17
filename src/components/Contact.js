import styled from "styled-components";
import {Title} from "../styled"

const Input = styled.input`
    display: block;
    margin: 0 0 20px;
    height: 30px;
`

const TextArea = styled.textarea`
    display: block;
    margin: 15px 0;
    width: 400px;
    height: 200px;
`

const Button = styled.button`
    height: 30px;
    width: 60px;
`


function Contact() {
    return(
        <div>
            <Title>Contact</Title>
            <p>email: </p>
            <p>linkedin: </p>
            <p>github: </p>
            <br/><br/>
            <Title>Say Hello</Title>
            <br/>
            <form>
                <label>Name:</label>
                <Input type="text" placeholder=" your name..."/>

                <label>Email:</label>
                <Input type="text" placeholder=" your email..."/>

                <label>Message:</label>
                <TextArea placeholder=" your message..."/>

                <Button >send</Button>
            </form>
            
        </div>
    )
}

export default Contact;