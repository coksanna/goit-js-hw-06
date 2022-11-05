const ulLinkEl = document.querySelectorAll('.item');
console.log('Number of categories:', ulLinkEl.length);
// console.log(ulLinkEl);
ulLinkEl.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);  
    console.log('Elements:', element.lastElementChild.children.length);
});

