import React from 'react' ;
import Navbar from './Navbar/Navbar' ;
import LandingPage from './LandingPage/LandingPage' ;

class Routing extends React.Component {
  render(){
    return(
        <div>
            <Navbar/>
            <LandingPage/>
        </div>
    )
  }
}
export default Routing ;
