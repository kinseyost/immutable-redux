export function required(input) {
  if (input.trim() === '') {
    return 'Required';
  }
  return '';
}

export function validEmail(input) {
  const emailRegexp = new RegExp([
    '^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|',
    '"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|',
    '\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")',
    '@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)',
    '+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:',
    '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
    '\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]',
    '?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-',
    '\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|',
    '\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$',
  ].join(''));
  if (input.trim() && !emailRegexp.test(input)) {
    return 'Invalid email';
  }
  return '';
}

export const maxLength = (length) => (input) => {
  if (input.trim() && input.trim().length > length) {
    return `Exceeds max length of ${length}`;
  }
  return '';
};

export const minLength = (length) => (input) => {
  if (input.trim() && input.trim().length < length) {
    return `Must be at least ${length} characters`;
  }
  return '';
};

export const validPhone = (input) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (input.trim() && !phoneRegex.test(input)) {
    return 'Invalid Phone number';
  }
  return '';
};

export const createValidator = (validationObject) => (formValues) => {
  const errors = {};
  Object.keys(formValues).forEach(key => {
    if (validationObject[key]) {
      if (Array.isArray(validationObject[key])) {
        validationObject[key].forEach(validator => {
          const errorText = validator(formValues[key]);
          if (errorText) {
            errors[key] = errorText;
          }
        });
      } else {
        const error = validationObject[key](formValues[key]);
        if (error) {
          errors[key] = error;
        }
      }
    }
  });
  return errors;
};
