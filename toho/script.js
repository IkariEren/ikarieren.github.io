function torrentTime() {
    var timeNow = new Date().getHours();
    var status = document.getElementById('torrent');
    if (timeNow >= 9 && timeNow <= 20) {
        status.innerHTML = '做种状态：做种中';
    }
    else if (timeNow <= 8 || timeNow >= 21) {
        status.innerHTML = '做种状态：未作种';
    }
}
function checkVisited() {
    var status = document.cookie;
    if (status != 'visited=1') {
        $('#infoModal').modal('show');
        setVisited();
    }
}
function setVisited() {
    document.cookie = 'visited = 1;';
}
function switchPage(page) {
    var pageNum = 1;
    var url;
    if (page == 1) {
        url = 'table/int.json';
        pageNum = 1;
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('page-item')[i].removeClass('onActive');
        }
        $('#page1').addClass('onActive');
    }
    if (page == 2) {
        url = 'table/old.json';
        pageNum = 2;
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('page-item')[i].removeClass('onActive');
        }
        $('#page2').addClass('onActive');
    }
    if (page == 3) {
        url = 'table/float1.json';
        pageNum = 3;
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('page-item')[i].removeClass('onActive');
        }
        $('#page3').addClass('onActive');
    }
    if (page == 4) {
        url = 'table/float2.json';
        pageNum = 4;
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('page-item')[i].removeClass('onActive');
        }
        $('#page4').addClass('onActive');
    }
    if (page == 5) {
        url = 'table/unofficial.json';
        pageNum = 5;
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName('page-item')[i].removeClass('onActive');
        }
        $('#page5').addClass('onActive');
    }
    if (page == 'previous' && pageNum >= 2) {
        switchPage(pageNum - 1);
    }
    if (page == 'next' && pageNum <= 4); {
        switchPage(pageNum + 1);
    }
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        method: 'get',
        url: url,
        theadClasses: 'thead-dark',
        columns: [{
            field: 'code',
            title: '游戏编号'
        },
        {
            field: 'name',
            title: '游戏名'
        },
        {
            field: 'official',
            title: '官方购买链接'
        },
        {
            field: 'download',
            title: '下载链接'
        },
        {
            field: 'chinese',
            title: '汉化',
        }
        ]
    });
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    switchPage(1);
    $('#title').c.page - itemck(function () {
        $('#infoModal').modal('show');
    });
});