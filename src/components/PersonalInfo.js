import React from "react";

function PersonalInfo({ formData, setFormData,err}) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        />
        {err.status && 
          <label>{err.msg}</label>
        }
    </div>
  );
}

export default PersonalInfo;
