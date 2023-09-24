export const extractVariables = (text) => {
  const regex = /{{\s*(\w+)\s*}}/g;
  let match;
  const variables = [];

  while ((match = regex.exec(text)) !== null) {
    variables.push(match[1]);
  }

  return variables;
};
