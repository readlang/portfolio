import {Title} from "../styled"

function About() {
    return(
        <div>
            <Title> About </Title>
            <p>
                Hi there, I'm Read. <br/><br/>
                You are looking at my personal website which shows a few things I've been learning lately.  I recently completed the Flatiron School software engineering bootcamp, where we learned full-stack web development using technologies such as React, Redux, and Ruby on Rails.  At this point I'm looking for a job as a software engineer.  I live in Seattle and am interested in local-hybrid or WFH remote work.
            </p>
            <br/>

            <Title> Background </Title>
            <p>
                Until last year, I worked in the building design industry as an architect and real estate developer.  I have worked on a variety of project types and sizes, from the early stages of project conception, financing, to design, construction documentation, construction monitoring and administration.  My primary experience is with design, engineering, and construction.  As part of the architecture design and real estate development process, there is always a lot of graphical representation, either through drawings and renderings, or printed and online graphic material.  For me this was usually with the goal of explaining design ideas to clients, but sometimes selling completed architecture to home buyers or apartment renters.
            </p>
            <br/>

            <Title> Experience </Title>
            <p>
                For the moment, please look around this site, and check out my&nbsp;
                <a style={{"textDecoration": "underline"}} href="https://www.linkedin.com/in/read-langworthy" target="_blank" rel="noreferrer" >linkedin</a>&nbsp;and&nbsp;
                <a style={{"textDecoration": "underline"}} href="https://github.com/readlang" target="_blank" rel="noreferrer" >github</a>&nbsp; profiles.  More to come.
            </p>
            <br/>
            
            <Title> Skills </Title>
            <p>
                Javascript with React, Redux, and React Router. Backend with Ruby on Rails or Node & Express. HTML and CSS. Styling with Styled Components, Bootstrap, or other UI libraries such as Mantine. 
                <br/><br/>
                Working in the design industry for a decade has given me a good sense of usability and functionality, aesthetics, color, and visual clarity. Complicated design and engineering requirements have been a frequent presence in my architecture experience and are highly analogous to the process of software engineering.
            </p>
            <br/>
        </div>
    )
}

export default About;