
function filterByType() {
  let args = [...arguments];
  let type = typeof (args[0]);
  //console.log(type);
  delete args[0];
  return args.filter(args => typeof args === type);
}

console.log(filterByType('string', false, 1, 'SS', 5, 10, true, 'JS'));
