let boot = document.getElementById("buton");
const task = [];

boot.onclick = function (el) {
  let x = document.getElementById("myText").value;
  task.push(x);
  for (let i = 0; i < task.length; i++) {
    const element = task[i];
    el += `<li>${element}</li>`;
  }
  document.getElementById("root").innerHTML = el;
};

// buton.onclick = function () {
//   onput = document.querySelector("#input").value;
//   boot.innerhtml = `
//   <li>${onput}</li>
//   `;
// };
// boot.innerHTML = `
// <li>dsgfrg</li>
// `;
