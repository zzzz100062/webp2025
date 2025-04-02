var count = 1;

function addfunction(){
    var btn = document.createElement("Button");
    btn.innerHTML = `Click Me! (${count})`;
    btn.setAttribute("id", "btn" + count++);
    btn.setAttribute("class","btn btn-outline-danger")
    console.log(btn)
    document.body.appendChild(btn);
}

function deletefunction(){
    var btn = document.getElementById("btn" + --count)
   console.log(btn);
    document.body.removeChild(btn);
}