import * as THREE from '../build/three.module.js'; //3js 라이브러리를 모듈로 임포트 

//App 클레스 하나를 생성 후 window onload에서 App 클레스를 생성한다.
class App{
    //App 클레스의 생성자 
    constructor(){

    }
}

window.onload = function(){
    new App();
}


//3js 구성요소
//Renderer ---------Scene -----Light
// |                 |
// |                 |
// |                  ----------Mesh ---------------------------Geometry
// |                             |
// |                             |
//                                ------------------------------Material
//  ----------------- Camera