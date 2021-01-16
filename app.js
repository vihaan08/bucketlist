var bucketlist = [];

var listItems =  document.getElementById("list-container");

function add(){
    let value = document.getElementById("input-field").value;
    bucketlist.push(value);
    show ();
}

function show(){
    listItems.innerHTML = "";
    for(let i=0;i<bucketlist.length;i++){
        let li = document.createElement('li');
        li.innerHTML=bucketlist[i]+`<span><img class="checked" onclick="remove(`+i+`)" src="https://i1.faceprep.in/tick-mark.png"/></span>`;
        li.className="list";
        listItems.appendChild(li);
    }
}

function remove(i){
    bucketlist.splice(i,1);
    show();
}
function reset(){
    bucketlist= [];
    show();
}