var name = prompt("Enter your Name:");

console.log(name);
console.log(name.length);


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
