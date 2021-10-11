import prismic from "prismic-javascript";
import { Date as parsePrismicDate, RichText } from "prismic-reactjs";
import React from "react";
import { accessToken, apiEndpoint } from ".";
export const prismicCMSName = "Prismic";
export const prismicCMSLink = "https://prismic.io/";
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return Object.assign(Object.assign({}, reqOption), accessTokenOption);
};
const cmsClient = (req = null) => {
  return prismic.client(apiEndpoint, createClientOptions(req, accessToken));
};
export const prismicGetPersonalInformation = async () => {
  const document = await cmsClient().getSingle("personal_information", {});
  return Object.assign({ id: document.id }, document.data);
};
export const prismicGetPrivateInformation = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "private_information"),
    {
      orderings: "[my.private_information.label]",
    },
  );
  const experiences = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return experiences;
};
export const prismicGetProfessionalExperiences = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "professional_experience"),
    {
      orderings:
        "[my.professional_experience.is_current desc, my.professional_experience.end_date desc]",
    },
  );
  const experiences = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return experiences;
};
export const prismicGetEducationalExperiences = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "educational_experience"),
    {
      orderings:
        "[my.educational_experience.year desc, my.educational_experiencce.achievement_title]",
    },
  );
  const experiences = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return experiences;
};
export const prismicGetSkills = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "skills"),
    {
      orderings: "[my.skills.level desc]",
    },
  );
  const skills = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return skills;
};

export const prismicGetCertifications = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "certification"),
    {
      orderings: "[my.certification.sequence]",
    },
  );
  const certifications = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return certifications;
};

export const prismicGetLinks = async () => {
  const document = await cmsClient().query(
    prismic.Predicates.at("document.type", "link"),
    {
      orderings: "[my.link.title]",
    },
  );
  const links = document.results.map((document) =>
    Object.assign({ id: document.id }, document.data),
  );
  return links;
};
export const PrismicRichTextComponent = ({ richText }) => {
  return <RichText render={richText} />;
};
export const prismicParseDate = (date) => {
  return parsePrismicDate(date);
};
