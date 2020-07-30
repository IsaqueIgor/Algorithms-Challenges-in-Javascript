ratings = [6, 2, 4, 5, 3, 7, 8];

function minDiff(ratings) {
  // Write your code here
  ratings.sort();
  let minDiff = (ratings[1] = ratings[0]);
  for (let i = 2; i != ratings.length - 1; i += 2) {
    minDiff = Math.min(minDiff, ratings[i] - ratings[i - 1]);
  }
  console.log(minDiff);
  return minDiff;
}
minimizeBias(ratings);
