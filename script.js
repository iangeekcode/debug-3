function bug2()
{
  var counter = 100;
  var index = 0;
  var arrayOf10s = [];
  while(counter >= 0)
  {
    arrayOf10s[index] = counter;
    index = index + 1;
    counter = counter - 10;
  } 
  console.log(arrayOf10s);
  //"100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0"
}