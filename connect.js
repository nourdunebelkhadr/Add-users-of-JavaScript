
import { userss ,connect as yes} from "./app.js";

console.log(userss);
var a = 1;

yes();

const Name=document.querySelector('.name');
const Tel=document.querySelector('.tel');
const Email = document.querySelector('.email');
const Table = document.querySelector('.table');
const Error = document.querySelector('#error');
const Button= document.querySelector('.btn2');
const InputMessage= document.querySelector('.inputMessage');
const text= document.querySelector('#text');
const TextInput = localStorage.getItem('textInput');

if (InputMessage) {
  text.textContent = TextInput;
}
 InputMessage.addEventListener('input', litter => {
  text.textContent = litter.target.value;
});

function saveLocalStorage() {
  localStorage.setItem('textInput',text.textContent );
}


Button.addEventListener('click', saveLocalStorage);

const H1 = document.createElement('h1');
  Error.appendChild(H1);
  
// const N = document.querySelector('.n');
// const T = document.querySelector('.t');
// const E = document.querySelector('.e');

const Btn = document.querySelector('.btn');
function AddUses() {
   
// const Tbody = document.createElement('tbody');
// const Thead = document.createElement('thead');
// const Tfoot = document.createElement('tfoot');

 
  
  if (Name.value  && Tel.value && Email.value) {
      

    const Tr = document.createElement('tr');
    const ID = document.createElement('td');
    const TD1 = document.createElement('td');
    const TD2 = document.createElement('td');
    const TD3 = document.createElement('td');

    

    Tr.appendChild(ID);
    Tr.appendChild(TD1);
    Tr.appendChild(TD2);
    Tr.appendChild(TD3);

    Table.appendChild(Tr);

    ID.innerText += a++;
    
   
     TD1.classList.add(a-1);
     TD2.classList.add(a-1);
    TD3.classList.add(a - 1);
    
    Tr.classList.add('active');
    
 
    TD1.innerText += Name.value;
    TD2.innerText += Tel.value;
    TD3.innerText += Email.value;
  
    const local = [TD1.innerText ,TD2.innerText,TD3.innerText];


  localStorage.setItem(a-1,JSON.stringify( local));
  
 
  
   
    if (a%2==0) {
      Tr.style.background = 'red';
     
    } else  {
      Tr.style.background = 'green';
     
    }

    H1.innerText = 'تمت العملية بنجاح ';
    H1.style.background ='green'; 
    
  } else if (H1.value !='تمت العملية بنجاح ')   {
      H1.innerText = 'أدخل جميع البيانات ';
        H1.style.background ='red';
    } 
 
 }


  

 

Btn.addEventListener('click', AddUses);



if (localStorage) {

 
    for (var i = 1; localStorage.length >= i; i++){
      const local = JSON.parse(localStorage.getItem(i));
      
    const Tr = document.createElement('tr');
    const ID = document.createElement('td');
    const TD1 = document.createElement('td');
    const TD2 = document.createElement('td');
    const TD3 = document.createElement('td');

    Tr.appendChild(ID);
    Tr.appendChild(TD1);
    Tr.appendChild(TD2);
    Tr.appendChild(TD3);

    Table.appendChild(Tr);

    ID.innerText += i;
    
     
    TD1.classList.add(i);
    TD2.classList.add(i);
    TD3.classList.add(i);
    
    Tr.classList.add('active');
    
    TD1.innerText += local[0];
    TD2.innerText += local[1];
    TD3.innerText += local[2];
      
      if (i%2==0) {
      Tr.style.background = 'red';
     
    } else  {
      Tr.style.background = 'green';
     
    }

  }
  
     
    }

    
  

const BtnRemove = document.querySelector('.remove');
BtnRemove.addEventListener('click', remove)
function remove() {
   localStorage.clear();
}
 

    