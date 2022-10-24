import { useState } from "react";
import styled from "styled-components";
import {Title} from "../styled"

const Input = styled.input`
    display: block;
    margin: 5px 2px 20px;
    height: 30px;
    width: 180px;
    border-radius: 5px;
    border: 1px solid hsl(0, 0%, 60%);
    padding: 0 0 0 5px;
`

const TextArea = styled.textarea`
    display: block;
    margin: 5px 2px 20px;
    width: 350px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid hsl(0, 0%, 60%);
    padding: 5px 0 0 5px;
`

const Button = styled.button`
    height: 30px;
    width: 60px;
`

function Contact() {
    const [showForm, setShowForm] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch("https://formspree.io/f/xnqrdjjb", {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ 
                name: name,
                email: email,
                message: message
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        setShowForm(false)
    }

    return(
        <div>
            <Title>Contact</Title>
            {/* <p>email: </p> */}
            <p>Linkedin: <a style={{"textDecoration": "underline"}} href="https://www.linkedin.com/in/read-langworthy" target="_blank" rel="noreferrer" > 
                linkedin.com/in/read-langworthy </a></p>
            <p>Github: <a style={{"textDecoration": "underline"}} href="https://github.com/readlang" target="_blank" rel="noreferrer" > github.com/readlang </a></p>
            <br/><br/><br/>

            <Title>Say Hello</Title>
            <br/>
            {showForm ? 
                <form onSubmit={handleSubmit} >
                    <label>Name:</label>
                    <Input type="text" name="name" placeholder="your name..."
                    value={name} onChange={e=>setName(e.target.value)}
                    />
                    <label>Email:</label>
                    <Input type="email" name="email" placeholder="your email..."
                    value={email} onChange={e=>setEmail(e.target.value)}
                    />
                    <label>Message:</label>
                    <TextArea name="message" placeholder="your message..."
                    value={message} onChange={e=>setMessage(e.target.value)}
                    />
                    <Button type="submit" >Send</Button>
                </form>
            :
                <p>Thank you for getting in touch!</p>
            }
        </div>
    )
}

export default Contact;