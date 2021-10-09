import {
  prismicCMSLink,
  prismicCMSName,
  prismicGetEducationalExperiences,
  prismicGetLinks,
  prismicGetPersonalInformation,
  prismicGetPrivateInformation,
  prismicGetProfessionalExperiences,
  prismicGetSkills,
  prismicParseDate,
  PrismicRichTextComponent,
} from "./prismic";

export const apiEndpoint = process.env.CMS_ENDPOINT;
export const accessToken = process.env.CMS_KEY;

export const getCMSIntegration = () => {
  return {
    RichTextComponent: PrismicRichTextComponent,
    getEducationalExperiences: prismicGetEducationalExperiences,
    getLinks: prismicGetLinks,
    getPersonalInformation: prismicGetPersonalInformation,
    getPrivateInformation: prismicGetPrivateInformation,
    getProfessionalExperiences: prismicGetProfessionalExperiences,
    getSkills: prismicGetSkills,
    link: prismicCMSLink,
    name: prismicCMSName,
    parseDate: prismicParseDate,
  };
};
