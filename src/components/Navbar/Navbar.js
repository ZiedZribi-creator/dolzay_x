import React from 'react' ;
import './navbar-css.css' ;

class Navbar extends React.Component {
  render(){
    return(

           <nav>
                <div class='logo'>Dolzay</div>
                <ul class='navigation'>
                    <li>من نحن</li>
                    <li>عروضنا</li>
                    <li>مدونة</li>
                    <li>اتصل بنا</li>
                </ul>
           </nav>

    )
  }
}
export default Navbar ;
