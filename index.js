// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  //  const name = 'Ralph'
   drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function appendDriver(name) {
  return [...drivers, name];
}
function prependDriver(name) {
  return [name, ...drivers]
}
function removeLastDriver() {
   return drivers.slice(0, length-1)
}
function removeFirstDriver () {
    return drivers.slice([1]);
}
