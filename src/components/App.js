import {Routes, Route} from "react-router-dom" 

import WebDev from './WebDev'
import Design from './Design'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <WebDev /> } />
      <Route path="/webdevelopment" element={ <WebDev /> } />
      <Route path="/design" element={ <Design /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;