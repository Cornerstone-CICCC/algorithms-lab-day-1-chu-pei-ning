// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  const dateArr = dateStr.split('-')
  console.log(dateArr)
  const year = dateArr[0]
  const month = dateArr[1]
  let monthNum = Number(month)
  const date = dateArr[2]
  let dateNum = Number(date)
  switch(monthNum) {
    case 1:
      monthNum = 'January';
      break;
    case 2:
      monthNum = 'February';
      break;
    case 3:
      monthNum = 'March';
      break;
    case 4:
      monthNum = 'April';
      break;
    case 5:
      monthNum = 'May';
      break;
    case 6:
      monthNum = 'June';
      break;
    case 7:
      monthNum = 'July';
      break;
    case 8:
      monthNum = 'August';
      break;
    case 9:
      monthNum = 'September';
      break;
    case 10:
      monthNum = 'October';
      break;
    case 11:
      monthNum = 'November';
      break;
    case 12:
      monthNum = 'December';
      break;
    default:
      break;

  }
  return `${monthNum} ${dateNum}, ${year}`
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'