import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames";
import styles from "./SectionHeader.module.scss";

export const SectionHeader = (props) => {
  const { icon, text, dark = false } = props;

  return (
    <h3 className={styles.heading}>
      {icon && (
        <span
          className={classNames("fa-layers fa-fw", {
            [styles.headingIconDark]: dark,
            [styles.headingIcon]: !dark,
          })}
        >
          <FontAwesomeIcon icon={faCircle} color="#4679bd" />
          <FontAwesomeIcon color="white" icon={icon} transform="shrink-8" />
        </span>
      )}
      <span
        className={classNames({
          [styles.headingTextDark]: dark,
          [styles.headingText]: !dark,
        })}
      >
        {text}
      </span>
    </h3>
  );
};

export default SectionHeader;
