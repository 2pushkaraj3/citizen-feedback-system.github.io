
import logo from "../imgs/Gujarat_Police_Logo.png";

import "./Feedbackcitizen.css";

import React, { useState } from "react";
// import axios from "axios"
import { useNavigate } from "react-router-dom"; 
import { useSearchParams } from "react-router-dom";

const Feedbackcitizen = () => {

  const [params] = useSearchParams();
  const navigate = useNavigate();
  const d = new Date();
  const date = d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
  const time = d.getHours()+":"+d.getMinutes();
  // const range = params.get('Range');
  const district = params.get('District');
  const subdivision = params.get('SubDivision');
  const policestation = params.get('PoliceStation');
  const code = params.get('Code');
  const mobile = params.get('mobile');

  React.state = {
    Ques1: [
      { a1: "Through a person known to a police officer"},
      { a2: "With a neighbour or local leader"},
      { a3: "On your own"}
    ],
    Ques2: [
      {a1: "After 15 Minutes"},
      {a2: "15 Minutes"},
      {a3: "10 Minutes"},
      {a4: "5 Minutes"},
      {a5: "Immediataly"}
    ],
    Ques3: [
      {a1: "😭"},
      {a2: "😔"},
      {a3: "😐"},
      {a4: "😊"},
      {a5: "😀"}
    ]
  }

   const [ques1_ans, setans1] = useState("");

  const handleclick1 = (e) => {
    setans1(e.target.value);
    console.log(e.target.value);
 }
 
 const [ques2_ans, setans2] = useState("");
  
 const handleclick2 = (e) => {
    setans2(e.target.value);
    console.log(e.target.value);
 }

 const [ques3_ans, setans3] = useState("");

  const handleclick3 = (e) => {
    setans3(e.target.value);
    console.log(e.target.value);
 }

 const [Comment, setComment] = useState("");

 const handleInput = (e) => {
  setComment(e.target.value);
 }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(date);
    console.log(time);
    // console.log(range);
    console.log(district);
    console.log(subdivision);
    console.log(policestation);
    console.log(code);
    console.log(mobile);
    console.log(ques1_ans);
    console.log(ques2_ans);
    console.log(ques3_ans);
    console.log(Comment);
    try {
      const res = await fetch('/feedback', {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          date, time, district, subdivision, policestation, code, mobile, ques1_ans, ques2_ans, ques3_ans, Comment
        })
      })

      if(res.status === 400  || !res){
        window.alert("Wrong submit attempt");
      }else{
        window.alert("Form submitted Successfully");
        navigate('/infopage');
      }
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div>
      <div className="starttfor">
        <div className="firstka">
          <form className ="feedform" onSubmit={handleSubmit} method="POST">
            <h1 className="heds"><img src={logo} alt="" /></h1>
            <p className="heds">Thanks for giving feedback {params.get('PoliceStation')}<br />પ્રતિસાદ આપવા બદલ આભાર</p>
            <fieldset>
              <div className="question">
                <label htmlFor="name" className="quess">
                  <span>How did you come to the police station?</span>
                </label>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome1" value = {React.state.Ques1[0].a1} checked = {ques1_ans === React.state.Ques1[0].a1} onChange={handleclick1}/>
                  <label htmlFor="howcome1">
                    {/* <!-- <span></span> --> */}
                    <span>{React.state.Ques1[0].a1}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome2" value = {React.state.Ques1[1].a2} checked = {ques1_ans === React.state.Ques1[1].a2} onChange={handleclick1}/>
                  <label htmlFor="howcome2">
                    {/* <!-- <span></span> --> */}
                    <span>{React.state.Ques1[1].a2}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome3" value= {React.state.Ques1[2].a3} checked = {ques1_ans === React.state.Ques1[2].a3} onChange={handleclick1}/>
                  <label htmlFor="howcome3">
                    {/* <!-- <span></span>  --> */}
                    <span>{React.state.Ques1[2].a3}</span>  
                  </label><br />
                </div>
              </div>
              <div className="question">
                <label htmlFor="universityname" className="quess">
                  {/* <!-- <span></span>  --> */}
                  <span>How much time you were heard in Police Station?</span>
                </label>
                <div className="options">
                  <input type="radio" id="optionss1" name="btn-check1" value = {React.state.Ques2[0].a1} checked = {ques2_ans === React.state.Ques2[0].a1}  onChange={handleclick2}/>
                  <label htmlFor="optionss1">
                    <span>{React.state.Ques2[0].a1}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" id="optionss2" name="btn-check1" value={React.state.Ques2[1].a2} checked = {ques2_ans === React.state.Ques2[1].a2}  onChange={handleclick2}/>
                  <label htmlFor="optionss2">
                    <span>{React.state.Ques2[1].a2}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" id="optionss3" name="btn-check1" value={React.state.Ques2[2].a3} checked = {ques2_ans === React.state.Ques2[2].a3}  onChange={handleclick2}/>
                  <label htmlFor="optionss3">
                    <span>{React.state.Ques2[2].a3}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" id="optionss4" name="btn-check1" value={React.state.Ques2[3].a4} checked = {ques2_ans === React.state.Ques2[3].a4}  onChange={handleclick2}/>
                  <label htmlFor="optionss4">
                    <span>{React.state.Ques2[3].a4}</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" id="optionss5" name="btn-check1" value={React.state.Ques2[4].a5} checked = {ques2_ans === React.state.Ques2[4].a5}  onChange={handleclick2}/>
                  <label htmlFor="optionss5">
                    <span>{React.state.Ques2[4].a5}</span>
                  </label><br />
                </div>
              </div>
              <div className="question">
                <label htmlFor="cityname" className="quess">
                  <span>How would you describe your experience with police officer in Police Station?</span>
                  {/* <span>પોલીસ સ્ટેશનમાં પોલીસ અધિકારી સાથેના તમારા અનુભવનું તમે કેવી રીતે વર્ણન કરશો</span> */}
                </label>
                <div className="emoji">
                  <div className="options">
                    <input type="radio" id="optio" name="btn-ch" value={React.state.Ques3[0].a1} checked = {ques3_ans === React.state.Ques3[0].a1} onChange={handleclick3}/>
                    <label htmlFor="optio">
                      <span>{React.state.Ques3[0].a1}</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" id="optio2" name="btn-ch" value={React.state.Ques3[1].a2} checked = {ques3_ans === React.state.Ques3[1].a2} onChange={handleclick3}/>
                    <label htmlFor="optio2">
                      <span>{React.state.Ques3[1].a2}</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" id="optio3" name="btn-ch" value={React.state.Ques3[2].a3} checked = {ques3_ans === React.state.Ques3[2].a3} onChange={handleclick3}/>
                    <label htmlFor="optio3">
                      <span>{React.state.Ques3[2].a3}</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" id="optio4" name="btn-ch" value={React.state.Ques3[3].a4} checked = {ques3_ans === React.state.Ques3[3].a4} onChange={handleclick3}/>
                    <label htmlFor="optio4">
                      <span>{React.state.Ques3[3].a4}</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" id="optio5" name="btn-ch" value={React.state.Ques3[4].a5} checked = {ques3_ans === React.state.Ques3[4].a5} onChange={handleclick3}/>
                    <label htmlFor="optio5">
                      <span>{React.state.Ques3[4].a5}</span>
                    </label><br />
                  </div>
                </div>
              </div>
              
              <label htmlFor="otpnumber">
                <span>Comment Suggestions</span>
                {/* <span>ટિપ્પણી સૂચનો</span> */}
              </label>
               <textarea type="text" name="Comment" value={Comment.Comment} onChange={handleInput} placeholder="Any Comments/Suggestions" maxLength="300"/>
            </fieldset>
            {/* <Link to="/second/feedback/infopage" style={{ textDecoration: "none" }}> */}
              <button className="forfeedbut" type="submit">Submit<br />સબમિટ કરો</button>
            {/* </Link> */}
          </form> </div>
      </div>
    </div>
  )
}

export default Feedbackcitizen
