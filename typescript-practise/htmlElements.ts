

const title:HTMLElement=document.getElementById('title')! as HTMLElement;

const username:HTMLInputElement=document.getElementById('username')! as HTMLInputElement;

const para1:HTMLElement=document.getElementById('para')! as HTMLElement

if(para1){
    para1.onclick=()=>{
        console.log('clicked')
    }
}

if(title){
  title.onmouseover=()=>{
    console.log('mouse over')
  }
}


const handleTitle1=()=>{
    title.innerHTML='im learning typescript'
}

title.addEventListener('mouseover',handleTitle1)

const handleChange=():void=>{
    if(username){
        console.log(username.value)
    }
}

interface IFormElement extends HTMLElement{
    value:string,
    name:string
}


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