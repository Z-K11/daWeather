export function checkAddress(address) {
  const coordRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
  if (!coordRegex.test(address)) return true;
  else return false;
}
