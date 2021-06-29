/*
  ~ The class
*/
exports.NotSoRandom = {
  // Bias should be a float between 0 and 1, 1 being 100% of results are 1
  bias(bias = 0.8){
    let x = Math.random();
    let k = Math.pow(1-bias, 2);
    return (x * k) / (x * k - x+1);
  },
  circle2(){
    let x = Math.random();
    let y = Math.random();
    // console.log(this);
  },
  random(){
    return Math.random();
  },
  halfPipe(){
    return (Math.sin(1-Math.random() * 2 * Math.PI)+1) / 2;
  },
  ridge(){
    let y = Math.sqrt(0.25 - Math.pow(Math.random() * 0.5, 2)) * (Math.random() > 0.5 ? -1 : 1);
    return y < 0 ? y + 1 : y;
  },
  sphere(){
    return Math.sqrt(0.25 - Math.pow(Math.random() * 0.5, 2)) * (Math.random() > 0.5 ? -1 : 1)+0.5;
  },
  sineUpDown(){
    return 1 - ((Math.sin(2*Math.PI*Math.random()+Math.PI*1.5) / 2) + 0.5);
  },
  gradient(){
    return Math.tan(Math.random()-1.22) / 2.4 + 1.1;
  },
  reverseGradient(){
    return 1 - (Math.tan(Math.random()-1.22) / 2.4 + 1.1);
  },
  fire(){
    return Math.pow(Math.random(), 0.2);
  },
  reverseFire(){
    return 1 - (Math.pow(Math.random(), 0.2));
  },
  exponential(){
    return Math.pow((Math.random()), 10);
  },
  reverseExponential(){
    return 1 - (Math.pow((Math.random()), 10));
  },
  yesNo(){
    return Math.random() > 0.5 ? 1 : 0;
  },
  stepped(amount){
    // You should pass in amount, this is just for the demo
    amount = amount || 0.2;
    return Math.round(Math.random() / amount) * amount;
  },
  scurve(){
    let seed = Math.random();
    if(seed < 0.5){
      return (Math.sin(2*Math.PI*seed + (3 * Math.PI / 2)) + 1) / 4; 
    }
    return (Math.sin(2*Math.PI*seed + (Math.PI / 2)) + 3) / 4;;
  },
  sin(){
    return Math.sin(Math.random() * Math.PI)
  },
  circle(){
    return 0.5 + Math.sin( Math.random() * 2 * Math.PI ) * 0.5;
  },
  between(min, max, func = 'random'){
    return (max - min) * this[func]() + min;
  }
}