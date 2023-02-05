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
var downloadMethod = 1;
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
            var json = JSON.parse(request.responseText);
            var download = document.getElementsByName('download');
            for (var i = 0; i < download.length; i++) {
                download[i].href = 'javascript:void(0);';
                download[i].target = '_self';
            }
            if (method == 1) {
                downloadMethod = 1;
                for (var i = 0; i < download.length; i++) {
                    download[i].innerHTML = 'BT种子';
                }
                $("a[name='download']").click(function () {
                    if (downloadMethod == 1) {
                        $('#download-method1-modal').modal('show');
                        document.getElementById('copy').innerHTML = '点我复制';
                        var num = $(this).index("a[name='download']");
                        document.getElementById('download-method1-bt').href = json.download[num].bt;
                        document.getElementById('alert-game-title-bt').innerHTML = json.download[num].title;
                        document.getElementById('alert-download-bt').innerHTML = '您将要下载：' + '<code>' + json.download[num].bt + '</code>';
                        for (var i = 0; i < json.alert.length; i++) {
                            if (json.alert[i].id == json.download[num].title) {
                                if (json.alert[i].class == "all" || json.alert[i].class == 1) {
                                    document.getElementById('alert-text-bt').innerHTML = '说明：<br />' + json.alert[i].text;
                                    break;
                                }
                            }
                            else {
                                document.getElementById('alert-text-bt').innerHTML = '';
                            }
                        }
                        $('#download-method1-magnet').click(function () {
                            $('#download-method1-modal').modal('hide');
                            setTimeout("$('#download-method1-magnet-modal').modal('show');", 125);
                            document.getElementById('magnet').innerHTML = json.download[num].magnet;
                        });
                    }
                });
            }
            if (method == 2) {
                downloadMethod = 2;
                for (var i = 0; i < download.length; i++) {
                    download[i].innerHTML = '一键秒传';
                }
                $("a[name='download']").click(function () {
                    if (downloadMethod == 2) {
                        $('#alert-modal').modal('show');
                        var num = $(this).index("a[name='download']");
                        document.getElementById('jump').href = json.download[num].bdlink;
                        document.getElementById('alert-game-title').innerHTML = json.download[num].title;
                        document.getElementById('alert-download').innerHTML = '<p>您将要前往：</p>' + '<code style="display: block">' + json.download[num].bdlink + '</code>';
                        for (var i = 0; i < json.alert.length; i++) {
                            if (json.alert[i].id == json.download[num].title) {
                                document.getElementById('alert-text').innerHTML = '';
                                if (json.alert[i].class == "all" || json.alert[i].class == 2) {
                                    document.getElementById('alert-text').innerHTML = '说明：<br />' + json.alert[i].text;
                                    break;
                                }
                            }
                            else {
                                document.getElementById('alert-text').innerHTML = '';
                            }
                        }
                    }
                });
            }
            if (method == 3) {
                downloadMethod = 3;
                for (var i = 0; i < download.length; i++) {
                    download[i].innerHTML = '百度网盘';
                }
                $("a[name='download']").click(function () {
                    if (downloadMethod == 3) {
                        $('#alert-modal').modal('show');
                        var num = $(this).index("a[name='download']");
                        document.getElementById('jump').href = json.download[num].bdshare;
                        document.getElementById('alert-game-title').innerHTML = json.download[num].title;
                        document.getElementById('alert-download').innerHTML = '<p>您将要前往：</p>' + '<code>' + json.download[num].bdshare + '</code>';
                        for (var i = 0; i < json.alert.length; i++) {
                            if (json.alert[i].id == json.download[num].title) {
                                document.getElementById('alert-text').innerHTML = '';
                                if (json.alert[i].class == "all" || json.alert[i].class == 3) {
                                    document.getElementById('alert-text').innerHTML = '';
                                    document.getElementById('alert-text').innerHTML = '说明：<br />' + json.alert[i].text;
                                    break;
                                }
                            }
                            else {
                                document.getElementById('alert-text').innerHTML = '';
                            }
                        }
                    }
                });
            }
        }
    }
    request.open('get', url, true);
    request.send();
}
function checkVisited() {
    var status = document.cookie;
    if (status != 'visited=1') {
        $('#info-modal').modal('show');
        setVisited();
    }
}
function setVisited() {
    document.cookie = 'visited = 1;';
}
function sayhuahuo() {
    $('#info-modal').modal('hide');
    setTimeout("$('#sayhuahuo-modal').modal('show');", 125);
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    $('#download-method1').addClass('disabled');
    downloadSet(1);
    $('#title').click(function () {
        $('#info-modal').modal('show');
    });
    $('#download-method1').click(function () {
        $(this).addClass('disabled');
        $('#download-method2, #download-method3').removeClass('disabled');
        $('#download-method2, #download-method3').addClass('button');
        downloadSet(1);
    });
    var alert01 = true;
    $('#download-method2').click(function () {
        if (alert01 == true) {
            $('#download-method2-modal').modal('show');
            alert01 = false;
        }
        $(this).addClass('disabled');
        $('#download-method1, #download-method3').removeClass('disabled');
        $('#download-method1, #download-method3').addClass('button');
        downloadSet(2);
    });
    var alert02 = true;
    $('#download-method3').click(function () {
        if (alert02 == true) {
            $('#download-method3-modal').modal('show');
            alert02 = false;
        }
        $(this).addClass('disabled');
        $('#download-method1, #download-method2').removeClass('disabled');
        $('#download-method1, #download-method2').addClass('button');
        downloadSet(3);
    });
    var clipboard = new ClipboardJS('#copy');
    clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
        document.getElementById('copy').innerHTML = '已复制';
    });
    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        document.getElementById('copy').innerHTML = '复制失败';
    });
});