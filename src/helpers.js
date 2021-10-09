export const getFullName = (personalInformation) => {
  return `${personalInformation.given_name} ${personalInformation.family_name}`;
};
export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};
