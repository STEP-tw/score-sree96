const Score=function (incrementValue) {
  this.score=0;
  this.incrementValue=incrementValue;
}
Score.prototype.updateScore = function () {
  this.score+=this.incrementValue;
};

Score.prototype.getCurrentScore = function () {
  return this.score;
};
