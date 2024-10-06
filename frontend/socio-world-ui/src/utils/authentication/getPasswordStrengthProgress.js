import { passwordStrengthChecker } from "./passwordStrengthChecker";

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
