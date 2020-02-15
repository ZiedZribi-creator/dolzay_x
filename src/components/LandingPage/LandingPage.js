import React from 'react' ;
import ecomfront from '../../imgs/ecom-front.png'
import './landingpage-css.scss' ;
import WhyEcom from './WhyEcom/WhyEcom' ;
class LandingPage extends React.Component {
  render(){
    return(
        <div class='landing-page-container'>
           <div class='front-section'>
              <div class='front-section-image'>
                <img src={ecomfront} />
              </div>
              <div class='front-section-text' dir='rtl'>
                  <h1 ><span>#</span>7ata<span>_</span>Enty</h1>
                  <h2>التحق بسوق التجارة الالكترونية العملاق بتونس واجعل مشروعك التجاري ينمو في العالم الافتراضي عن طريق متجر الكتروني </h2>
                  <button>اعرف المزيد</button>
              </div>
           </div>
           <div class='why-ecom-title'><h1><span>#</span>3lech<span>_</span>Ecommerce</h1></div>
            <WhyEcom/>

        </div>
    )
  }
}
export default LandingPage ;
