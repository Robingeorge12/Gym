import React from 'react'
import "./Landingpage.css"
function LandingPage() {
  return (
    <div className='cont'>
      <hr className="new1" />
      {/* <hr className="new2" /> */}
      <div className='pic-box'>
        <div className='pic1'>
          <img className='mg1' src="https://t4.ftcdn.net/jpg/01/25/35/11/240_F_125351139_RMN4kSHDxkjWcPNH2v5NuHHxXWquB6ES.jpg" alt="" />
        </div>
        <div className='pic2'>
          {/* <p>bURN</p> */}
          <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </div>
      </div>
      <div className='description-box'>
       <div className='text-content'><p>EMPOWER YOURSELF TO MAKE THE CHANGES YOU NEED TO MAKE</p></div> 
       <div className='text-motivatation'><p>IT'S ALL ABOUT YOU CAN ACHIEVE</p></div>
      <button className='reg-button'>LET'S GET STARTED</button>
      </div>


    </div>
  )
}

export default LandingPage