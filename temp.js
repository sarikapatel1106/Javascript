console.log(changeInFahrenhit());

function changeInFahrenhit()
{
  var cal = 32;
  var fah = cal * 9/5 + 32;
  return fah;
}


var firstName = "Sarika";

console.log(middleName(firstName));
function middleName (n)
{
  var mName = 'Maulik';
  console.log(lastName(mName));
  return n+ ' ' + lastName(mName);
}

function lastName(n)
{
  var surName = "Patel";
  return n + ' ' +surName;
}
