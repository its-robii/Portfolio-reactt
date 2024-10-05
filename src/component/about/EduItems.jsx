import React from "react";

const EduItems = ({ date, children, styles }) => {
  return (
    <div className={`${styles ? styles : ""}`}>
      <h3 className="text-sm font-primary text-primary font-medium">{date}</h3>
      <p className="text-base font-primary text-secondery font-normal">
        {children}
      </p>
    </div>
  );
};

export default EduItems;
