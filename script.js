const addTask = () => {
  let task = document.querySelector("#task").value;
  document.querySelector("tbody").innerHTML += `
    <tr>
        <td>${task}</td>
        <td><input type="checkbox"></td>
    </tr>  `;
  document.querySelector("#task").value = "";
};

const clearTasks = () => {
  document.querySelector("tbody").innerHTML = ``
};
