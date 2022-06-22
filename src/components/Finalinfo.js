import React from "react";
import store from '../store/store.js';

function Finalinfo() {
  const {email,fname,lname,day,month,year}=store.getState().shopList;
  const months=["","JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
  return (
    <div className="final-info-container">
      <div className="final__section1">
        <label>First Name </label>
        <p>{fname}</p>
      </div>
      <div className="final__section1">
        <label>Last Name </label>
        <p>{lname}</p>
      </div>
      <div className="final__section1">
        <label>Email </label>
        <p>{email}</p>
      </div>
      <div className="final__section1">
        <label>Date of Birth</label>
        <p>{`${day}th ${months[parseInt(month)]} ${year}`}</p>
      </div>
      
      
    </div>
  );
}

export default Finalinfo;
