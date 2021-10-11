import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import indefinite from "indefinite";
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
  Certifications,
} from "@components";
import { formatDate, getFullName } from "@helpers";
import styles from "@styles/pdf.module.scss";

// eslint-disable-next-line
export const getStaticProps = async () => {
  const CMS = getCMSIntegration();
  const personalInformation = await CMS.getPersonalInformation();
  const professionalExperiences = await CMS.getProfessionalExperiences();
  const educationalExperiences = await CMS.getEducationalExperiences();
  const skills = await CMS.getSkills();
  const links = await CMS.getLinks();
  const certifications = await CMS.getCertifications();
  return {
    props: {
      educationalExperiences,
      personalInformation,
      professionalExperiences,
      skills,
      links,
      certifications,
    },
    revalidate: 60,
  };
};

const ResumePage = (props) => {
  const {
    educationalExperiences,
    personalInformation,
    professionalExperiences,
    skills,
    links,
    certifications,
  } = props;
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

      <div className={styles.pdfLayout}>
        <div className={styles.pdfSidebar}>
          <Section color="light" pdf>
            <div className="text-center">
              <img
                src={personalInformation.profile_pic.url}
                alt="user-pic"
                className="img-thumbnail rounded-circle"
              />
            </div>
            <div className="mt-xs" />
            <ContactInformation
              personalInformation={personalInformation}
              links={links}
              pdf
            />
            <Skills skills={skills} pdf />
            <div style={{ height: 250 }} />
            <Certifications certifications={certifications} pdf />
          </Section>
        </div>

        <div className={styles.pdfMain}>
          <Section color="primary" pdf>
            <Header
              pdf
              subtitle={personalInformation.job_title}
              title={fullName}
            />
            <AboutMe personalInformation={personalInformation} pdf />
          </Section>
          <Section color="white" pdf>
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
                pdf
                position_description={
                  <CMS.RichTextComponent
                    richText={experience.position_description}
                  />
                }
                position_title={experience.position_title}
                start_date={formatDate(CMS.parseDate(experience.start_date))}
              />
            ))}

            <div className="mt-xs" />

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
                pdf
                year={experience.year}
              />
            ))}

            <div className="mt-xs" />

            <HobbiesAndInterests personalInformation={personalInformation} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
