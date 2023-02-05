var num;
var page;
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
    var link;
    
    if (page == 1) {     
        link = 'table/int.json';
        num = 1;
    }
    if (page == 2) {
        link = 'table/old.json';
        num = 2;
    }
    if (page == 3) {
        link = 'table/float1.json';
        num = 3;
    }
    if (page == 4) {
        link = 'table/float2.json';
        num = 4;
    }
    if (page == 5) {
        link = 'table/unofficial.json';
        num = 5;
    }
    if ((page == 'previous') && (num >= 2)) {
        alert('1');
    }
    if ((page == 'next') && (num <= 4)); {
        alert('2');
    }
    $('#table').bootstrapTable('destroy');
    $('#table').bootstrapTable({
        method: 'get',
        url: link,
        theadClasses: 'table-dark',
        classes: 'table table-bordered text-center',
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
            title: '汉化'
        }
        ]
    });
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    switchPage(1);
    $('#title').click(function () {
        $('#info-modal').modal('show');
    });
});