function torrentTime() {
    var timeNow = new Date().getHours();
    var status = document.getElementById("torrent");
    if (timeNow >= 9 && timeNow <= 20) {
        status.innerHTML = "做种状态：做种中";
    }
    else if (timeNow <= 8 || timeNow >= 21) {
        status.innerHTML = "做种状态：未作种";
    }
}
function checkVisited() {
    var status = document.cookie;
    if (status != "visited=1") {
        $("#infoModal").modal("show");
        setVisited();
    }
}
function setVisited() {
    document.cookie = "visited = 1;";
}
function switchPage(page) {
    var url;
    if (page == 1) {
        url = "table/int.json";
    }
    if (page == 2) {
        url = "table/old.json";
    }
    if (page == 3) {
        url = "table/float1.json";
    }
    if (page == 4) {
        url = "table/float2.json";
    }
    $("#table").bootstrapTable("destroy");
    $("#table").bootstrapTable({
        method: "get",
        url: url,
        columns: [{
            field: "code",
            title: "游戏编号"
        },
        {
            field: "name",
            title: "游戏名"
        },
        {
            field: "official",
            title: "官方购买链接"
        },
        {
            field: "download",
            title: "下载链接"
        },
        {
            field: "chinese",
            title: "汉化",
        }
        ]
    });
}
$(document).ready(function () {
    checkVisited();
    torrentTime();
    switchPage(1);
    $("#title").click(function () {
        $("#infoModal").modal("show");
    });
});