var galNumber = 5 -1; //Gal数量
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
    var torrentStatus = document.getElementsByName("torrent");
    if (timeNow >= 9 && timeNow <= 20) {
        for (var i = 0; i <= galNumber; i++) {
            torrentStatus[i].innerHTML = "做种中";
        }
    }
    else if (timeNow <= 8 || timeNow >= 21) {
        for (var i = 0; i <= galNumber; i++) {
            torrentStatus[i].innerHTML = "未作种";
        }
    }
}
window.onload = torrentTime();