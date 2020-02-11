class Enemy {
  
}



//유령변수
// var objEnemy = document.getElementsByClassName("enemy")[0];

//div id =bg 변수
var divdiv = document.getElementById("bg");
// 유령 태어날때 랜덤값으로 좌표반영
function getRandom() {
    return Math.random() * (700 - 16) + 16;
}



//더 많은 유령을 생성한다.

var setMonster = setInterval(function(){
    let divN = document.createElement('div');
    let sos = getRandom();
    divN.className='enemy';
    divdiv.appendChild(divN);
    divN.style.left = parseInt(sos) + 'px';
    EnemyMove();
    deadEnemy();
    var setInt = setInterval(function(){
        EnemyMove()   
    }, 20)
    // 인터벌(귀신이 땅에닿으면 2초후에 사라진다.)
    
    //유령 시간설정해서 땅에 닿으면 사라지게끔.
    var setInt2 = setTimeout(function() {
        EnemyHide()
    }, 7000);
    
    // 유령이 죽거나 땅에 닿은뒤 사라진다.
    function EnemyHide(){
        divN.style.display="none";
    }
    
    //유령이 하늘에서 떨어진다 땅에 닿으면 인터벌을 끝낸다.
    function EnemyMove() {
        divN.style.top = divN.offsetTop + 3 + "px";
        stopInterval();
    }
    
    // 인터벌을 끝내는 함수
    function stopInterval(){
        deadEnemy()   
        if (divN.offsetTop > 550){
            return clearInterval(setInt);
        }
    }
    // 유령 뒤짐(유령이 땅에떨어지면 죽는다, 유령이 히어로와 닿으면 죽는다(히어로 머리위치 & 히어리 x좌표값에서 -50, +50사이일경우))
    function deadEnemy(){   
        if(divN.offsetTop >500 && obj.offsetLeft-50 <= divN.offsetLeft && obj.offsetLeft+50 >= divN.offsetLeft){
            return divN.style.backgroundPosition = "47px";
        }else if (divN.offsetTop >550 ){
            return divN.style.backgroundPosition = "47px";
        }
    }
    

},2000)
// 인터벌
// var setInt = setInterval(function(){
//     EnemyMove()   
// }, 20)
// // 인터벌(귀신이 땅에닿으면 2초후에 사라진다.)

// //유령 시간설정해서 땅에 닿으면 사라지게끔.
// var setInt2 = setTimeout(function() {
//     EnemyHide()
// }, 7000);

// // 유령이 죽거나 땅에 닿은뒤 사라진다.
// function EnemyHide(){
//     divN.style.display="none";
// }

// //유령이 하늘에서 떨어진다 땅에 닿으면 인터벌을 끝낸다.
// function EnemyMove() {
//     divN.style.top = divN.offsetTop + 3 + "px";
//     stopInterval();
// }

// // 인터벌을 끝내는 함수
// function stopInterval(){
//     deadEnemy()   
//     if (divN.offsetTop > 550){
//         return clearInterval(setInt);
//     }
// }
// // 유령 뒤짐(유령이 땅에떨어지면 죽는다, 유령이 히어로와 닿으면 죽는다(히어로 머리위치 & 히어리 x좌표값에서 -50, +50사이일경우))
// function deadEnemy(){   
//     if(divN.offsetTop >500 && obj.offsetLeft-50 <= divN.offsetLeft && obj.offsetLeft+50 >= divN.offsetLeft){
//         return divN.style.backgroundPosition = "47px";
//     }else if (divN.offsetTop >550 ){
//         return divN.style.backgroundPosition = "47px";
//     }
// }



// function deadEnemy1(){   
//     if(divN.offsetTop >500 && obj.offsetLeft-50 <= divN.offsetLeft && obj.offsetLeft+50 >= divN.offsetLeft){
//         return divN.style.backgroundPosition = "47px";
//     }else if (divN.offsetTop >550 ){
//         return divN.style.backgroundPosition = "47px";
//     }
// }

// function EnemyHide1(){
//     divN.style.display="none";
// }
// function EnemyMove1() {
//     divN.style.top = divN.offsetTop + 3 + "px";
//     stopInterval();
// }
// function stopInterval1(){
//     deadEnemy()   
//     if (divN.offsetTop > 550){
//         return clearInterval(setInt);
//     }
// }



// // 인터벌
// var setInt = setInterval(function(){
//     EnemyMove()   
// }, 20)
// // 인터벌(귀신이 땅에닿으면 2초후에 사라진다.)

// //유령 시간설정해서 땅에 닿으면 사라지게끔.
// var setInt2 = setTimeout(function() {
//     EnemyHide()
// }, 7000);

// // 유령이 죽거나 땅에 닿은뒤 사라진다.
// function EnemyHide(){
//     objEnemy.style.display="none";
// }

// //유령이 하늘에서 떨어진다 땅에 닿으면 인터벌을 끝낸다.
// function EnemyMove() {
//     objEnemy.style.top = objEnemy.offsetTop + 3 + "px";
//     stopInterval();
// }

// // 인터벌을 끝내는 함수
// function stopInterval(){
//     deadEnemy()   
//     if (objEnemy.offsetTop > 550){
//         return clearInterval(setInt);
//     }
// }
// // 유령 뒤짐(유령이 땅에떨어지면 죽는다, 유령이 히어로와 닿으면 죽는다(히어로 머리위치 & 히어리 x좌표값에서 -50, +50사이일경우))
// function deadEnemy(){   
//     if(objEnemy.offsetTop >500 && obj.offsetLeft-50 <= objEnemy.offsetLeft && obj.offsetLeft+50 >= objEnemy.offsetLeft){
//         return objEnemy.style.backgroundPosition = "47px";
//     }else if (objEnemy.offsetTop >550 ){
//         return objEnemy.style.backgroundPosition = "47px";
//     }
// }

// console.log(obj.offsetLeft)
// console.log(objEnemy.offsetLeft)
