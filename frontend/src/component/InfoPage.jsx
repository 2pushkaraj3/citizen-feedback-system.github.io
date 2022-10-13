
import React from 'react';
import logo2 from "../imgs/Gujarat_Police_Logo.png";
import "./infoPage.css";

const infoPage = () => {
  return (
    <div>
        <div className='startt'>
            <div className='first'>
                <form>
                    <h1><img src={logo2} alt=""/></h1>
                    <p>Thanks for giving feedback</p>
                    <p>Dial<span> 112</span> for any emergency<br/></p>
                    <p>Dial<span > 0261-2461200</span> for police control room<br/></p>
                    <p><span className='highlighter'>Citizen First Gujarat Police</span> <u>App for Citizen Service app by Gujarat Police</u></p>
                    <p>પ્રતિસાદ આપવા બદલ આભાર</p>
                    <p>કોઈપણ ઈમરજન્સી માટે <span> 112</span> ડાયલ કરો<br/></p>
                    <p>પોલીસ કંટ્રોલ રૂમ માટે<span> 0261-2461200</span> ડાયલ કરો<br/></p>
                    <p>ગુજરાત પોલીસ દ્વારા નાગરિક સેવા એપ્લિકેશન માટે<span className='highlighter'><u> સિટીઝન ફર્સ્ટ ગુજરાત પોલીસ એપ ડાઉનલોડ કરો</u></span> </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default infoPage