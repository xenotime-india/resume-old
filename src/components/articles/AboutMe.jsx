import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { getCMSIntegration } from "@cms";
import { SectionHeader } from "@components/sectionHeader";

export const AboutMe = (props) => {
  const { personalInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faUser} text="About Me" />
      <CMS.RichTextComponent
        richText={personalInformation.about_me_description}
      />
    </article>
  );
};

export default AboutMe;
