var name = prompt("Enter your Name:");

console.log(name);
console.log(name.length);

if (name.length < 5 && name.length != 0) {
  console.log("name is too short");
}
else if (name.length > 10) {
  console.log("name is too long");
}
else if (name.length == 0) {
  console.log("name can't be empty... please enter valid name");
}
else {
  console.log("your name is" + " " + name);
}





switch(name)
{
  case 'sarika':
    console.log("hello sarika");
    break;
  case 'maulik':
    console.log("hello maulik");
    break;
  case 'aarav' :
    console.log("hello aarav");
    break;
  default:
    console.log("welcome" + " " + name);
      break;

}
