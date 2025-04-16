var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataUrl, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText); 
        var photos = data.photos.photo;          

        var dataset = photos.map(function (item) {
            return {
                urls: {
                    small: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`
                }
            };
        });

        add_new_img(dataset);
    };
}

function add_new_img(dataset) {
    var gal = document.getElementById("gallery");
    dataset.forEach(function (item) {
        console.log(item);
        var img = document.createElement("img");
        img.setAttribute("src", item.urls.small);
        gal.appendChild(img);
    });
}
