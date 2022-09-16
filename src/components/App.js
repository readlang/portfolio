import {Routes, Route} from "react-router-dom" 
import TopBar from './TopBar'
import SideBar from './SideBar'
import WebDev from './WebDev'
import Design from './Design'
import About from './About'
import Contact from './Contact'
import { Canvas, Container, ContentArea } from "../styled"

function App() {
  return (
    <Canvas>
      <TopBar />
      <Container>
        <SideBar />
        <ContentArea>
          <Routes>
            <Route path="/" element={ <WebDev /> } />
            <Route path="/dev" element={ <WebDev /> } />
            <Route path="/design" element={ <Design /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </ContentArea>
      </Container>
    </Canvas>
  );
}

export default App;