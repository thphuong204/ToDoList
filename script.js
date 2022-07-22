const taskList = document.querySelector("#items");
let doneLists = document.querySelector(".done");
let doneBtns = document.querySelectorAll(".btn-done");
let deleteBtns = document.querySelectorAll(".btn-delete");
const filterBtn = document.querySelector("#filter");
const form = document.querySelector("form");
const newItem = document.querySelector("#new-item");


form.addEventListener("submit", function addNewItem() {
    const newGroup = document.createElement("li");
    newGroup.classList.add("input-group");
    newGroup.innerHTML = `
    <div class="content"></div>
    <div class="action">
        <input type="checkbox" class="btn btn-done">
        <button class="btn btn-delete">✖</button>
    </div>`;
    newGroup.childNodes[1].innerText = newItem.value;
    taskList.appendChild(newGroup);
    newItem.value = "";

    doneBtns = document.querySelectorAll(".btn-done");
    deleteBtns = document.querySelectorAll(".btn-delete");
    updateDoneBtnsChangeEventListeners();
    updateDeleteBtnsClickEventListeners();
}
)

const updateDoneBtnsChangeEventListeners = () => {
    doneBtns.forEach((btn) => {
        btn.addEventListener("change", (e) => {
            if (e.target.checked) {
                btn.parentNode.parentNode.classList.add("done");
            } else {
                btn.parentNode.parentNode.classList.remove("done");
            }
        })
    })
};

updateDoneBtnsChangeEventListeners();

const updateDeleteBtnsClickEventListeners = () => {
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            btn.parentNode.parentNode.remove();
        })
    })
};

updateDeleteBtnsClickEventListeners();

filterBtn.addEventListener("change", (e) => {
    doneLists = document.querySelectorAll(".done");
    if (e.target.checked) {
        doneLists.forEach((element) => {
            element.classList.add("hidden");
        })
    } else {
        doneLists.forEach((element) => {
            element.classList.remove("hidden");
        })
    }
})

