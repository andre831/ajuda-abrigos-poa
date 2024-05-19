import moment, * as momentTZ from "moment-timezone";

export const getCurrentDate = () => {
  return moment().toISOString();
};
