export var simonArray = []
export var userColors = []

export var colorChoice = function(){
  var colornumber =  Math.floor(Math.random() * Math.floor(4)+1);
  if (colornumber === 1) {
    simonArray.push('blue')
    simonArray.push('black')
  } else if(colornumber === 2){
    simonArray.push('red')
    simonArray.push('black')
  } else if(colornumber === 3){
    simonArray.push('yellow')
    simonArray.push('black')
  } else if(colornumber === 4){
    simonArray.push('green')
    simonArray.push('black')
  }
}




// This works only if you click right away
// var index = 0
// export var colorSwitcher = setInterval(function(){
//     $("#color").css("background-color", (simonArray[index++ % simonArray.length]));
//     if (index === simonArray.length){
//       clearInterval(colorSwitcher)
//       $(".color-buttons").show()
//     }
// }, 1000)
