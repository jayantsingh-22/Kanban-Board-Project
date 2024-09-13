import React from "react";
import "./Card.css";
import Backlog from "../../Assets/Images/Backlog.svg";
import Todo from "../../Assets/Images/To-do.svg";
import inProgressIcon from "../../Assets/Images/in-progress.svg";
import Done from "../../Assets/Images/Done.svg";
import Cancelled from "../../Assets/Images/Cancelled.svg";
import Urgent from "../../Assets/Images/SVG - Urgent Priority colour.svg";
import High from "../../Assets/Images/Img - High Priority.svg";
import Medium from "../../Assets/Images/Img - Medium Priority.svg";
import Low from "../../Assets/Images/Img - Low Priority.svg";
import NoPriority from "../../Assets/Images/No-priority.svg";

export default function Card({ cardDetails, groupValue }) {
  const { id, title, userObj, priority, tag, status } = cardDetails;
  const { name, available } = userObj;

  const renderStatusIcon = (status) => {
    switch (status) {
      case "Backlog":
        return <img src={Backlog} alt="Backlog Icon" className="status-icon" />;
      case "Todo":
        return <img src={Todo} alt="Todo Icon" className="status-icon" />;
      case "In progress":
        return (
          <img
            src={inProgressIcon}
            alt="In Progress Icon"
            className="status-icon"
          />
        );
      case "Done":
        return <img src={Done} alt="Done Icon" className="status-icon" />;
      case "Cancelled":
        return (
          <img src={Cancelled} alt="Cancelled Icon" className="status-icon" />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {name[0]}
              {name[1]}
            </div>
            <div
              className={
                available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>

        <div className="card-title-wrapper">
          {groupValue !== "status" && (
            <div className="card-status-icon">{renderStatusIcon(status)}</div>
          )}
          <div className="card-title">{title}</div>
        </div>

        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-icon">
                  <img src={NoPriority} alt="icon" />
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <img src={Low} alt="icon" />
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <img src={Medium} alt="icon" />
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <img src={High} alt="icon" />
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <img src={Urgent} alt="icon" />
                </div>
              ),
            }[priority]
          }

          {tag.map((tagItem, index) => (
            <div key={index} className="card-tag-box">
              <div className="card-tag-title">{tagItem}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
