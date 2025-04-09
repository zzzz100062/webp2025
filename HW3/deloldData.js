var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var dataset = [];
var filteredData = [];
var currentPage = 1;
var pageSize = 10;

var xhr = new XMLHttpRequest();
xhr.open("GET", openUrl, true);
xhr.send();
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        dataset = JSON.parse(this.responseText);
        filteredData = dataset; 
        renderTable();
    }
}

function renderTable() {
    var tableBody = document.querySelector("#csie tbody");
    tableBody.innerHTML = "";

    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    var pageData = filteredData.slice(start, end);

    pageData.forEach(function(data) {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = data.title;
        row.insertCell(1).textContent = data.showInfo[0]?.location || "無資料";
        row.insertCell(2).textContent = data.showInfo[0]?.price || "無資料";
    });


    var pageInfo = document.getElementById("pageInfo");
    var totalPages = Math.ceil(filteredData.length / pageSize);
    pageInfo.textContent = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function nextPage() {
    if (currentPage < Math.ceil(filteredData.length / pageSize)) {
        currentPage++;
        renderTable();
    }
}


function filterData() {
    var keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    filteredData = dataset.filter(data => data.title.toLowerCase().includes(keyword));
    currentPage = 1; 
    renderTable();
}
