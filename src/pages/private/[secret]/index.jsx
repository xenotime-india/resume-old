import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import indefinite from "indefinite";
import { useRouter } from "next/router";
import React from "react";
import { getCMSIntegration } from "@cms";
import {
  AboutMe,
  ContactInformation,
  HobbiesAndInterests,
  EducationItem,
  Header,
  PageHead,
  ProfessionalItem,
  Section,
  SectionHeader,
  Skills,
  Footer,
} from "@components";
import { formatDate, getFullName } from "@helpers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async (ctx) => {
  const {
    params: { secret },
    res,
  } = ctx;
  const privateKey = process.env.PRIVATE_KEY;
  if (secret !== privateKey) {
    res.writeHead(401);
    res.end("Not authorized");
    return { props: {} };
  }

  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const privateInformation = await CMS.getPrivateInformation();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();
  const links = await CMS.getLinks();

  return {
    props: {
      educationalExperiences,
      links,
      personalInformation,
      privateInformation,
      professionalExperiences,
      skills,
    },
  };
};

const ResumePage = (props) => {
  const {
    educationalExperiences,
    links,
    personalInformation,
    privateInformation,
    professionalExperiences,
    skills,
  } = props;
  const { query } = useRouter();
  const secret = query.secret;
  const fullName = getFullName(personalInformation);
  const jobTitle = indefinite(personalInformation.job_title);
  const CMS = getCMSIntegration();

  return (
    <>
      <PageHead
        description={`Professional résumé for ${fullName}, ${jobTitle} living in ${personalInformation.location}.`}
        personalInformation={personalInformation}
        title={`Résumé | ${fullName} | ${personalInformation.location}`}
      />

      <Header
        secret={secret}
        subtitle={personalInformation.job_title}
        title={fullName}
      />

      <Section color="white">
        <div className="row">
          <div className="col-md">
            <AboutMe personalInformation={personalInformation} />
          </div>
          <div className="col-md mt-md-0 mt-xs">
            <ContactInformation
              personalInformation={personalInformation}
              privateInformation={privateInformation}
            />
          </div>
        </div>

        <Skills skills={skills} />
      </Section>

      <Section color="light">
        <SectionHeader icon={faBriefcase} text="Professional Experience" />
        {professionalExperiences.map((experience) => (
          <ProfessionalItem
            end_date={
              experience.end_date
                ? formatDate(CMS.parseDate(experience.end_date))
                : null
            }
            id={experience.id}
            is_current={experience.is_current}
            key={experience.id}
            organization_name={experience.organization_name}
            position_description={
              <CMS.RichTextComponent
                richText={experience.position_description}
              />
            }
            position_title={experience.position_title}
            start_date={formatDate(CMS.parseDate(experience.start_date))}
          />
        ))}
      </Section>

      <Section color="white">
        <SectionHeader icon={faGraduationCap} text="Education" />
        {educationalExperiences.map((experience) => (
          <EducationItem
            achievement_description={
              <CMS.RichTextComponent
                richText={experience.achievement_description}
              />
            }
            achievement_title={experience.achievement_title}
            id={experience.id}
            key={experience.id}
            organization_name={experience.organization_name}
            year={experience.year}
          />
        ))}
      </Section>

      <Section color="light">
        <HobbiesAndInterests personalInformation={personalInformation} />
      </Section>

      <Footer personalInformation={personalInformation} links={links} />
    </>
  );
};

export default ResumePage;
