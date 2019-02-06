function uniCharCode(event) {
  var char = event.which || event.keyCode;
}
var b;
function uniKeyCode(event) {
  var key = event.keyCode;
  //belok kiri
  if (key == 37) {
    var a = document.getElementById("kotaknya").style.transform;
    if (a == '') {
      b = 90;
      document.getElementById("kotaknya").style.transform = 'rotateY('+b+'deg)';
    }
    if (b < 360) {
        document.getElementById("kotaknya").style.transform = 'rotateY('+b+'deg)';
        b+=90;
    }else if (b == 360) {
        document.getElementById("kotaknya").style.transform = 'rotateX('+b+'deg)';
        b=90;
    }
  }
  //ke atas
  if (key == 38) {
    var a = document.getElementById("kotaknya").style.transform;
    if (a == '') {
        document.getElementById("kotaknya").style.transform = 'rotateX(-90deg)';
        b = 90;
    }
    if (b <= 360) {
        document.getElementById("kotaknya").style.transform = 'rotateX(-90deg)';
    }
    if (a == 'rotateX(-90deg)') {
        document.getElementById("kotaknya").style.transform = 'rotateY(180deg)';
    }
  }
  //belok kanan
  if (key == 39) {
    var a = document.getElementById("kotaknya").style.transform;
    if (a == '') {
      b = -90;
      document.getElementById("kotaknya").style.transform = 'rotateY('+b+'deg)';
    }
    if (b > -360 ) {
        document.getElementById("kotaknya").style.transform = 'rotateY('+b+'deg)';
        b-=90;
    }else if (b == -360) {
        document.getElementById("kotaknya").style.transform = 'rotateX('+b+'deg)';
        b=-90;
    }
  }
  //ke bawah
  if (key == 40) {
    var a = document.getElementById("kotaknya").style.transform;
    if (a == '') {
        document.getElementById("kotaknya").style.transform = 'rotateX(90deg)';
        b = 90;
    }
    if (b <= 360) {
        document.getElementById("kotaknya").style.transform = 'rotateX(90deg)';
    }
    if (a == 'rotateX(90deg)') {
        document.getElementById("kotaknya").style.transform = 'rotateY(180deg)';
    }
  }
  if (key == 49) {
    var a = document.getElementById("kotaknya").style.transform;
    console.log(a);
    document.getElementById("hai").innerHTML = a;
  }

}
