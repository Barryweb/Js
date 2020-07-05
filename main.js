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