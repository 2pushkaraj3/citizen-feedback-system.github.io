import "./feedbackcitizen.scss";
import logo from "./../../Gujarat_Police_Logo.png";
import { Link } from "react-router-dom";

const Feedbackcitizen = () => {
  return (
    <div>
      <div className="startt">
        <div className="first">
          <form>
            <h1><img src={logo} alt="" /></h1>
            <p>Thanks for giving feedback<br />પ્રતિસાદ આપવા બદલ આભાર</p>
            <fieldset>
              <div className="question">
                <label htmlFor="name" className="quess">
                  <span>How did you come to the police station?</span>
                </label>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome1" />
                  <label htmlFor="howcome1">
                    {/* <!-- <span></span> --> */}
                    <span>Through a person known to a police officer</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome2" />
                  <label htmlFor="howcome2">
                    {/* <!-- <span></span> --> */}
                    <span>With a neighbour or local leader</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" name="btn-check" id="howcome3" />
                  <label htmlFor="howcome3">
                    {/* <!-- <span></span>  --> */}
                    <span>On your own</span>
                  </label><br />
                </div>
              </div>
              <div className="question">
                <label htmlFor="universityname" className="quess">
                  {/* <!-- <span></span>  --> */}
                  <span>How much time you were heard in Police Station?</span>
                </label>
                <div className="options">
                  <input type="radio" value="1" id="optionss1" name="btn-check" />
                  <label htmlFor="optionss1">
                    <span>After 15 Minutes</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" value="2" id="optionss2" name="btn-check" />
                  <label htmlFor="optionss2">
                    <span>15 Minutes</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" value="3" id="optionss3" name="btn-check" />
                  <label htmlFor="optionss3">
                    <span>10 Minutes</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" value="4" id="optionss4" name="btn-check" />
                  <label htmlFor="optionss4">
                    <span>5 Minutes</span>
                  </label><br />
                </div>
                <div className="options">
                  <input type="radio" value="5" id="optionss5" name="btn-check" />
                  <label htmlFor="optionss5">
                    <span>Immediataly</span>
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
                    <input type="radio" value="5" id="optio" name="btn-ch" />
                    <label htmlFor="optio">
                      <span>😭</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" value="5" id="optio2" name="btn-ch" />
                    <label htmlFor="optio2">
                      <span>😔</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" value="5" id="optio3" name="btn-ch" />
                    <label htmlFor="optio3">
                      <span>😐</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" value="5" id="optio4" name="btn-ch" />
                    <label htmlFor="optio4">
                      <span>😊</span>
                    </label><br />
                  </div>
                  <div className="options">
                    <input type="radio" value="5" id="optio5" name="btn-ch" />
                    <label htmlFor="optio5">
                      <span>😀</span>
                    </label><br />
                  </div>
                </div>
              </div>
              <label htmlFor="otpnumber">
                <span>Comment Suggestions</span>
                {/* <span>ટિપ્પણી સૂચનો</span> */}
              </label>
              <textarea id="commenasdt" name="user_number" placeholder="Any Comments/Suggestions" maxLength="300"></textarea>
            </fieldset>
            <Link to="src/component/feedback" style={{ textDecoration: "none" }}>
              <button>Submit<br />સબમિટ કરો</button>
            </Link>
          </form> </div>
      </div>
    </div>
  )
}

export default Feedbackcitizen