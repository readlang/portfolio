import styled from "styled-components";

let topMargin = window.innerWidth >= 1200 ? "80px" : "10px"

export const Canvas = styled.div`
  max-width: 1200px;
  margin: ${topMargin} auto 0 auto; 
  border: 0px dotted hsl(0, 0%, 70%);
  padding: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ContentArea = styled.div`
  height: ${window.innerHeight - 165}px;
  width: 800px;
  background-color: hsl(0, 0%, 100%);
  overflow-y: auto;
  scrollbar-width: thin;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`