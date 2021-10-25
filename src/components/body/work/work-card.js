import React from "react";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <lable className="company-name">{item.company}</lable>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-disc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
