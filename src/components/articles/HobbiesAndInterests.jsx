import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { getCMSIntegration } from "@cms";
import { SectionHeader } from "@components/sectionHeader";

export const HobbiesAndInterests = (props) => {
  const { personalInformation, pdf = false } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faDiceD20} text="Hobbies & Interests" dark={!pdf} />
      <CMS.RichTextComponent
        richText={personalInformation.hobbies_and_interests}
      />
    </article>
  );
};

export default HobbiesAndInterests;
