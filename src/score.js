const Score=function (incrementValue) {
  this.score=0;
  this.incrementValue=incrementValue;
}
Score.prototype.updateScore = function () {
  this.score+=this.incrementValue;
  this.updateIncrementValue();
};

Score.prototype.getCurrentScore = function () {
  return this.score;
};

Score.prototype.updateIncrementValue = function () {
  if(this.score>=100){
    this.incrementValue=100;
  }
};
