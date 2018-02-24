var recipes = {'recipe': 'object'};
function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject.key = value;
  newObject;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.push(key, value);
  object;
}