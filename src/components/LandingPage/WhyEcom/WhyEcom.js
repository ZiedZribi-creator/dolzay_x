import React from 'react' ;
import './whyecom-css.scss' ;
import ecom_progress from '../../../imgs/ecom_progress.png' ;

class WhyEcom extends React.Component{
  render(){
    return(
      <div class='why-ecom-section'>
          <div class="why-ecom-section-text" dir='rtl'>
               <h1>السوق كبيرة و حصتك مضمونة </h1>
               <h2>السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة السوق كبيرة و حصتك مضمونة </h2>
           </div>
            <div class="why-ecom-section-image">
                  <img src={ecom_progress}/>
            </div>
      </div>
    )
  }
}
export default WhyEcom ;
