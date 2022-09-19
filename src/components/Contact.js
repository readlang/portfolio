import styled from "styled-components";
import {Title} from "../styled"

const Input = styled.input`
    display: block;
    margin: 5px 0 20px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid hsl(0, 0%, 60%);
`

const TextArea = styled.textarea`
    display: block;
    margin: 5px 0 20px;
    width: 350px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid hsl(0, 0%, 60%);
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
            <br/><br/><br/>

            <Title>Say Hello</Title>
            <br/>
            <form>
                <label>Name:</label>
                <Input type="text" placeholder=" your name..."/>

                <label>Email:</label>
                <Input type="text" placeholder=" your email..."/>

                <label>Message:</label>
                <TextArea placeholder=" your message..."/>

                <Button type="submit" >send</Button>
            </form>
            
        </div>
    )
}

export default Contact;