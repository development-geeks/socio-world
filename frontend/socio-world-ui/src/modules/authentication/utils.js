export const passwordStrengthChecker = (password) => {
  let strength = 0;
  console.log(password);

  // Criteria for password strength
  const lengthCriteria = password.length >= 8;
  const uppercaseCriteria = /[A-Z]/.test(password);
  const lowercaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /[0-9]/.test(password);
  const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Increment strength based on criteria met
  if (lengthCriteria) strength += 1;
  if (uppercaseCriteria) strength += 1;
  if (lowercaseCriteria) strength += 1;
  if (numberCriteria) strength += 1;
  if (specialCharCriteria) strength += 1;

  return strength;
};

export const getPasswordStrengthProgress = (password) => {
  const strength = passwordStrengthChecker(password);
  if (strength === 0) {
    return { backgroundColor: "#0000001A", percentage: 0, progressColor: "#0000001A" };
  } else if (strength === 5) {
    return {
      backgroundColor: "#0000001A",
      percentage: 100,
      progressColor: "#0CBC87",
    };
  } else if (strength === 4) {
    return { backgroundColor: "#0000001A", percentage: 75, progressColor: "#459EF8" };
  } else if (strength === 3) {
    return { backgroundColor: "#0000001A", percentage: 50, progressColor: "#F7C32E" };
  } else {
    return { backgroundColor: "#0000001A", percentage: 25, progressColor: "#D6293E" };
  }
};
