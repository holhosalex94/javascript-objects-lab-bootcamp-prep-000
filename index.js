var recipes = {'recipe': 'object'};
function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject.key = value;
  newObject;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //object = Object.assign({}, object);
  object[key] = value;
  object;
}