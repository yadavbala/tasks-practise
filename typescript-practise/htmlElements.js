var title = document.getElementById('title');
var username = document.getElementById('username');
var para1 = document.getElementById('para');
if (para1) {
    para1.onclick = function () {
        console.log('clicked');
    };
}
var handleTitle1 = function () {
    title.innerHTML = 'im learning typescript';
};
title.addEventListener('mouseover', handleTitle1);
var handleChange = function () {
    if (username) {
        console.log(username.value);
    }
};
/*const titleElement: HTMLElement = document.getElementById('title');

if(titleElement) {
  titleElement.innerHTML = 'Hey I am learning typescript';
  titleElement.onclick = () => {
    console.log('clicked');
  }
};

interface IFormElement extends HTMLElement {
  value: string;
}

const getValue = (): void => {
  const inputElement: HTMLInputElement = document.getElementById('input-name') as HTMLInputElement;

  if (inputElement) {
    console.log('value', inputElement.value);
  }
};*/ 
