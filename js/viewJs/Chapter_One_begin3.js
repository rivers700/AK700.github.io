let btnNext = document.querySelector('.box_btn'),
    // let imgList = document.querySelectorAll('img');
    lang = document.querySelector('.dialog_box p'),
    box = document.querySelector('.box'),
    click = document.querySelector('#clickMs'),
    stone = document.querySelector('#stone'),
    title = document.querySelector('.title'),
    bodyBg = document.querySelector('body'),
    boxPB1 = document.querySelector('.box_pb1'),
    boxPB2 = document.querySelector('.box_pb2'),
    boxPB3 = document.querySelector('.box_pb3'),
    boxPB4 = document.querySelector('.box_pb4'),
    boxPB5 = document.querySelector('.box_pb5'),
    boxImg = document.querySelector('.box_img'),
    Bgbox = document.querySelector('.Bgbox'),
    endOne = document.querySelector('.endOne'),
    Bgbox_1 = document.querySelector('.Bgbox_1'),
    flag = true,
    n = 0,
    dialog = [
        '陈阳：怎么回事？这里怎么还有打斗的痕迹，不会是？。。。',
        '陈阳：老头儿！你怎么了？到底发生了什么事情！',
        '竹老：咳咳咳！臭小子，咳咳，你总算回来了，呵呵，没关系的，这一天迟早都会到来。。。',
        '陈阳：到底怎么了？老头儿！你别说了，我把药带回来了，你快。。。',
        '竹老：不用了，我之前的伤不是这药能缓解的，更何况现在已经来不及了。。。',
        '陈阳：肯定可以的，不行我在去抓药！你肯定没事的是不是？别吓我啊老头儿',
        '竹老：呵呵，咳咳咳！别说了，我已经活得够久了，现在是靠着最后一口气撑着，你不是一直想知道十五年前的事情吗，我现在告诉你！',
        '陈阳：不要了，我现在就去灵断山找仙药，一定可以救活你的。',
        '竹老：好好听着！咳咳咳！。。。',
        '竹老：当年的事情之所以不想告诉你，咳咳，是因为不想让你陷入复仇的怒火当中，而且这也是在保护你',
        '竹老：其实，你本来是当年陈国的皇子，在你五岁那年陈国被奸人也就是陈国大将军反叛，陈国皇室上下都被血洗，咳咳，先皇，也就是你父亲在死之前把你拖付给我',
        '竹老：他让我将你带走，因为那奸人，不只是想要皇位，而且还想要你！咳咳咳',
        '竹老：因为，你体内拥有龙灵血脉！咳咳咳，只有你的血脉才能激活那把天子之剑————天玄剑',
        '竹老：而那奸人，当年你父王怀疑他已经和魔族达成交易，事实也确实如此，他坐下第一大将刚才和我交过手，虽然我有伤在身，咳咳咳，但凭他的实力还耐我不得！',
        '陈阳：那为什么。。。',
        '竹老：因为他们的交易就是把你交给魔族，而他们则会获得魔族的力量，而那奸人坐下第一大将已经在半魔化状态了，想必那奸人更是。。。',
        '竹老：本来我一直不想把这些告诉你，想让你就这么活下去，咳咳咳！但是牵扯到了魔族那就不是陈国自己的事情了',
        '竹老：所以。。。咳咳咳，必须由你来结束这一切！为了陈国，为了人族和平，你不得不面对！',
        '陈阳：不，我不要面对，你让我怎么面对？老头儿你别说了，我们先治好你的伤。。。',
        '竹老：胡闹！咳咳咳！你总要面对的。。。现在离开这，去葬剑峡，把那把天玄剑拿上，面对这一切',
        '竹老：小子。。。咳咳咳！以后的路，咳咳咳，我就不能，咳咳，陪你走了。。。',
        '陈阳：不。。。不！老头儿？老头儿！',
        '陈阳：师父。。。！',
        '陈阳：师父，徒儿一定会牢记你的话！背负这个使命，找到天玄剑！',
    ],
    imgList = [
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/师父.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        "<img src='../../images/陈阳.png' style='display: block'>",
        ""
    ]

bodyBg.style.backgroundImage = 'url(../../images/望剑庐后山.jpg)';
btnNext.style.display = 'none';
box.innerHTML = imgList[0];
lang.innerHTML = dialog[0];
Bgbox.style.display = 'none';

setTimeout(() => {
    title.style.display = 'none';
    boxPB1.style.display = 'block';
}, 3000)

boxPB1.addEventListener('click', () => {
    boxPB1.style.display = 'none';
    btnNext.style.display = 'block';
})

btnNext.addEventListener('click', () => {
    click.play()
    if (!flag) return
    //执行以下代码
    flag = false
    if (n < imgList.length - 23) {
        box.innerHTML = imgList[n];
        lang.innerHTML = dialog[n];
        n++;
    } else if (n == imgList.length - 23) {
        bodyBg.style.backgroundImage = 'url(../../images/隐居之地.jpg)';
        title.style.display = 'block';
        title.innerHTML = '望剑庐'
        btnNext.style.display = 'none';
        setTimeout(() => {
            title.style.display = 'none';
            boxPB2.style.display = 'block';
        }, 3000)
        n++;
    } else if (n < imgList.length - 16) {
        box.innerHTML = imgList[n];
        lang.innerHTML = dialog[n];
        n++;
    } else if (n == imgList.length - 16) {
        boxPB3.style.display = 'block';
        btnNext.style.display = 'none';
        n++;
    } else if (n < imgList.length - 3) {
        box.innerHTML = imgList[n];
        lang.innerHTML = dialog[n];
        n++;
    } else if (n == imgList.length - 3) {
        boxPB4.style.display = 'block';
        btnNext.style.display = 'none';
        n++;
    } else if (n < imgList.length - 1) {
        box.innerHTML = imgList[n];
        lang.innerHTML = dialog[n];
        n++;
    } else if (n == imgList.length - 1) {
        bodyBg.style.backgroundColor = 'black';
        Bgbox.style.display = 'block';
        btnNext.style.display = 'none';
        setTimeout(function () {
            document.querySelector('.start').style.display = 'block';
        }, 11000)
        n++;
    } else if(n == imgList.length) {
        boxPB5.style.display = 'block';
        btnNext.style.display = 'none';
        n++;
    }

    setTimeout(() => {
        flag = true;
    }, 1200)
});
boxPB2.addEventListener('click', () => {
    boxPB2.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[1];
    lang.innerHTML = dialog[1];
})

boxPB3.addEventListener('click', () => {
    boxPB3.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[8];
    lang.innerHTML = dialog[8];
})

boxPB4.addEventListener('click', () => {
    boxPB4.style.display = 'none';
    btnNext.style.display = 'block';
    box.innerHTML = imgList[21];
    lang.innerHTML = dialog[21];
})

Bgbox.addEventListener('click', () => {
    Bgbox.style.display = 'none';
    bodyBg.style.backgroundImage = 'url(../../images/隐居之地.jpg)';
    title.style.display = 'block';
    title.innerHTML = '望剑庐'
    btnNext.style.display = 'none';
    boxImg.style.display = 'block';
    
    setTimeout(() => {
        title.style.display = 'none';
        btnNext.style.display = 'block';
        box.innerHTML = imgList[imgList.length - 2];
        lang.innerHTML = dialog[dialog.length - 1];
    }, 3000)
})

boxPB5.addEventListener('click', () => {
    endOne.style.display = 'block';
    boxPB5.style.display = 'none';
    Bgbox_1.style.display = 'block';
})