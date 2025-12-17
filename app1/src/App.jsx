import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Page1 from './Component/Page1'
import Page2 from './Component/Page2'
import Last from './Component/Last'
import Properties from './Component/Properties'


const App = () => {
  return (
    <div>
      <Router>
        <Page1/>
          <Routes>
            <Route path="/" element={<Page2 />}></Route>
            <Route path="/Properties" element={<Properties />}></Route>
          </Routes>
      </Router>
      <Last/>

    
 
    </div>
  )
}

export default App

