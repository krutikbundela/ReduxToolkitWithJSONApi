import './App.css'
import {
Routes,
  Route,
} from "react-router-dom";
import Post from './Posts';

function App() {

  return (
    <>
       <Routes>
          <Route exact path="/" Component={Post} />
        </Routes> 
    </>
  )
}

export default App
