import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { getCMSIntegration } from "@cms";
import { SectionHeader } from "@components/sectionHeader";

export const ContactInformation = (props) => {
  const { personalInformation, privateInformation, pdf = false } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      {!pdf && <SectionHeader icon={faIdCard} text="Contact Information" />}
      <ul className="list-unstyled">
        <li>
          <div className="row mt-md-0 mt-xxxs">
            <div className="col-lg-3 col-sm-3">
              <strong>Location:</strong>
            </div>
            <div className="col">{personalInformation.location}</div>
          </div>
        </li>
        <li>
          <div className="row mt-md-0 mt-xxxs">
            <div className="col-lg-3 col-sm-3">
              <strong>Mobile No:</strong>
            </div>
            <div className="col">{personalInformation.phone_no}</div>
          </div>
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.label}>
              <div className="row mt-md-0 mt-xxxs no-paragraph-margins">
                <div className="col-lg-2 col-sm-3">
                  <strong>{privateField.label}:</strong>
                </div>
                <div className="col">
                  <CMS.RichTextComponent richText={privateField.content} />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default ContactInformation;
