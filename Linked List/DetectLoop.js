/*
Print the time in words as described.
Sample Input 0

5
47
Sample Output 0

thirteen minutes to six
*/

function processData(input) {
  var arr = input.split('\n');
  var h = arr[0];
  var m = arr[1];

  if (m % 15 == 0) {
    switch (m) {
      case '00':
        console.log(getHour(h) + " o' clock");
        break;
      case '15':
        console.log('quarter past ' + getHour(h));
        break;
      case '30':
        console.log('half past ' + getHour(h));
        break;
      case '45':
        h++;
        console.log('quarter to ' + getHour(h));
        break;
    }
  } else {
    console.log(getTime(h, m));
  }
}

function getTime(hour, mins) {
  var minutes = [
    'error',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];

  if (mins < 30) {
    if (mins == '01') {
      return 'one minute past ' + getHour(hour);
    } else {
      return minutes[mins] + ' minutes past ' + getHour(hour);
    }
  } else {
    hour++;
    if (mins == '59') {
      return 'one minute to ' + getHour(hour);
    } else {
      return minutes[60 - mins] + ' minutes to ' + getHour(hour);
    }
  }
}

function getHour(hour) {
  var hours = [
    'error',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ];
  return hours[hour];
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
