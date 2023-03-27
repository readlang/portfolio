import {Title} from "../styled"

function WebDev() {
    return(
        <div>
            <Title> Web Development </Title>
            <p>
                I recently completed the Flatiron School software engineering bootcamp, where we focused on full-stack web development using React and Ruby on Rails.  Here are a few projects I created.
            </p> <br/>

            <Title> Focus Interval </Title>
            <p>
                Focus Interval is like a task manament app and pomodoro timer mixed together.  It's built with React and Rails and made to look great on mobile or desktop. <br/>
                Tools: Javascript, React, React Router, Styled Components, Ruby on Rails, PostgreSQL, Fly.io & Netlify, Figma
            </p>            
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/focus-interval" target="_blank" rel="noreferrer"> github repo </a> - has video and images of project <br/>
            <a style={{"textDecoration": "underline"}} href="https://focus-interval.netlify.app" target="_blank" rel="noreferrer"> deployed site </a>  
            <br/><br/><br/>

            <Title> EV Specs </Title>
            <p>
                Early in progress... <br/>
                EV Specs is a tool to make specifications of EVs (Electric Vehicles) easily searchable, sortable, and filterable. Really its a chance to learn Next.js, Typescript, and practice working with messy API data. <br/>
                Tools: Javascript, Typescript, React, Next.js, APIs
            </p>            
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/evspecs" target="_blank" rel="noreferrer"> github repo </a> <br/>
            <a style={{"textDecoration": "underline"}} href="https://evspecs.vercel.app/specs" target="_blank" rel="noreferrer"> deployed site </a>  
            <br/><br/><br/>

            <Title> Lightship </Title>
            <p>
                Lightship is a goal tracking and social accountability tool.  Users can set and track goals, and form groups with friends organized around similar goals.  As users track their goals, the progress is shared with the group to keep everyone on target and accountable.  Positive social feedback encourages everyone to stay the course. <br/>
                Tools: Javascript, React, Redux, React Router, Bootstrap, Styled Components, Ruby on Rails
            </p>            
            <a style={{"textDecoration": "underline"}} href="https://github.com/readlang/lightship" target="_blank" rel="noreferrer"> github repo </a> <br/>
            <a style={{"textDecoration": "underline"}} href="https://readlang.github.io/lightship-project-video/" target="_blank" rel="noreferrer"> video walkthru </a> <br/>
            <a style={{"textDecoration": "underline"}} href="https://lightship.herokuapp.com/" target="_blank" rel="noreferrer"> deployed site </a>  <br/>
            Note: the site is slow to launch on cold-start <br/> due to being hosted on Heroku free-tier.
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