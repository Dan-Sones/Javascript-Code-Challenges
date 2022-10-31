function clock(){
   const clockNode = document.querySelector("#clock"); //'grab' the element from the DOM
   return setInterval(() => { //run this function at each interval, where the interval is specified in the 2nd argument (1000)
      let date = new Date(); //create a new date
      let tick = date.toLocaleTimeString(); //convert the date to a time string
      clockNode.textContent = tick; //set the text content of the clock to be the above converted string
   }, 1000);
}

clock();