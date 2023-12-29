let box = document.querySelector('.box'),
    start = document.querySelector('.start'),
    sinInButton = document.querySelector('#sinIn'),
    sinUpButton = document.querySelector('#sinUp'),
    login = document.querySelector('.login'),
    reslogin = document.querySelector('.reslogin'),
    login_regName = document.querySelector('.userName1'),
    login_regPass1 = document.querySelector('.Password1'),
    login_regPass2 = document.querySelector('.Password2'),
    login_in1Name = document.querySelector('.userName2'),
    login_in1Pass = document.querySelector('.Password'),
    span1 = document.querySelector('.span1'),
    span2 = document.querySelector('.span2'),
    nameStr = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]{1,6}$/,
    passStr = /^[a-zA-Z0-9]{6,12}$/

sinUpButton.addEventListener('click', () => box.classList.add('right_active'))
sinInButton.addEventListener('click', () => box.classList.remove('right_active'))
start.addEventListener('click', function () {
    start.style.display = 'none'
    box.style.display = 'block'
})
//登录成功跳转页面
login.addEventListener('click', function (e) {
    e.preventDefault()
    alert('登录成功')
    location.href = './view/start.html'
})
reslogin.addEventListener('click', function () {
    if (nameStr.test(login_regName.value) && passStr.test(login_regPass1.value) && login_regPass1.value == login_regPass2.value) {
        span1.style.color = 'green'
        span1.innerHTML = '注册成功！'
    } else {
        span1.style.color = 'red'
        if (!nameStr.test(login_regName.value)) {
            span1.innerHTML = '注册失败，用户名长度为1-6个字符！'
        } else if (!passStr.test(login_regPass1.value)) {
            span1.innerHTML = '注册失败，密码长度为6-12个字符！'
        } else {
            span1.innerHTML = '注册失败，两次密码不一致！'
        }
    }
})


//解决谷歌浏览器音乐不能自动播放的问题，
// function musicAutoPlay() {
//     let music = document.querySelector('audio')//获取audio
//     if (music.paused) {//判断一下paused（pused为真是禁用的）
//         music.play()//调用播放
//     }
// }
// setInterval("musicAutoPlay()", 1);//必须使用一个时间函数 ，不触发的情况下还是报错
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
var audio = document.querySelector("audio");
// var play = document.querySelector('body')

// 定义触发事件列表
var events = [
    "click",   // 点击事件
    "mouseover",   // 鼠标悬停事件
    "keydown",   // 键盘按下事件
    "load", // 页面加载完成事件
    // 添加其他你想监听的事件...
];

// 绑定事件监听器
events.forEach(function (event) {
    docEl.addEventListener(event, function () {
        audio.play();
    });
});
