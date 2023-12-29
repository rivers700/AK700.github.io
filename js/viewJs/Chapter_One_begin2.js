let btnNext = document.querySelector('.box_btn'),
    lang = document.querySelector('.dialog_box p'),
    box = document.querySelector('.box'),
    title = document.querySelector('.title'),
    bodyBg = document.querySelector('body'),
    click = document.querySelector('#clickMs'),
    boxPB1 = document.querySelector('.box_pb1'),
    boxPB2 = document.querySelector('.box_pb2'),
    boxPB9 = document.querySelector('.box_pb9'),
    box_container = document.querySelector('.box_container'),
    btnPB1_1 = document.querySelector('.box_pb1 .button1'),
    btnPB1_2 = document.querySelector('.box_pb1 .button2'),
    btnPB2_1 = document.querySelector('.box_pb2 .button1'),
    btnPB2_2 = document.querySelector('.box_pb2 .button2'),
    box_pb9_1 = document.querySelector('.box_pb9 .button1'),
    box_pb9_2 = document.querySelector('.box_pb9 .button2'),
    boxPB2_1 = document.querySelector('.box_pb2_1'),
    boxPB2_2 = document.querySelector('.box_pb2_2'),
    boxPB2_1pb = document.querySelector('.box_pb2_1pb'),
    boxPB2_2pb_1 = document.querySelector('.box_pb2_2_1'),
    boxPB2_2pb = document.querySelector('.box_pb2_2pb'),
    boxPB2_3pb = document.querySelector('.box_pb2_3pb'),
    boxPB2_3pb_1 = document.querySelector('.box_pb2_3pb_1'),
    boxPB2_4pb = document.querySelector('.box_pb2_4pb'),
    boxPB2_4pb_1 = document.querySelector('.box_pb2_4pb_1'),
    boxPB2_5pb = document.querySelector('.box_pb2_5pb'),
    boxPB2_9pb_1 = document.querySelector('.box_pb2_9pb'),
    boxPB2_9pb_2 = document.querySelector('.box_pb9_4pb'),
    boxPB2_9pb_3 = document.querySelector('.box_pb2_5pb_1'),
    boxPB2_9pb_4 = document.querySelector('.box_pb2_4pb_2'),
    flag = true,
    n = 0,
    i = 0,
    dialog = [
        [
            '陈阳：这安平镇还是这么热闹，先去回春堂给老头儿买药吧',
            '冉公子：嘿嘿，小美人还是跟我走吧，保证让你体验人生的快乐',
            '宁之雪：滚开，你想要干嘛，一会衙门就带人来了！',
            '冉公子：衙门？我爹可是镇长，你还是省省跟我走吧，不然我就要用强的了！',
            '陈阳：放开她！光天化日还想强抢民女不成？',
            '冉公子：你又是从哪冒出来的，我劝你还是不要多管闲事的好',
            '陈阳：废话少说，看拳',
            '冉公子：哎呦！好好好，你给我等着，我不会放过你的！',
            '宁之雪：公子，谢谢你，你叫什么名字呀',
            '陈阳：没事，路见不平拔刀相助嘛，我叫陈阳，你呢？',
            '宁之雪：我叫宁之雪，如果你不嫌弃的话可以到我家来坐坐，就在前面的回春堂',
            '陈阳：什么？你家在回春堂？正好我也要去回春堂给老头儿买药',
            '宁之雪：好呀，那一起走吧，不过你说的老头儿是？',
            '陈阳：额，老头儿。。。，其实就是我师父。。。',
            '宁之雪：原来如此，那我们走吧！',
            '宁之雪：爹爹，我回来了！',
            '回春堂掌柜：哎，今天怎么回来这么晚？',
            '宁之雪：就在路上遇到了一些事情所以耽搁了，好了，这位公子想要买药，你快给他抓一副',
            '回春堂掌柜：你们两个？',
            '宁之雪：哎呀，不是你想的那样，这位公子的师父受伤了，比较急',
            '回春堂掌柜：哈哈，原来如此，自然是可以，正好也还有些药材，不过现在药材还没整理可能需要等待一会',
            [
                '陈阳：我来帮忙整理吧，我也是看过药谱',
                '回春堂掌柜：哈哈，那自然是好的',
                '回春堂掌柜：好了，药材也整理好了，还多出了这一枚疗伤丹药也一并给你吧',
                '剑侠：掌柜，帮我抓一副疗伤药！',
                '回春堂掌柜：这。。。，刚才最后一幅丹药已经给这位公子了',
                '剑侠：这位公子，这丹药能否给予我，以后刀山火海，在所不辞！',
                '陈阳：救人要紧，什么刀山的就算了吧，快把这丹药给她服下',
                '剑侠：谢谢你，以后要是有需要来找我',
                '陈阳：没关系的，那我就先回去了',
                '宁之雪：那我送送你吧',
                '陈阳：不用了，我要赶紧回去了，姑娘有缘再见吧',
                '宁之雪：。。。真是一个有趣的人',
                '回春堂掌柜：这小子，急急忙忙的，不过人倒是挺不错，姑娘要好好把握哦',
                '宁之雪：好了好了，不说了（有缘再见吗。。。）',
                '陈阳：（怎么心里不安的感觉越来越强烈了。。。还是赶紧回去吧）',
            ],
            [
                '陈阳：我还是不给你添乱了吧',
                '回春堂掌柜：好了，药也配好了，拿回去吧',
                '陈阳：谢谢掌柜的，那我就先回去了',
                '宁之雪：那我送送你吧',
                '陈阳：不用了，我要赶紧回去了，姑娘有缘再见吧',
                '宁之雪：。。。真是一个有趣的人',
                '回春堂掌柜：这小子，急急忙忙的，不过人倒是挺不错，姑娘要好好把握哦',
                '宁之雪：好了好了，不说了（有缘再见吗？。。。）',
                '陈阳：（怎么心里不安的感觉越来越强烈了。。。还是赶紧回去吧）',
            ],
        ],
        [
            '陈阳：这安平镇还是这么热闹，先去回春堂给老头儿买药吧',
            '陈阳：这安平镇好像也不这么平安嘛，还是先去买药吧',
            '陈阳：掌柜的，给我抓副药',
            '回春堂掌柜：来了，要抓什么药呢，话说雪儿怎么还没回来。。。',
            '陈阳：雪儿？什么雪儿？我要的是疗伤药包',
            '回春堂掌柜：哈哈，是鄙人的女儿',
            '陈阳：原来如此，那需要我帮你找找嘛？',
            '回春堂掌柜：小伙子有心了，不过我这女儿可能贪玩吧，你刚才要的是啥药来着',
            '陈阳：额。。。疗伤药包',
            '回春堂掌柜：哈哈，原来如此，正好也还有些药材，不过现在这些药材还没整理可能需要等待一会',
            [
                '陈阳：我来帮忙整理吧，我也是看过药谱',
                '回春堂掌柜：哈哈，那自然是好的',
                '回春堂掌柜：好了，药也配好了，还多出了这一枚疗伤丹药也一并给你吧',
                '剑侠：掌柜，帮我抓一副疗伤药！',
                '回春堂掌柜：这。。。，刚才最后一幅丹药已经给这位公子了',
                '剑侠：这位公子，这丹药能否给予我，以后刀山火海，在所不辞！',
                '陈阳：救人要紧，什么刀山的就算了吧，快把这丹药给她服下',
                '剑侠：谢谢你，以后要是有需要来找我',
                '陈阳：没关系的，那我就先回去了',
                '宁之雪：爹爹，我回来了！',
                '回春堂掌柜：哎，今天怎么回来这么晚？',
                '宁之雪：就在路上遇到了一些事情所以耽搁了嘛，不是啥大事',
                '回春堂掌柜：回来就好，你要是回来的快些，我还想给你介绍一个小伙子呢',
                '宁之雪：什么小伙子？',
                '陈阳：（怎么心里不安的感觉越来越强烈了。。。还是赶紧回去吧）',
            ],
            [
                '陈阳：我还是不给你添乱了吧',
                '回春堂掌柜：好了，药也配好了，拿回去吧',
                '陈阳：谢谢掌柜，那我就先回去了',
                '宁之雪：爹爹，我回来了！',
                '回春堂掌柜：哎，今天怎么回来这么晚？',
                '宁之雪：就在路上遇到了一些事情所以耽搁了嘛，不是啥大事',
                '回春堂掌柜：回来就好，你要是回来的快些，我还想给你介绍一个小伙子呢',
                '宁之雪：什么小伙子？',
                '陈阳：（怎么心里不安的感觉越来越强烈了。。。还是赶紧回去吧）',
            ]
        ],
    ],
   
imgList = [
    [
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺老板.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/药铺老板.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺老板.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺老板.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        "<img src='../../images/女一.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
        ],
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
        ],
        ""
    ],
    [
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/药铺掌柜.png' style='display: block'>",
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/剑侠.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
        ],
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/药铺掌柜.png' style='display: block'>",
            "<img src='../../images/女一.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
        ],
        ""
    ],
]

function startGame() {
    let score = 0
    document.querySelector("#start").style.display = "none"
    let imgNodeList = document.querySelectorAll(".img-box img")
    for (let i = 0; i < imgNodeList.length; i++) {
        imgNodeList[i].style.display = "block"
    }
    setTimeout(() => {
        for (let i = 0; i < imgNodeList.length; i++) {
            imgNodeList[i].style.display = "none"
        }
    }, 1000);

    let flag = 0
    let prevDivNode = null

    function finishFn() {
        flag = 0
        prevDivNode = null
        document.querySelector("#score").innerHTML = `${score}`
    }

    document.querySelector(".container").onclick = function (e) {
        e.target.children[0].style.display = "block"
        flag++

        if (flag === 2 && prevDivNode.children[0].src === e.target.children[0].src) {
            setTimeout(() => {
                prevDivNode.style.visibility = "hidden"
                e.target.style.visibility = "hidden"
                score += 2

                finishFn()
            }, 500);
        } else if (flag === 2 && prevDivNode.children[0].src !== e.target.children[0].src) {
            setTimeout(() => {
                prevDivNode.children[0].style.display = "none"
                e.target.children[0].style.display = "none"
                score -= 2

                finishFn()
            }, 500);
        } else {
            prevDivNode = e.target
        }
    }
}

box_container.style.display = 'none';
btnNext.style.display = 'none';
setTimeout(() => {
    title.style.display = 'none';
    btnNext.style.display = 'block';
    setTimeout(() => {
        boxPB1.style.display = 'block';
        btnNext.style.display = 'none';
    }, 2000);
}, 3000)

box.innerHTML = imgList[0][0];
lang.innerHTML = dialog[0][0];
bodyBg.style.backgroundImage = 'url(../../images/安平镇.jpg)';

// 第一个选择中的选项一
btnPB1_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB1.style.display = 'none';
    boxPB2_1.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})
// 第一个选择中的选项二
btnPB1_2.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB1.style.display = 'none';
    boxPB2_2.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第一个选择中的选项一触发的剧情
boxPB2_1.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_1.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][1];
    lang.innerHTML = dialog[0][1];
    n = 1
    btnNext.addEventListener('click', () => {
        click.play()
        if (n < imgList[0].length - 18) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 18) {
            btnNext.style.display = 'none';
            boxPB2_1pb.style.display = 'block';
            n++;
        } else if (n < imgList[0].length - 10) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 10) {
            bodyBg.style.backgroundImage = 'url(../../images/回春堂.png)';
            title.innerHTML = '回春堂'
            title.style.display = 'block';
            title.style.color = 'white';
            setTimeout(() => {
                title.style.display = 'none';
            }, 3000)
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n < imgList[0].length - 6) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 6) {
            btnNext.style.display = 'none';
            boxPB2_2pb.style.display = 'block';
            n++;
        } else if (n < imgList[0].length - 4) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 4) {
            btnNext.style.display = 'none';
            boxPB2.style.display = 'block';
            n++;
        } 
        
    });

    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_1pb.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_1pb.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][imgList[0].length - 17];
    lang.innerHTML = dialog[0][dialog[0].length - 16];
    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_2pb.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_2pb.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][imgList[0].length - 5];
    lang.innerHTML = dialog[0][dialog[0].length - 4];
    setTimeout(() => {
        flag = true;
    }, 1200)
});

// 第一个选择中的选项二触发的剧情
boxPB2_2.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_2.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1][1];
    lang.innerHTML = dialog[1][1];
    n = 1
    btnNext.addEventListener('click', () => {
        click.play()
        if (n < imgList[1].length - 12) {
            box.innerHTML = imgList[1][n + 1];
            lang.innerHTML = dialog[1][n + 1];
            n++;
        } else if (n == imgList[1].length - 12) {
            btnNext.style.display = 'none';
            boxPB2_2pb_1.style.display = 'block';
            n++;
        } else if (n < imgList[1].length - 4) {
            box.innerHTML = imgList[1][n + 1];
            lang.innerHTML = dialog[1][n + 1];
            n++;
        } else if (n == imgList[1].length - 4) {
            btnNext.style.display = 'none';
            boxPB9.style.display = 'block';
            n++;
        }

    });

    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_2pb_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_2pb_1.style.display = 'none';
    bodyBg.style.backgroundImage = 'url(../../images/回春堂.png)';
    btnNext.style.display = 'none';
    title.innerHTML = '回春堂'
    title.style.display = 'block';
    title.style.color = 'white';
    setTimeout(() => {
        title.style.display = 'none';
        btnNext.style.display = 'block';
        box.innerHTML = imgList[1][2];
        lang.innerHTML = dialog[1][2];
    }, 3000)
    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第二个选择中的选项一
btnPB2_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2.style.display = 'none';
    boxPB2_3pb.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第二个选择中的选项二
btnPB2_2.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2.style.display = 'none';
    boxPB2_4pb.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})

box_pb9_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB9.style.display = 'none';
    boxPB2_9pb_1.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})

box_pb9_2.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB9.style.display = 'none';
    boxPB2_9pb_2.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第一个剧情里第二个选择中的选项一触发的剧情
boxPB2_3pb.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_3pb.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][21][0];
    lang.innerHTML = dialog[0][21][0];
    i = 0
    btnNext.addEventListener('click', () => {
        click.play()
        if (i < imgList[0][21].length - 14){
            box.innerHTML = imgList[0][21][i];
            lang.innerHTML = dialog[0][21][i];
            i++;
        } else if (i == imgList[0][21].length - 13) {
            btnNext.style.display = 'none';
            boxPB2_3pb_1.style.display = 'block';
            i++;
        } else if (i < imgList[0][21].length - 12) {
            box.innerHTML = imgList[0][21][i];
            lang.innerHTML = dialog[0][21][i];
            i++;
        } else if (i == imgList[0][21].length - 12) {
            btnNext.style.display = 'none';
            boxPB2_5pb.style.display = 'block';
            i++;
        } else if (i < imgList[0][21].length - 1) {
            box.innerHTML = imgList[0][21][i];
            lang.innerHTML = dialog[0][21][i];
            i++;
        } else if (i == imgList[0][21].length - 1) {
            bodyBg.style.backgroundImage = 'url(../../images/安平镇.jpg)';
            btnNext.style.display = 'none';
            title.innerHTML = '安平镇'
            title.style.display = 'block';
            title.style.color = 'black';
            setTimeout(() => {
                title.style.display = 'none';
                btnNext.style.display = 'block';
                box.innerHTML = imgList[0][21][imgList[0][21].length - 1];
                lang.innerHTML = dialog[0][21][dialog[0][21].length - 1];
            }, 3000)
            i++;
        } else {
            location.href = '../../view/Chapter_One_begin3.html'
        }
        
    });
    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_3pb_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_3pb_1.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][21][2];
    lang.innerHTML = dialog[0][21][2];
    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_5pb.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_5pb.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][21][3];
    lang.innerHTML = dialog[0][21][3];

    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第一个剧情里第二个选择中的选项二触发的剧情
boxPB2_4pb.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_4pb.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][22][0];
    lang.innerHTML = dialog[0][22][0];
    i = 0
    btnNext.addEventListener('click', () => {
        click.play()
        if (i < imgList[0][22].length - 8) {
            box.innerHTML = imgList[0][22][i];
            lang.innerHTML = dialog[0][22][i];
            i++;
        }  else if (i == imgList[0][22].length - 8) {
            boxPB2_4pb_1.style.display = 'block';
            btnNext.style.display = 'none';
            i++;
        } else if (i < imgList[0][22].length - 1) {
            box.innerHTML = imgList[0][22][i];
            lang.innerHTML = dialog[0][22][i];
            i++;
        } else if (i == imgList[0][22].length - 1) {
            bodyBg.style.backgroundImage = 'url(../../images/安平镇.jpg)';
            btnNext.style.display = 'none';
            title.innerHTML = '安平镇'
            title.style.display = 'block';
            title.style.color = 'black';
            setTimeout(() => {
                title.style.display = 'none';
                btnNext.style.display = 'block';
                box.innerHTML = imgList[0][22][imgList[0][22].length - 1];
                lang.innerHTML = dialog[0][22][dialog[0][22].length - 1];
            }, 3000)
            i++;
           
        } else {
            location.href = '../../view/Chapter_One_begin3.html'
        }

    });
    setTimeout(() => {
        flag = true;
    }, 1200)
})


boxPB2_4pb_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_4pb_1.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[0][22][1];
    lang.innerHTML = dialog[0][22][1];

    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第二个剧情里第二个选择中的选项一触发的剧情
boxPB2_9pb_1.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_9pb_1.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1][10][0];
    lang.innerHTML = dialog[1][10][0];
    i = 0
    btnNext.addEventListener('click', () => {
        click.play()
        if (i < imgList[1][10].length - 14) {
            box.innerHTML = imgList[1][10][i+1];
            lang.innerHTML = dialog[1][10][i+1];
            i++;
        } else if (i == imgList[1][10].length - 14) {
            btnNext.style.display = 'none';
            boxPB2_3pb_1.style.display = 'block';
            i++;
        } else if (i < imgList[1][10].length - 13) {
            box.innerHTML = imgList[1][10][i + 1];
            lang.innerHTML = dialog[1][10][i + 1];
            i++;
        } else if (i == imgList[1][10].length - 13) {
            btnNext.style.display = 'none';
            boxPB2_9pb_3.style.display = 'block';
            i++;
        } else if (i < imgList[1][10].length - 2) {
            box.innerHTML = imgList[1][10][i + 1];
            lang.innerHTML = dialog[1][10][i + 1];
            i++;
        } else if (i == imgList[1][10].length - 2) {
            bodyBg.style.backgroundImage = 'url(../../images/安平镇.jpg)';
            btnNext.style.display = 'none';
            title.innerHTML = '安平镇'
            title.style.display = 'block';
            setTimeout(() => {
                title.style.display = 'none';
                btnNext.style.display = 'block';
                box.innerHTML = imgList[1][10][imgList[1][10].length - 1];
                lang.innerHTML = dialog[1][10][dialog[1][10].length - 1];
            }, 3000)
            i++;
        } else {
            location.href = '../../view/Chapter_One_begin3.html'
        }

    });
    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_9pb_3.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_9pb_3.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1][10][3];
    lang.innerHTML = dialog[1][10][3];
    setTimeout(() => {
        flag = true;
    }, 1200)
})

// 第二个剧情里第二个选择中的选项二触发的剧情
boxPB2_9pb_2.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_9pb_2.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1][11][0];
    lang.innerHTML = dialog[1][11][0];
    i = 0
    btnNext.addEventListener('click', () => {
        click.play()
        if (i < imgList[1][11].length - 8) {
            box.innerHTML = imgList[1][11][i];
            lang.innerHTML = dialog[1][11][i];
            i++;
        } else if (i == imgList[1][11].length - 8) {
            boxPB2_9pb_4.style.display = 'block';
            btnNext.style.display = 'none';
            i++;
        } else if (i < imgList[1][11].length - 1) {
            box.innerHTML = imgList[1][11][i];
            lang.innerHTML = dialog[1][11][i];
            i++;
        } else if (i == imgList[1][11].length - 1) {
            bodyBg.style.backgroundImage = 'url(../../images/安平镇.jpg)';
            btnNext.style.display = 'none';
            title.innerHTML = '安平镇'
            title.style.display = 'block';
            title.style.color = 'black';
            setTimeout(() => {
                title.style.display = 'none';
                btnNext.style.display = 'block';
                box.innerHTML = imgList[1][11][imgList[1][11].length - 1];
                lang.innerHTML = dialog[1][11][dialog[1][11].length - 1];
            }, 3000)
            i++;

        } else {
            location.href = '../../view/Chapter_One_begin3.html'
        }

    });
    setTimeout(() => {
        flag = true;
    }, 1200)
})

boxPB2_9pb_4.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_9pb_4.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1][11][1];
    lang.innerHTML = dialog[1][11][1];

    setTimeout(() => {
        flag = true;
    }, 1200)
})