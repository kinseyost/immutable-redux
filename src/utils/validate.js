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
  if (!emailRegexp.test(input)) {
    return 'Invalid email';
  }
  return '';
}

export const maxLength = (length) => (input) => {
  if (input.trim().length > length) {
    return `Exceeds max length of ${length}`;
  }
  return '';
};

export const minLength = (length) => (input) => {
  if (input.trim().length < length) {
    return `Must be at least ${length} characters`;
  }
  return '';
};
