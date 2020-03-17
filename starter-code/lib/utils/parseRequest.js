module.exports = rawRequest => {
  //?() = new regex group <method> is the name of the group we are trying to match.
  const pattern = /(?<method>[A-Z]+)\s(?<path>.\S*)/;
  const [, body] = rawRequest.split('\r\n\r\n');
  return { ...rawRequest.match(pattern).groups, body };
};
