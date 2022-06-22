import React from "react";

function OtherInfo({ formData, setFormData,err }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Day's"
        value={formData.day}
        onChange={(e) => {
          setFormData({ ...formData, day: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Month's"
        value={formData.month}
        onChange={(e) => {
          setFormData({ ...formData, month: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Year's"
        value={formData.year}
        onChange={(e) => {
          setFormData({ ...formData, year: e.target.value });
        }}
      />
      {err.status && 
      <label>{err.msg}</label>
      }
    </div>
  );
}

export default OtherInfo;
