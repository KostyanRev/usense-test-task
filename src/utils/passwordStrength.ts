export const sectionColors = {
  empty: ["bg-gray-300", "bg-gray-300", "bg-gray-300"],
  short: ["bg-red-500", "bg-red-500", "bg-red-500"],
  easy: ["bg-red-500", "bg-gray-300", "bg-gray-300"],
  medium: ["bg-yellow-500", "bg-yellow-500", "bg-gray-300"],
  strong: ["bg-green-500", "bg-green-500", "bg-green-500"],
};

export const getPasswordStrength = (
  password: string,
): keyof typeof sectionColors => {
  if (!password) return "empty";
  if (password.length < 8) return "short";

  const hasLetters = /\p{L}/u.test(password);
  const hasDigits = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?"_:;{}|<>]/.test(password);

  if (hasLetters && hasDigits && hasSymbols) return "strong";
  if (
    (hasLetters && hasDigits) ||
    (hasLetters && hasSymbols) ||
    (hasDigits && hasSymbols)
  ) {
    return "medium";
  }
  return "easy";
};
