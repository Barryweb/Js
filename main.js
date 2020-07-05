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


// 泡沫排序法
var arr =  [20, 30, 40, 10, 50, 45, 12, 5];
function bubbleSort(arr) {
    var length = arr.length;
    for (var i = 0; i < length-1; i++) {
        for (var j = 0; j < length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
bubbleSort(arr);
console.log(arr);