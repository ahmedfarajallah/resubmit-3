// select all sections
const branches = document.querySelectorAll("section");

// get ul element
const ulElement = document.getElementById("navbar__list");

// creat new fragment
const fragment = new DocumentFragment();



// make dynamically navigation
branches.forEach((branch) => {
  // creat li element
  const liElement = document.createElement("li");
  // creat anchor element
  const anchorElement = document.createElement("a");
  // add class name to li element
  anchorElement.className = "menu__link";
  // add href attribute to the anchor
  anchorElement.href = `#${branch.id}`;
  //add section title to anchor
  anchorElement.textContent = branch.dataset.acontent;
  // append a element to the li element
  liElement.appendChild(anchorElement);
  // append li to fragment
  fragment.appendChild(liElement);

  // smooth behavior
  anchorElement.onclick = function (e) {
    e.preventDefault();
    branch.scrollIntoView({ behavior: "smooth" });
  };
});
// append fragment to the ul
ulElement.appendChild(fragment);



// Make highlights on section link when the section view at the scroll area
window.onscroll = (_) => {
  branches.forEach((branch) => {
    let branchTop = branch.getBoundingClientRect().top;
    let connect = document.querySelector(`a[href="#${branch.id}"]`);
    if (branchTop >= -400 && branchTop <= 100) {
      connect.classList.add("active");
      connect.classList.add("your-active-class");
    } else {
      connect.classList.remove("active");
      connect.classList.remove("your-active-class");
    }
  });
};
