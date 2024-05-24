let form = document.querySelector("form");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");
let ul = document.querySelector("ul");

const saveFeedback = (e) => {
  e.preventDefault();

  let li = document.createElement("li");
  li.className = "list-group-item rounded-0 shadow-sm";
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let button = document.createElement("button");
  button.className = "btn btn-sm btn-danger rounded-0 float-end";

  h1.innerText = select.value;
  p.innerText = textarea.value;
  button.innerText = "Delete";
  li.appendChild(h1);
  li.appendChild(p);
  li.appendChild(button);

  ul.appendChild(li);
  form.reset();
};

form.addEventListener("submit", saveFeedback);

const deleteFeedback = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", deleteFeedback);
