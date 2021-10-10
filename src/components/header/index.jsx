import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";
import styles from "./Header.module.scss";

export const Header = (props) => {
  const { pdf = false, secret, subtitle, title, profilePic = {} } = props;

  let pdfAPI = "/api/pdf";
  if (secret) {
    pdfAPI += `?secret=${secret}`;
  }

  return (
    <header className={pdf ? styles.headerPdf : styles.header}>
      <div className={pdf ? "" : "container"}>
        <div
          className={classnames("row align-items-center", {
            "text-md-start text-center": !pdf,
          })}
        >
          {!pdf && (
            <div className="col-md-2">
              <img
                src={profilePic.url}
                alt="user-pic"
                className="img-thumbnail rounded-circle"
              />
            </div>
          )}
          <div className="col-md">
            <h1 className={classnames("text-white", styles.userName)}>
              {title}
            </h1>
            <h5 className={classnames("text-white mb-0", styles.subHeading)}>
              {subtitle}
            </h5>
            <div className="half-line" />
          </div>
          {!pdf && (
            <div className="col-md-auto mt-md-0 mt-xxs d-print-none d-block">
              <a
                className="btn btn-dark btn-lg"
                href={pdfAPI}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="me-xxxs" icon={faFilePdf} />
                Download as PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
