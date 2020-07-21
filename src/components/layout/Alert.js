import React from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = React.useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.text}
      </div>
    )
  );
};

export default Alert;
