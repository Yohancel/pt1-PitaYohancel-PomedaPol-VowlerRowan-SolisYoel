//function random_name_picker(){
//    const names = (["ian","pablo","antonio","quim","sara","marc","luis","josep","adrian","efrem","victor","marc","joan","lidia","yohancel","polpu","ivan","carlos","ignacio","pol","luis","yoel","rowan"]);
//    const random = Math.floor (Math.random() * names.length);
//    var random_name = (names[random]);
//    escollit.innerHTML = random_name
//}
function create_spinner() {
    color_data = ['#fedf30', '#fdb441', '#fd6930', '#eb5454', '#bf9dd3', '#29b8cd', "#00f2a6", "#f67", "#ff8000", "#00CC00", "#ff007f", "#00994c", "#0000CC", "#ff0000", "#000000", "#ffff00", "#33ff99", "#6600cc", "#66ffff", "66ffb2", "#e0e0e0", "#9999ff", "#ffe5cc"];
    label_data = (["ian","pablo","antonio","quim","sara","marc","luis","josep","adrian","efrem","victor","marc","joan","lidia","yohancel","polpu","ivan","carlos","ignacio","pol","luis","yoel","rowan"]);
    var color = color_data;
    var label = label_data;
    var slices = color.length;
    var sliceDeg = 360 / slices;
    var deg = rand(0, 360);
    var speed = 10;
    var slowDownRand = 0;
    var ctx = canvas.getContext('2d');
    var width = canvas.width; // size
    var center = width / 2; // center
    ctx.clearRect(0, 0, width, width);
    for (var i = 0; i < slices; i++) {
      ctx.beginPath();
      ctx.fillStyle = color[i];
      ctx.moveTo(center, center);
      ctx.arc(center, center, width / 2, deg2rad(deg), deg2rad(deg + sliceDeg));
      ctx.lineTo(center, center);
      ctx.fill();
      var drawText_deg = deg + sliceDeg / 2;
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(deg2rad(drawText_deg));
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(label[i], 100, 5);
      ctx.restore();
      deg += sliceDeg;
    }
}

create_spinner();
var deg = rand(0, 360);
var speed = 10;
var ctx = canvas.getContext('2d');
var width = canvas.width; // size
var center = width / 2; // center
var isStopped = false;
var lock = false;
var slowDownRand = 0;

function spin() {
    color_data = ['#fedf30', '#fdb441', '#fd6930', '#eb5454', '#bf9dd3', '#29b8cd', "#00f2a6", "#f67", "#ff8000", "#00CC00", "#ff007f", "#00994c", "#0000CC", "#ff0000", "#000000", "#ffff00", "#33ff99", "#6600cc", "#66ffff", "66ffb2", "#e0e0e0", "#9999ff", "#ffe5cc"];
  label_data = (["ian","pablo","antonio","quim","sara","marc","luis","josep","adrian","efrem","victor","marc","joan","lidia","yohancel","polpu","ivan","carlos","ignacio","pol","luis","yoel","rowan"]);
  var color = color_data;
  var label = label_data;
  var slices = color.length;
  var sliceDeg = 360 / slices;
  deg += speed;
  deg %= 360;
  // Increment speed
  if (!isStopped && speed < 3) {
    speed = speed + 1 * 0.1;
  }
  // Decrement Speed
  if (isStopped) {
    if (!lock) {
      lock = true;
      slowDownRand = rand(0.994, 0.998);
    }
    speed = speed > 0.2 ? speed *= slowDownRand : 0;
  }
  // Stopped!
  if (lock && !speed) {
    var ai = Math.floor(((360 - deg - 90) % 360) / sliceDeg); // deg 2 Array Index
    ai = (slices + ai) % slices; // Fix negative index
    //return alert("You got:\n"+ label[ai] ); // Get Array Item from end Degree
    return swal({
      title: "Oh!!!!",
      text: "Li toca a " + label[ai],
      type: "success",
      confirmButtonText: "OK",
      closeOnConfirm: false
    });
  }
  ctx.clearRect(0, 0, width, width);
  for (var i = 0; i < slices; i++) {
    ctx.beginPath();
    ctx.fillStyle = color[i];
    ctx.moveTo(center, center);
    ctx.arc(center, center, width / 2, deg2rad(deg), deg2rad(deg + sliceDeg));
    ctx.lineTo(center, center);
    ctx.fill();
    var drawText_deg = deg + sliceDeg / 2;
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(deg2rad(drawText_deg));
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(label[i], 100, 5);
    ctx.restore();
    deg += sliceDeg;
  }
  window.requestAnimationFrame(spin);
}

function stops() {
  isStopped = true;
}

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function cambiarTema() {
    var body = document.body;
    body.classList.toggle("dark");
}
