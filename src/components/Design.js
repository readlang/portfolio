import styled from "styled-components";
import {Title} from "../styled"
import ran_1 from "../assets/images/ran_1.jpg"
import bas_1 from "../assets/images/bas_1.jpg"
import lam_1 from "../assets/images/lam_2.jpg"
import so_1 from "../assets/images/so_1.jpg"
import we_1 from "../assets/images/we_1.jpg"

const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin: 5px 0;
`
const Caption = styled.p`
    margin: 0 0 20px 0;
`

function Design() {
    return(
        <div>
            <Title> Architecture </Title>
            <p> I previously worked in the building industry as an architect and developer.  
                Here are a few projects I worked on during my time in that industry, at various firms.
            </p><br/>

            <Title> Range </Title>
            <Image src={ran_1} alt="project shot" />
            <Caption> Project^, with Lever Architecture </Caption>
            <br/>

            <Title> Basecamp </Title>
            <Image src={bas_1} alt="project shot" />
            <Caption> Project^, with Hacker Architecture </Caption>
            <br/>

            <Title> La Marina </Title>
            <Image src={lam_1} alt="project shot" />
            <Caption> Andrew Franz Architecture </Caption>
            <br/>

            <Title> Sonoma House </Title>
            <Image src={so_1} alt="project shot" />
            <Caption> Wendy Evans Joseph Architecture </Caption>
            <br/>

            <Title> Webb Chapel Pavillion </Title>
            <Image src={we_1} alt="project shot" />
            <Caption> Wendy Evans Joseph Architecture </Caption>
            <br/>


        </div>
    )
}

export default Design;