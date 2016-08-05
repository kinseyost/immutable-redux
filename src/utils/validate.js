export function required(input) {
  if (input.trim() === '') {
    return 'Required';
  }
  return '';
}
