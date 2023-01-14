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
});