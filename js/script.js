let boot = document.getElementById("push");
const task = {
  txt: "",
  nu: 1,
};

boot.onclick = function () {
  let el, x;
  x = document.getElementById("todo-input").value;
  if (x == "") {
    alert("Rajouter une tâche");
  } else if (x.length <= 5) {
    alert("La tâche est trop courte (min = 5 caractères)");
  } else if (x.length >= 25) {
    alert("La tâche est trop longue (max = 25 caractères)");
  } else {
    console.log("Tout est ok pour envoyer");
    document.getElementById("tasks").innerHTML += `
    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom">
    <span class="my-0 taskname">-${x}</span>
    <button class="btn btn-danger delete">Delete</button>
    </div>
    `;
    // delete task
    let taskDelete = document.querySelectorAll(".delete");
    for (let i = 0; i < taskDelete.length; i++) {
      taskDelete[i].onclick = function () {
        console.log("click delete");
        this.parentNode.remove();
      };
    }
    // task done
    let taskDone = document.querySelectorAll(".taskname");
    for (let i = 0; i < taskDone.length; i++) {
      taskDone[i].onclick = function () {
        console.log("task done");
        this.classList.toggle("completed");
      };
    }
    //
  }
};
