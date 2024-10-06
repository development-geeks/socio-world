export const passwordStrengthChecker = (password) => {
  let strength = 0;

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
