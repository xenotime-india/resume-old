import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames";
import styles from "./ProfessionalItem.module.scss";

export const ProfessionalItem = (props) => {
  const {
    end_date,
    is_current,
    organization_name,
    pdf = false,
    position_description,
    position_title,
    start_date,
  } = props;

  return (
    <article
      className={classNames(
        "professional-item",
        pdf ? "mt-xxs" : "mt-xs",
        styles.professionalItem,
      )}
    >
      <h5 className={styles.designation}>
        <span>{position_title}</span>
      </h5>
      <h6 className={styles.organization}>
        <span>{organization_name}</span>
      </h6>
      <div>
        <FontAwesomeIcon className="me-xxxs" icon={faCalendar} />
        {start_date}–{is_current ? "Current" : end_date}
      </div>
      <div className={pdf ? "mt-xxxs" : "mt-xxs"}>{position_description}</div>
    </article>
  );
};

export default ProfessionalItem;
