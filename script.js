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
$(document).ready(function () {
    torrentTime();
    $("#downloadMethod1").removeClass("button");
    $("#downloadMethod1").addClass("buttonDisabled");
    downloadSet(0);
    var alert02 = true;
    $("#sayhuahuo").click(function () {
        if (alert02 == true) {
            alert("请遵守网络秩序，注意自己的言行。");
            alert02 = false;
        }
        $(this).attr({ "href": "https://www.sayhuahuo.xyz/" });
        $(this).removeClass("text");
        $(this).addClass("link");
        $(this).mouseenter(function () {
            $(this).text("https://www.sayhuahuo.xyz/");
        });
        $(this).mouseleave(function () {
            $(this).text("花火学园");
        });
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
            alert("不要在线解压！\n不要在线解压！\n不要在线解压！");
            alert01 = false;
        }
        $(this).addClass("buttonDisabled");
        $(this).removeClass("button");
        $("#downloadMethod1").removeClass("buttonDisabled");
        $("#downloadMethod1").addClass("button");
        downloadSet(1);
    });
});