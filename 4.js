function getShortMessages(objects) {
  return objects.filter(object => object.message.length < 50).map(object => object.message);
}

console.log('filter objects and arrange them correctly : ', JSON.stringify(getShortMessages([{'message': 'msg'}])) === JSON.stringify(['msg']) );
