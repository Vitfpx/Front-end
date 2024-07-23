document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertCamelCase = underscore_case => {
  const camelCase = underscore_case.trim().split('_');
  const perfectCamelCase =
    camelCase[0] + camelCase[1][0].toUpperCase() + camelCase[1].slice(1);
  document.querySelector('textarea').textContent = perfectCamelCase;
  // return perfectCamelCase;
};
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

document.querySelector('button').addEventListener('click', convertCamelCase);
