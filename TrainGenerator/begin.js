
function* generator(){
    yield "PoughKeepie";
    yield  "Newburgh";
    yield "PeekSkill";
    yield "Bonkers";
    yield "Bronx";
    yield "GrandCentral";
}

let button = document.querySelector('#next-stop');

let genFunc = generator();

button.addEventListener('click', () => {
    let currStop = genFunc.next();
    if (currStop.done){
        console.log("We Made it!");
        button.setAttribute("disabled", true);
    }else {
        console.log(currStop.value);
    }
});
