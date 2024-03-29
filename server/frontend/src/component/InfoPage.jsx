
import React from 'react';
import logo2 from "../imgs/Gujarat_Police_Logo.png";
import "./infoPage.css";

const infoPage = () => {
  return (
    <div>
        <div className='starttty'>
            <div className='first'>
                <form className='infoform'>
                    <h1 className='bhu'><img src={logo2} alt=""/></h1>
                    <p className='mji'>Thanks for giving feedback</p>
                    <div className="tocenter">
                    <p>Dial<span className="nbvc"> 112</span> for any emergency<br/></p>
                    <p>Dial<span  className="nbvc"> 0261-2461200</span> for police control room<br/></p>
                    <p><span className='highlighter'>Citizen First Gujarat Police</span> <u>App for Citizen Service app by Gujarat Police</u></p>
                    <p>પ્રતિસાદ આપવા બદલ આભાર</p>
                    <p>કોઈપણ ઈમરજન્સી માટે <span className="nbvc"> 112</span> ડાયલ કરો<br/></p>
                    <p>પોલીસ કંટ્રોલ રૂમ માટે<span className="nbvc"> 0261-2461200</span> ડાયલ કરો<br/></p>
                    <p>ગુજરાત પોલીસ દ્વારા નાગરિક સેવા એપ્લિકેશન માટે<span className='highlighter'><u> સિટીઝન ફર્સ્ટ ગુજરાત પોલીસ એપ ડાઉનલોડ કરો</u></span> </p></div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default infoPage