import { faCircle, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SectionHeader = (props) => {
  const { icon, text } = props;

  return (
    <h3>
      <span className="fa-layers fa-fw me-xxxs">
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon color="white" icon={icon} transform="shrink-8" />
      </span>
      {text}
    </h3>
  );
};

export default SectionHeader;
