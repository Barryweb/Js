document.getElementById("box1").innerHTML = "哈摟";

var a = 10;      //整數
var b = 1.25;    //浮點數
var c = "文字";  //字串
var d = true;   //布林值

// 自定義函式   function 函式名稱(參數1,參數2,....){要這個函式執行的內容}
function myFunction(){
    console.log("這是一個自定義函式");
}
// 呼叫函式
myFunction();


function addten(number){
    number+=10;
    console.log("加十:"+number);
}
addten(20);   //輸出30


function mul(a,b){
    console.log("相乘:"+(a*b));
}
mul(10,25);  //輸出250

//物件 { 物件資料名稱 : 物件資料值 }
var car = {
    brand:"BMW",
    CC:200,
    colof:"黃色",
    drive: function(){
        console.log("開車中...")
    }
}

console.log("汽車品牌" + car.brand);
car.drive();

// 練習事件

var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊");
}
box2.onmouseenter = () => {
    console.log("滑入");
}

box2.onmouseleave = () => {
    console.log("滑出");
}


// 陣列
var arr = [20, 10 ,30];

console.log("第一筆資料"+ arr[0]);

arr[0]=99;
console.log("第一筆資料"+ arr[0]);
console.log("陣列的數量"+ arr.length);

//比較運算子

var a = 10;
var b = 20;

console.log( a > b);

//  == 與 === 的差異

var a = 7;
var b = "7";
console.log("兩個等於"+ (a == b));      //值(value)一樣就好 
console.log("三個等於"+ (a === b));     //值(value)一樣且類別(type)也要一樣  (嚴格型別)


//  && ||    &=or  |=and

console.log( true && true);
console.log( true && false);
console.log( false && true);
console.log( false && false);


console.log( true || true);
console.log( true || false);
console.log( false || true);
console.log( false || false);

// if判斷式

if(true){
    document.write("我是判斷式<br>");
}

//if else
var ifTest = true;

if (ifTest) {
    document.write('執行if裡面的內容</br>');
} else {
    document.write("不符合條件就執行這個");
}

//分數>60及格
//分數>40補考
//分數 被當

var score = document.getElementById("score");
var result = document.getElementById("result");

score.onchange = () =>{
    //將字串轉為整數
    var s = parseInt(score.value);
    if(s>=60){
        result.innerHTML = "及格分數-"+ s;
    }else if(s>=40){
        result.innerHTML = "補考分數-"+ s;
    }else{
        result.innerHTML = "被當"+ s;
    }
}

//設一個常數,不能更改他的值
const pi = 3.14159131;
// pi = 5.13165;  //不會再更改 會報錯

//var與let的差異
//let只在區塊內有效

var A = 5;
var A = 10;
{
    let A = 20;
    console.log(A); //印出20
}
console.log(A); //印出10


var constA = 99;
{
    var constA = 77;
}
console.log(constA);//輸出77


let constB = 99;
{
    let constB = 77;
}
console.log(constB);//輸出99


//迴圈
for (var i = 0; i<10; i++){
    console.log("迴圈"+i);//輸出0~9
}

var products = ["可樂","雪碧","芬達"];

for( var i =0; i<products.length; i++){
    console.log(products[i]);//輸出可樂雪碧芬達
}

var ps = document.getElementsByClassName("product");

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText = products[i]; 
}


//9X9乘法表

for(var i =0; i<=9; i++){
    for(var j=0; j<=9; j++){
        document.write(i+"*"+j+"="+(i*j)+" ");
    }
    document.write("</br>");
}

//*
//**
//***
//**** 
//***** 


var n = 5;
for(var i = 0; i<=n; i++){
    for(var j = 0; j<i; j++){
        document.write("*");
    }
    document.write("<br>");
}



// 泡沫排序法
var array =  [20, 30, 40, 10, 50, 45, 12, 5];
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len-1; i++) {
        for (var j = 0; j < len-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
bubbleSort(array);
document.write(array);