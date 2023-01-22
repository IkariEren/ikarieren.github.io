var INT_MAX = Number.MAX_SAFE_INTEGER;
function torrentTime() {
    var timeNow = new Date().getHours();
    var torrentStatus = document.getElementById("torrent");
    if (timeNow >= 9 && timeNow <= 20) {
        torrentStatus.innerHTML = "做种状态：做种中";
    }
    else if (timeNow <= 8 || timeNow >= 21) {
        torrentStatus.innerHTML = "做种状态：未作种";
    }
}
function downloadSet(method) {
    var url = "download.json";
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            var jsonObj = JSON.parse(request.responseText);
            var downloadMethods = document.getElementsByName("download");
            if (method == 0) {
                for (var i = 0; i < downloadMethods.length; i++) {
                    downloadMethods[i].innerHTML = "BT种子";
                    downloadMethods[i].href = jsonObj.download[i].bt;
                    downloadMethods[i].className = "button";
                }
            }
            if (method == 1) {
                for (var i = 0; i < downloadMethods.length; i++) {
                    downloadMethods[i].innerHTML = "度盘秒传";
                    downloadMethods[i].href = jsonObj.download[i].baidu;
                    downloadMethods[i].className = "link";
                }
            }
        }
    }
    request.open("get", url, true);
    request.send();
}
function checkVisited() {
    var status = document.cookie;
    if (status != "visited=1") {
        $("#infoModal").modal("show");
        setVisited();
    }
}
function setVisited() {
    var expires = INT_MAX;
    var exp = new Date();
    exp.setTime(exp.getTime() + expires);
    document.cookie = "visited = 1; expires = " + exp.toUTCString();
}
function sayhuahuo() {
    $("#infoModal").modal("hide");
    setTimeout('$("#sayhuahuoModal").modal("show");', 125);
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    $("#downloadMethod1").removeClass("button");
    $("#downloadMethod1").addClass("buttonDisabled");
    downloadSet(0);
    $("#title").click(function () {
        $("#infoModal").modal("show");
    });
    $("#downloadMethod1").click(function () {
        $(this).addClass("buttonDisabled");
        $(this).removeClass("button");
        $("#downloadMethod2").removeClass("buttonDisabled");
        $("#downloadMethod2").addClass("button");
        downloadSet(0);
    });
    var alert01 = true;
    $("#downloadMethod2").click(function () {
        if (alert01 == true) {
            $("#downloadMethod2Modal").modal("show");
            alert01 = false;
        }
        $(this).addClass("buttonDisabled");
        $(this).removeClass("button");
        $("#downloadMethod1").removeClass("buttonDisabled");
        $("#downloadMethod1").addClass("button");
        downloadSet(1);
    });
});