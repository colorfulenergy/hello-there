
let songs = [
  {"time":0, "song": "skid-d"}
];

// da wae code
//
// var pList = document.querySelectorAll(".container p");
//
// pList.forEach(function(p, index) {
//   p.addEventListener("click", function () {
//   let j = songs[index].time;
//   for (let i = 0; i < 9; i++) {
//     window.setTimeout(function () {
//       songs[index].song.play();
//     }, 1000 + (i * 100));
//   }
//   // if (songs[index].time >= 10000) {
//   //   console.log("called " + songs[index].time)
//   //   window.setTimeout(function () {
//   //     songs[index].time = 0;
//   //   }, 1000)
//   // }
//   });
// });


var s = document.querySelectorAll(".container p");
var j = 0;

s.forEach(function (current, index) {
    let d;
    for (let i = 0; i < 10; i++) {
      j += 1000;
      d = j;
      window.setTimeout(function () {
        console.log("sounds/" + songs[index].song + ".mp3")
        new Audio("sounds/" + songs[index].song + ".mp3").play();
      }, 1 + d)

    }

    if (j > 150000) {
      j = 0;
    }

})
