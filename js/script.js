const container = document.querySelector(".container")

// SCRIVERE PROGRAMMA CHE STAMPI IN CONSOLE NUMERI DA 1 A 100
for(let i = 1; i <= 100; i++){
    const element = document.createElement("div");
    element.classList.add("box");
    element.innerText = i;  
    container.append(element);
    if(i % 3 === 0 && i % 5 === 0){
        element.innerText = "fizzbuzz";
        element.classList.add("fizzbuzz");
        console.log('FizzBuzz');
    }else if(i % 5 === 0){
        element.innerText = "buzz";
        element.classList.add("buzz");
        console.log('Buzz');
    }if(i % 3 === 0){
            element.innerText = "fizz";
            element.classList.add("fizz");
            console.log('Fizz');
    }else{
        element.classList.add("standard");
        console.log(i);
    };
};
