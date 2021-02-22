const createElement = (tag, classes) => {
    const element = document.createElement(tag);
    element.className = classes;
    return element;
  }

const myDiv = createElement('div', 'test');
const myButton = createElement('button', 'btn btn-small');

const hasClass = (element, classes) => {

  return element.classList.contains(classes);
}
hasClass(myDiv, "test"); //true
hasClass(myDiv, "aaa");//false





























































































