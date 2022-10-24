import styled from "styled-components";
import {Title} from "../styled"
import pic from "../assets/images/profilepic.jpg"

const Image = styled.img`
    max-width: 30%;
    height: auto;
    margin: 5px 0;
    border-radius: 50%;
`
const Caption = styled.p`
    margin: 0 0 10px 0;
`
const Narrower = styled.div`
    max-width: 600px;
`

function Design() {
    return(
        <div>
            <Image src={pic} alt="profile pic" />
            <br/><br/>
            <Title> Hi, I'm Read. </Title> <br/> 
            <Narrower>
                <Caption> I recently completed the Flatiron School software engineering bootcamp and am currently looking for a job as a frontend engineer or UX engineer. </Caption>
                <Caption> I live in Seattle and previously worked in the building industry as an architect and developer. </Caption> <br />
                <Caption> Look around and thanks for stopping by! </Caption>
            </Narrower>
        </div>
    )
}

export default Design;