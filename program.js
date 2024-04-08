let days = ["Tuesday 16", "Wednesday 17", "Thursday 18","Friday 19","Saturday 20","Sunday 21",];
let propClass = ["day", "time", "title", "name", "description"];

let dDay;
let pDay;
let divI;
let p;

let programCtn = document.getElementById("program_container");

for (let i = 0; i < days.length; i++) { //creo i giorni
  dDay = document.createElement("div");
  dDay.classList.add("dDay");
  dDay.setAttribute("id", days[i]);

  let pDay = document.createElement("p");
  //console.log(pDay)
  pDay.innerHTML = days[i];
  pDay.classList.add("pDay");
  pDay.classList.add("titoli");
  dDay.appendChild(pDay);

  programCtn.appendChild(dDay);
}

let dDays = Array.from(document.getElementsByClassName("dDay"));

for (let j = 0; j < incontri.length; j++) { //creo i div degli incontri
  divI = document.createElement("div");
  divI.classList.add("incontro");
  divI.classList.add(incontri[j].day);
  console.log(divI);
  programCtn.appendChild(divI);

  for (let i = 1; i < propClass.length; i++) { //creo i paragrafi
    p = document.createElement("p");
    p.classList.add(propClass[i]);
    //p.classList.add("text");
    p.innerHTML = incontri[j][propClass[i]];
    divI.appendChild(p);
  }

  for (let i = 0; i < 7; i++) { //li assegno ai giorni
    if (divI.classList.contains(i)) {
      dDays[i-1].appendChild(divI);
    }
  }
}

let titles = Array.from(document.getElementsByClassName("title"));
titles.forEach((e) => {
  e.classList.add("titoletti");
});
