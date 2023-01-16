function sayhuahuo() {
    var message = confirm("请遵守网络秩序，注意自己的言行。");
    var sayhuahuo = document.getElementById("sayhuahuo");
    if (message == true) {
        sayhuahuo.onclick = "null";
        sayhuahuo.innerHTML = "https://www.sayhuahuo.xyz/";
        sayhuahuo.href = "https://www.sayhuahuo.xyz/";
    }
    else if (message == false) {
        window.close();
    }
}
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
$(document).ready(function () {
    torrentTime();
    function load() {
        var url = "download.json"; // 获取 JSON 数据的链接
        var request;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest(); //发送 Ajax 请求，适用于 Chrome, mozilla 等浏览器 
        } else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP"); // 发送 Ajax 请求，适用于 IE 浏览器 
        }
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var jsonObj = JSON.parse(request.responseText); // 解析 JSON 数据
                alert(test1);
            }
        }
        request.open("get", url, true);
        request.send();
    }
    $("#downloadMethod1").removeClass("button");
    $("#downloadMethod1").addClass("buttonDisabled");
    $("#downloadMethod1").click(function () {
        $(this).addClass("buttonDisabled");
        $(this).removeClass("button");
        $("#downloadMethod2").removeClass("buttonDisabled");
        $("#downloadMethod2").addClass("button");
    });
    $("#downloadMethod2").click(function () {
        $(this).addClass("buttonDisabled");
        $(this).removeClass("button");
        $("#downloadMethod1").removeClass("buttonDisabled");
        $("#downloadMethod1").addClass("button");
    });
});