// Level 11 — Call provided function with args (10 calls)
// Helper provided for students; call it 10 times and save results to descriptive consts.

export function reportScore(playerName, score) {
  return playerName + " scored " + score + " points";
}

const avaScoreReport = reportScore("Ava", 0);
const lewisScoreReport = reportScore("Lewis", 20);
const mikeScoreReport = reportScore("Mike", 100);
const amandaScoreReport = reportScore("Amanda", 25);
const williamScoreReport = reportScore("William", 10);
const ralphScoreReport = reportScore("Ralph", 15);
const johnScoreReport = reportScore("John", 35);
const tiffanyScoreReport = reportScore("Tiffany", 47);
const ryanScoreReport = reportScore("Ryan", 50);
const drewScoreReport = reportScore("Drew", 85);

export default mikeScoreReport;
