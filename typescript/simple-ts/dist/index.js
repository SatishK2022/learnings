"use strict";
// const myNumber: number = 10;
// console.log(myNumber);
// DOM Manipulation
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = document.getElementById("btn")!;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick = () => console.log("Clicked");
const myForm = document.getElementById("myForm");
const myInput = document.querySelector("form > input");
// const myResult = document.getElementById("result") as HTMLParagraphElement;
myForm.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const value = Number(myInput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
    console.log(value);
    console.log(typeof value);
};
