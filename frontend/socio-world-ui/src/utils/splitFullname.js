export const splitFullname = (fullname) => {
  const nameParts = fullname.trim().split(/\s+/);

  let firstName = "";
  let middleName = "";
  let lastName = "";

  if (nameParts.length === 1) {
    firstName = nameParts[0];
  } else if (nameParts.length === 2) {
    firstName = nameParts[0];
    lastName = nameParts[1];
  } else if (nameParts.length >= 3) {
    firstName = nameParts[0];
    lastName = nameParts[nameParts.length - 1];
    middleName = nameParts.slice(1, -1).join(" ");
  }

  return { firstName, middleName, lastName };
};
