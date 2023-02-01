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
function downloadSet(method) {
    var url = 'download.json';
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            var jsonObj = JSON.parse(request.responseText);
            var downloadMethods = document.getElementsByName('download');
            if (method == 1) {
                for (var i = 0; i < downloadMethods.length; i++) {
                    downloadMethods[i].innerHTML = 'BT种子';
                    downloadMethods[i].href = jsonObj.download[i].bt;
                }
            }
            if (method == 2) {
                for (var i = 0; i < downloadMethods.length; i++) {
                    downloadMethods[i].innerHTML = '一键秒传';
                    downloadMethods[i].href = jsonObj.download[i].bdlink;
                }
            }
            if (method == 3) {
                for (var i = 0; i < downloadMethods.length; i++) {
                    downloadMethods[i].innerHTML = '百度网盘';
                    downloadMethods[i].href = jsonObj.download[i].bdshare;
                }
            }
        }
    }
    request.open('get', url, true);
    request.send();
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
function sayhuahuo() {
    $('#infoModal').modal('hide');
    setTimeout("$('#sayhuahuoModal').modal('show');", 125);
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    $('#downloadMethod1').addClass('disabled');
    downloadSet(1);
    $('#title').click(function () {
        $('#infoModal').modal('show');
    });
    $('#downloadMethod1').click(function () {
        $(this).addClass('disabled');
        $('#downloadMethod2, #downloadMethod3').removeClass('disabled');
        $('#downloadMethod2, #downloadMethod3').addClass('button');
        downloadSet(1);
    });
    var alert01 = true;
    $('#downloadMethod2').click(function () {
        if (alert01 == true) {
            $('#downloadMethod2Modal').modal('show');
            alert01 = false;
        }
        $(this).addClass('disabled');
        $('#downloadMethod1, #downloadMethod3').removeClass('disabled');
        $('#downloadMethod1, #downloadMethod3').addClass('button');
        downloadSet(2);
    });
    var alert02 = true;
    $('#downloadMethod3').click(function () {
        if (alert02 == true) {
            $('#downloadMethod3Modal').modal('show');
            alert02 = false;
        }
        $(this).addClass('disabled');
        $('#downloadMethod1, #downloadMethod2').removeClass('disabled');
        $('#downloadMethod1, #downloadMethod2').addClass('button');
        downloadSet(3);
    });
});