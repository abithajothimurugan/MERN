import cat from '../src/assert/image/cat.webp'
import dog from '../src/assert/image/dog.webp'
import Props from "./Props"
import Counter from "./Counter"
import State from './State'

import { useState } from "react";
import ConditionalRendering from "./ConditionalRendering/ConditionalRendering"
import Login from "./ConditionalRendering/Login"
import Homepage from "./ConditionalRendering/Homepage";


const App = () => {

  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const formClose = () => {
    setShow(false);
  }

  const loginForm =()=>{
    setShow(true)
  }

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShow(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <div class="main-card">
        <Props img={cat} title="Cat" descr="The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae." />
        <Props img={dog} title="Dog" descr="The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from a population." />
      </div>
      <Counter />
      <State /> 
      {loggedIn ? (
        <Homepage onLogout={handleLogout} />
      ) : (
        <>
            <ConditionalRendering 
            FormLogin={loginForm}/>

          {show && (
            <Login CloseForm={formClose} onLoginSuccess={handleLoginSuccess} />
          )}
          
        </>
      )}
      

    </>
  )
}

export default App
