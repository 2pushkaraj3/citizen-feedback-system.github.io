import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Feedbackcitizen from './component/Feedbackcitizen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from './component/InfoPage';
import Otp from './component/Otp';


//import Feedbackcitizen from './Feedbackcitizen';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//  ReactDOM.render(
//    <React.StrictMode>
//      <App />
//      <Home />
//    </React.StrictMode>,
//    document.getElementById('root')
// );


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/feedbackcitizen" element = {<Feedbackcitizen />} />
        <Route path="/Otp" element = {<Otp />} />
        <Route path="/infopage" element = {<InfoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);