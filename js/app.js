const item = document.querySelector("#item");
const toDoBox = document.querySelector("#todo-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDO(this.value); // fuction call for get text under the input box
    this.value = "";
  }
});

const addToDO = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
     <i class="fas fa-times"></i>
    `;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};
