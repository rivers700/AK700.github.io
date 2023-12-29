var docEl = document.documentElement;
function setRemUnit() {
    var rem = docEl.clientWidth / 25.6; // 可根据不同电脑分辨率进行手动修改（如1920*1080 为19.2
    docEl.style.fontSize = rem + 'px'
}

setRemUnit()

window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        setRemUnit()
    }
})
var audio = document.querySelector("#audio");
var play = document.querySelector('body')

// 定义触发事件列表
var events = [
    "click",   // 点击事件
    "mouseover",   // 鼠标悬停事件
    "keydown",   // 键盘按下事件 
    "load"// 页面加载完成事件
    // 添加其他你想监听的事件...
];

// 绑定事件监听器
events.forEach(function (event) {
    docEl.addEventListener(event, function () {
        audio.play();
    });
});
