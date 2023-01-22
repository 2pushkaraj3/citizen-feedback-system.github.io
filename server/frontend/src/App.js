import logo1 from "./imgs/Gujarat_Police_Logo.png";
import React from "react";
import firebase from './firebase'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Feedbackcitizen from "./component/Feedbackcitizen";
import "./App.css"
//import { NavigateBefore } from "@material-ui/icons";
// import { useSearchParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";  


//import {Switch} from "react-router-dom";
class App extends React.Component {



 
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }) 
  };


  //  handleClick = () => {
  //   const [params] = useSearchParams();

  //   let url =
  //   "/second/?" +
  //   "&District=" +
  //   params.get('District') +
  //   "&SubDivision=" +
  //   params.get('SubDivision') +
  //   "&PoliceStation=" +
  //   params.get('PoliceStation') +
  //   "&Code=" +
  //   params.get('Code') +
  //   "&mobile=" +
  //   this.mobile;
  //   console.log(url);




  // }


  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
   
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)

      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")
        alert("OTP sent")


        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent")
        alert("OTP Not sent")
      });
  } 


  onSubmitOTP = (e) => {
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")

    //    const [params] = useSearchParams();
    // //   window.location = '/feedbackcitizen';
    //   
    // const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
const Range = queryParams.get('Range');
const District = queryParams.get('District');
const SubDivision = queryParams.get('SubDivision');
const PoliceStation = queryParams.get('PoliceStation');
const Code = queryParams.get('Code');

console.log(Range,District,SubDivision,PoliceStation,Code);

const url = 
    "http://localhost:3000/feedback/?" +
    "&District=" +
    District+
    "&SubDivision=" +
    SubDivision+
    "&PoliceStation=" +
    PoliceStation+
    "&Code=" +
    Code+
    "&mobile=" +
    this.mobile;
  console.log(url);
  window.location=url;
  
  // navigate(this.url)
  
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...

      alert(error);
      console.log(error);
    });
  }
  


  render() {
    return (


      <div className="sec">
        
        <div className="first">
          <div className="third">

            <form className="formkacss" onSubmit={this.onSignInSubmit.bind(this)}>
              <h3><img src={logo1} alt="" /></h3>
            <h2 className="welcomecss">Welcome To Our Portal</h2>
              <div id="sign-in-button"></div>
              <div className="body_colo"></div>

              <p className="thankscss">Thanks for giving feedback<br />પ્રતિસાદ આપવા બદલ આભાર</p>
              <fieldset id="dff">
                <label htmlFor="name">Mobile Number<br />મોબાઇલ નંબર:</label>

                <input className="inputformain" type="number" name="mobile"  required onChange={this.handleChange} />
                <button className="forotpbut"  type="submit" >Submit</button>
              </fieldset>
            </form>


            <form className="formkacss"  onSubmit={this.onSubmitOTP}>
              <div className="forflex">
            <label className="enterotp">Enter OTP :</label>
            {/* <label >OTP Sent to/ओटीपी भेजा गया <span id="mobile"></span><br/> </label> */}
              <input className="inputformain" type="text" name="otp"  required onChange={this.handleChange} />
              <button className="forotpbut" type="submit">Submit OTP</button></div>
            </form>
          </div>ß
        </div>
      </div>



    )

  }
}
export default App
