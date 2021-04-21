console.log("hello world");

// datatypes ->
     //java->primitive->int,float,double,boolean
     //non primitive-> stacks, arrays

     //javascript
     //Number(int,float,double),Boolean,String('',""),undefined,Null,Object
    
     //ES6->ecma script 6
     //two keyword let and const

     //dynamic casting
     let a=10;
     //let keyword->block scoped
     console.log(a);
     if (true){
          a=20;
          console.log(a);
     }
     console.log(a);

     //dynamic casting
     let b=10;
     //let keyword->block scoped
     console.log(b);
     if (true){
          let b=20;
          console.log(b);
     }
     console.log(b);

     //const=>constant-block scoped and constant
     const pi=22/7;
     console.log(pi);
     //pi=100;(not possible)
     let c=true;
     let d=3.14;
     let e="i am a string";
     let f=undefined;
     let g;
     //console.log(g);

     //non primitive
     let values=[1,2,3,4];
     console.log(values);
     values.push("prachi");
     console.log(values);
     //function,object,string,int,boolean
     values.pop();
     console.log(values);

     //push => add at the end 
//pop => delete from the end

// shift => delete a element from the starting 
// unshift => add a element in the starting of the array
// console.log(values.shift());
// console.log(values);

// Objects => key values pair
// keys => unique

let obj = {
    "Full Name":"Steve Rogers",
    place:"Queens",
    movies:["captain america" , "winter soldier" , {
        bestie : "bucky",
        nickname:"wintersoldier",
        partner : "falcon",
        weaknes : ["brainwash"]
    }]
}

console.log(obj.movies[2].weaknes[0][5])
console.log(obj.movies[2].weaknes[0].substring(1,5))


// get a value of a key in object
// dot notation => literal check
// console.log(obj.name);
// console.log(obj.movies);


let key = "place";
// console.log(obj.key); //=> it will check if there is a key named "key"
//console.log(obj[key]);

// square brackets notation
obj["place"];
obj["Full Name"];

obj.skills = ["martial arts" , "taekwondo"];
obj.place = "New york";
// console.log(obj);

