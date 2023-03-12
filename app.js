
const items1 = ["1", "2", "3", "4","5","6", "7", "8", "9","10"];

const [a, b, d, e, ...rest] = items1;

const items2 = ["11", "12", "113", "14","15","16", "17", "18", "19","20"];

const newItems = [...items1, ...items2];

console.log(newItems);

const user = {
    name: 'nour',
    photos: ["1", "2", "3", "4"],
    age: 21,
    langue_arabe: {
        module: 6,
        cours: 10
    },

};

const { name, photos, age, langue_arabe }= user;
    
   

console.log(langue_arabe);

//IFFE  عرض الدالة بشكل تلقائي

(function hello() {
    console.log('WAAAW');
})();

function users() {
    const name = "nour";

    const displayName=function(greeting){
        console.log( greeting+name );
    }

    return displayName;
}

const say = users();

say('hello ');


//of connect

function connect() {
    console.log(10);
}


const userss = {
    name: 'nour',
    age:21
}



export { userss, connect };
    
    

