import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Finalinfo from './Finalinfo';
import {useDispatch} from 'react-redux';
import {addEmail,
        addPassword,
        addFname,
        addLname,
        addDay,
        addMonth,
        addYear} from '../action/index';

function Form() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: ""
  });
  const [err,setErr]= useState({
    status:false,
    msg:''
  });
  const FormTitles = ["Sign Up", "Personal Info", "Date of Birth","Review"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} err={err}/>;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} err={err}/>;
    } else if(page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} err={err}/>;
    } else{
      return <Finalinfo />
    }
  };
  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  }; 

  const handlePage0 =()=>{
    if(formData.email.length===0 || formData.password.length===0 || formData.confirmPassword.length===0){
      setErr({
        status:true,
        msg:"* All fields are need to fill"
      })
      return false;
    }else if(formData.confirmPassword !== formData.password){
      setErr({
        status:true,
        msg:"* password not match"
      })
      return false;
    }

    dispatch(addEmail({
      email:formData.email
    }));
    dispatch(addPassword({
      password:formData.password
    }));
    
    return true;
  }
  const handlePage1 =()=>{
    const pattern=/^[a-z ,.'-]+$/i;
    if(pattern.test(formData.firstName)===false || pattern.test(formData.lastName)===false){
      setErr({
        status:true,
        msg:"* Enter valid first or last name!"
      })
      return false;
    }
    console.log(formData.firstName);
    dispatch(addFname({
      fname:formData.firstName
    }));
    dispatch(addLname({
      lname:formData.lastName
    }));
    return true;
    
  }
  const handlePage2 =()=>{
    let curr_date=new Date(`${formData.year}/${formData.month}/${formData.day}`);
    if(formData.day.length===0 || formData.month.length===0 || formData.year.length===0){
      setErr({
        status:true,
        msg:"* All fields are need to fill"
      })
      return false;
    }else if(curr_date.isValid() === false){
      setErr({
        status:true,
        msg:"* Invalid date format!"
      })
      return false;
    }
    
    dispatch(addDay({
      day:formData.day
    }));
    dispatch(addMonth({
      month:formData.month
    }));
    dispatch(addYear({
      year:formData.year
    }));
    
    return true;
    
  }
  

  const handleNext = ()=> {
    switch (page) {
      case 0:
        if(!handlePage0())  return;
        break;
      case 1:
        if(!handlePage1())  return;
        break;
      case 2:
        if(!handlePage2())  return;
        break;
      
      default:
        break;
    }
    setErr({
      status:false,
      msg:""
    })
    setPage((currPage) => currPage + 1);

    
  }
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {page !== 0 &&
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          }
          {page !== FormTitles.length - 1 ?

          <button
            onClick={handleNext}
          >
            Next
          </button>
          :
          <button onClick={()=>{
            alert("Submited");
          }}>
            Submit
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Form;
