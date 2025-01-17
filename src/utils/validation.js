
export const validateForm = (formData, rules) => {
  const errors = {};

  for (const field in rules) {
    const value = formData.get(field)?.trim();
    const validations = rules[field];

    if (validations.required && !value) {
      errors[field] = validations.requiredMessage || `${field} is required.`;
    }

    if (validations.regex && value && !validations.regex.test(value)) {
      errors[field] = validations.invalidMessage || `Invalid ${field}.`;
    }
  }

  return errors;
};
