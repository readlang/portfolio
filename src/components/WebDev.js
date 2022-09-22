import {Title} from "../styled"

function WebDev() {
    return(
        <div>
            <Title> Web Development </Title>
            <p>
                I recently completed the Flatiron School software engineering bootcamp, where we focused on full-stack web development using React and Ruby on Rails.  Here are a few projects I created.
            </p>
            <br/>

            <Title> Lightship </Title>
            <p>
                Lightship is a goal tracking and social accountability tool.  Users can set and track goals, and form groups with friends organized around similar goals.  As users track their goals, the progress is shared with the group to keep everyone on target and accountable.  Positive social feedback encourages everyone to stay the course. <br/>
                Tools: Javascript, React, Redux, React Router, Bootstrap, Styled Components, Ruby on Rails
            </p>            
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/lightship" target="_blank" rel="noreferrer"> github repo </a>
            <br/><br/><br/>

            <Title> Neighborhood Exchange </Title>
            <p>
                Neighborhood Exchange is a tool to create a shared-goods economy for a community.  Users can post tools they are willing to share, and then their neighbors can view and check out the tools to use, helping to encourage community and avoid wastefulness. <br/>
                Tools: Javascript, React, React Router, Bootstrap, Ruby on Rails
            </p>
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/neighborhood-exchange" target="_blank" rel="noreferrer"> github repo </a>
            <br/><br/><br/>

            <Title> Personal Website </Title>
            <p>
                This website that you are viewing now was created with React, React Router, and Styled Components. 
                No pre-styled design libraries or themes were used. <br/>
                Tools: Javascript, React, React Router, Styled Components
            </p>
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/portfolio" target="_blank" rel="noreferrer"> github repo </a>
            <br/><br/><br/>

        </div>
    )
}

export default WebDev;