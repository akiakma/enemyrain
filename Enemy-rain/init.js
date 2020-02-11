window.addEventListener('keydown', function(event) {
    let keycode= event.keyCode;
    if (keycode === 37){
        return moveLeft() 
    } else if (keycode === 39){
        return moveRight()
    } else if (keycode === 32){
        return back()
    }
 }
);


var obj = document.getElementsByClassName("hero")[0]; // 영웅변수

// 가운데정렬, 왼쪽, 오른쪽으로 움직이게해주는 코드
function back(){
    obj.style.left = "390px";
    obj.style.backgroundPosition = 0+ 'px'

}  


function moveLeft() {
    obj.style.backgroundPosition = -75+ 'px'
    console.log(obj.offsetLeft)

    if (obj.offsetLeft < 3){
        obj.style.left = obj.offsetLeft -0 + 'px'
    } else{
        return obj.style.left = obj.offsetLeft - 17 + 'px'; 
    }
};

function moveRight() {
    obj.style.backgroundPosition= -105 + "px";
    console.log(obj.offsetLeft)

    if (obj.offsetLeft >747){
        obj.style.left = obj.offsetLeft + 0 +'px'
    } else {
        return obj.style.left = obj.offsetLeft +17 + 'px';
    }

}
//움찍일때마다 그에맞는 이미지를 보여주는 코드