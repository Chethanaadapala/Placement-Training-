function changeText() {
    document.getElementById("title").innerText = "Text Changed!";
}
function showName() {
    const name = document.getElementById("nameInput").value;
    alert("Your name is: " + name);
}
function addTask(){
    let task = document.getElementById("task").value;
    let li = document.createElement("li");
    li.innerHTML = task;
    document.getElementById("list").appendChild(li);
}