let btnNext = document.querySelector('.box_btn'),
    // let imgList = document.querySelectorAll('img');
    lang = document.querySelector('.dialog_box p'),
    box = document.querySelector('.box'),
    combat = document.querySelector('.combat'),
    click = document.querySelector('#clickMs'),
    stone = document.querySelector('#stone'),
    combatMs = document.querySelector('#combatMs'),
    title = document.querySelector('.title'),
    bodyBg = document.querySelector('body'),
    boxPB1 = document.querySelector('.box_pb1'),
    boxPB2 = document.querySelector('.box_pb2'),
    btn1 = document.querySelector('.box_pb2 .button1'),
    btn2 = document.querySelector('.box_pb2 .button2'),
    boxPB2_1 = document.querySelector('.box_pb2_1'),
    boxPB2_2 = document.querySelector('.box_pb2_2'),
    boxPB3 = document.querySelector('.box_pb3'),
    boxPB3_1 = document.querySelector('.box_pb3_1'),
    boxPB3_2 = document.querySelector('.box_pb3_2'),
    box_img = document.querySelector('.box_img img'),
    flag = true,
    n = 0,
    dialog = [
        [
            '陈阳：我的剑术又进了一步，今天的修炼就到这里吧，回去找老头儿顺便把这个好消息告诉他',
            '陈阳：可惜了，不然还能抓回去给老头儿补补身子，还是先回去吧',
            '陈阳：老头儿，我回来了！我感觉我的剑术又精进了许多！',
            '竹老：咳咳，臭小子，还差的远呢！',
            '陈阳：老头儿，要不咱俩练练？',
            '竹老：嘿，你这臭小子看来是皮痒痒了，找打！咳咳咳！',
            '陈阳：老头儿，你怎么了？咋还咳出了血来',
            '竹老：无碍，都是当年留下的旧伤了。。。',
            '陈阳：当年？当年到底发生了什么？',
            '竹老：时机到了你自会知道的，你只要知道你身上背负着使命',
            '陈阳：那你等着，我去安平镇给你抓药！',
            '竹老：不用了！这伤吃药用处已经不大了。。。',
            '陈阳：不试试怎么行？老头儿，你在这等着我很快回来',
            '竹老：这小子！咳咳咳！当年留下的伤势加重，可能时日无多了。。。',
            '黑衣人：嘿嘿，找了你们十年，可是让我好找！这次你们可逃不掉了吧？',
            '竹老：你们这些叛徒，竟然背叛人族，甘愿做魔族的走狗！咳咳咳！。。。',
            '黑衣人：呵呵，没想到大名鼎鼎的竹中剑圣，竟也落到这般田地，废话少说，把他交出来我可以让你死的痛快点！',
            '竹老：魔族的走狗而已，也敢大放厥词？',
            '黑衣人：我给过你机会，既然你已有取死之道，那你受死吧！',
            '竹老：嘿嘿，好久没有动过我的剑了，希望你能让他尽兴！（臭小子，恐怕接下来的路你要自己走了。。。）',
            '陈阳：怎么感觉今天没由来的一阵心慌？算了，先赶紧去安平镇给老头儿抓药吧',
        ],
        [
            '陈阳：我的剑术又进了一步，今天的修炼就到这里吧，回去找老头儿顺便把这个好消息告诉他',
            '陈阳：原来是一只兔子，正好拿回去给老头儿补补身子',
            '陈阳：老头儿，我回来了！今天还打了一只野兔，够咱俩大吃一顿了',
            '竹老：咳咳，臭小子，今天怎么回来这么早？',
            '陈阳：这不是担心您老人家嘛，正好今天可以吃顿好的',
            '竹老：你小子还担心我？我学剑的时候你毛都没长齐呢',
            '陈阳：老头儿，正好我剑术有所精进要不咱俩练练？',
            '竹老：嘿，你这臭小子看来是皮痒痒了，找打！咳咳咳！',
            '陈阳：老头儿，你怎么了？咋还咳出了血来',
            '竹老：无碍，都是当年留下的旧伤了。。。',
            '陈阳：当年？当年到底发生了什么？',
            '竹老：时机到了你自会知道的，你只要知道你身上背负着使命',
            '陈阳：那你等着，我去安平镇给你抓药！',
            '竹老：不用了！这伤吃药用处已经不大了。。。',
            '陈阳：不试试怎么行？老头儿，你在这等着我很快回来',
            '竹老：这小子！咳咳咳！当年留下的伤势加重，可能时日无多了。。。',
            '黑衣人：嘿嘿，找了你们十年，可是让我好找！这次你们可逃不掉了吧？',
            '竹老：你们这些叛徒，竟然背叛人族，甘愿做魔族的走狗！咳咳咳！...',
            '黑衣人：呵呵，没想到大名鼎鼎的竹中剑圣，竟也落到这般田地，废话少说，把他交出来我可以让你死的痛快点！',
            '竹老：魔族的走狗而已，也敢大放厥词？',
            '黑衣人：我给过你机会，既然你已有取死之道，那你受死吧！',
            '竹老：嘿嘿，好久没有动过我的剑了，希望你能让它尽兴！（臭小子，恐怕接下来的路你要自己走了。。。）',
            '陈阳：怎么感觉今天没由来的一阵心慌？算了，先赶紧去安平镇给老头儿抓药吧',
        ],
    ],
    imgList = [
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            ""
        ],
        [
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/黑衣人.png' style='display: block'>",
            "<img src='../../images/师父.png' style='display: block'>",
            "<img src='../../images/陈阳.png' style='display: block'>",
            ""
        ],

    ]

bodyBg.style.backgroundImage = 'url(../../images/望剑庐后山.jpg)';
btnNext.style.display = 'none';
box.innerHTML = imgList[0][0];
lang.innerHTML = dialog[0][0];

setTimeout(() => {
    title.style.display = 'none';
    boxPB1.style.display = 'block';
    stone.play()
}, 3000)

boxPB1.addEventListener('click', function () {
    if (!flag) return
    //执行以下代码
    flag = false
    btnNext.style.display = 'block';
    boxPB1.style.display = 'none';
    setTimeout(() => {
        flag = true;
    }, 1200)
});

btnNext.addEventListener('click', function () {
    if (!flag) return
    //执行以下代码
    flag = false
    click.play()
    if (n == 0) {
        boxPB2.style.display = 'block';
        btnNext.style.display = 'none';
    }
    setTimeout(() => {
        flag = true;
    }, 1200)
});

btn1.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2.style.display = 'none';
    boxPB2_1.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)
});

btn2.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2.style.display = 'none';
    boxPB2_2.style.display = 'block';
    setTimeout(() => {
        flag = true;
    }, 1200)

});

boxPB2_1.addEventListener('click', function () {
    click.play()
    //点击按钮触发这个函数   
    //不等于flag时
    if (!flag) return
    //执行以下代码
    flag = false
    boxPB2_1.style.display = 'none';
    box_img.style.display = 'block';
    box_img.style.animation = 'n3 1.7s linear';
    setTimeout(() => {
        box_img.style.display = 'none';
        btnNext.style.display = 'block';
    }, 1700)
   
    
    n = 1
    if (n == 1) {
        lang.innerHTML = dialog[0][1];
    }

    btnNext.addEventListener('click', function () {
        // if (!flag) return
        // //执行以下代码
        // flag = false
        if (n == 1) {
            bodyBg.style.backgroundImage = 'url(../../images/隐居之地.jpg)';
            title.innerHTML = '望剑庐'
            title.style.display = 'block';
            setTimeout(() => {
                title.style.display = 'none';
            }, 3000)
        }
        click.play()
        if (n < imgList[0].length - 10) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 10) {
            boxPB3.style.display = 'block';
            btnNext.style.display = 'none';
            n++
        } else if (n == imgList[0].length - 9) {
            btnNext.style.display = 'none';
            boxPB3_1.style.display = 'block';
            n++;
        } else if (n < imgList[0].length - 3) {
            box.innerHTML = imgList[0][n + 1];
            lang.innerHTML = dialog[0][n + 1];
            n++;
        } else if (n == imgList[0].length - 3) {
            combatMs.play()
            combat.style.display = 'block';
            btnNext.style.display = 'none';
            // 战斗画面
            setTimeout(() => {
                combatMs.pause()
                combat.style.display = 'none';
                // btnNext.style.display = 'none';
                boxPB3_2.style.display = 'block';
                // n = 0;
                // box.innerHTML = imgList[1][imgList[1].length - 1];
                // lang.innerHTML = dialog[1][dialog[1].length - 1];
            }, 3000)

            n++;
        } else {
            location.href = '../../view/Chapter_One_begin2.html'
        }

    });
    setTimeout(() => {
        flag = true;
    }, 1200)
});

boxPB2_2.addEventListener('click', function () {
    click.play()
    
    if (!flag) return
    //执行以下代码
    flag = false
    box_img.style.display = 'block';
    box_img.style.animation = 'opacity-dom 1.7s linear';
    box_img.style.left = '35%';
    setTimeout(() => {
        box_img.style.display = 'none';
        btnNext.style.display = 'block';
    }, 1700)
    // btnNext.style.display = 'block';
    boxPB2_2.style.display = 'none';
    n = 1
    if (n == 1) {
        lang.innerHTML = dialog[1][1];
    }
    btnNext.addEventListener('click', function () {
        // if (!flag) return
        // //执行以下代码
        // flag = false
        if (n == 1) {
            bodyBg.style.backgroundImage = 'url(../../images/隐居之地.jpg)';
            title.innerHTML = '望剑庐'
            title.style.display = 'block';
            setTimeout(() => {
                title.style.display = 'none';
            }, 3000)
        }

        click.play()
        if (n < imgList[1].length - 10) {
            box.innerHTML = imgList[1][n + 1];
            lang.innerHTML = dialog[1][n + 1];
            n++;
        } else if (n == imgList[1].length - 10) {
            btnNext.style.display = 'none';
            boxPB3.style.display = 'block';
            n++;
        } else if (n == imgList[1].length - 9) {
            btnNext.style.display = 'none';
            boxPB3_1.style.display = 'block';
            n++;
        } else if (n < imgList[1].length - 3) {
            box.innerHTML = imgList[1][n + 1];
            lang.innerHTML = dialog[1][n + 1];
            n++;
        } else if (n == imgList[1].length - 3) {
            combatMs.play()
            combat.style.display = 'block';
            btnNext.style.display = 'none';
            // 战斗画面
            setTimeout(() => {
                combatMs.pause()
                combat.style.display = 'none';
                // btnNext.style.display = 'none';
                boxPB3_2.style.display = 'block';
                // n = 0;
                // box.innerHTML = imgList[1][imgList[1].length - 1];
                // lang.innerHTML = dialog[1][dialog[1].length - 1];
            }, 3000)

            n++;
        } else {
            location.href = '../../view/Chapter_One_begin2.html'
        }
        // setTimeout(() => {
        //     flag = true;
        // }, 1200)

    });
    setTimeout(() => {
        flag = true;
    }, 1200)
});

boxPB3.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    btnNext.style.display = 'block';
    boxPB3.style.display = 'none';
    box.innerHTML = imgList[1][imgList[1].length - 9];
    lang.innerHTML = dialog[1][dialog[1].length - 8];
    setTimeout(() => {
        flag = true;
    }, 1200)
})
boxPB3_1.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    btnNext.style.display = 'block';
    boxPB3_1.style.display = 'none';
    box.innerHTML = imgList[1][16];
    lang.innerHTML = dialog[1][16];
    setTimeout(() => {
        flag = true;
    }, 1200)
})
boxPB3_2.addEventListener('click', function () {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    btnNext.style.display = 'block';
    boxPB3_2.style.display = 'none';
    box.innerHTML = imgList[1][imgList[1].length - 2];
    lang.innerHTML = dialog[1][dialog[1].length - 1];
    setTimeout(() => {
        flag = true;
    }, 1200)
})