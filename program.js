let dDay;
let days = [
  "Tuesday 16",
  "Wednesday 17",
  "Thurdsay 18",
  "Friday 19",
  "Saturday 20",
  "Sunday 21",
];

let incontri = [
  { day:"tuesday", time: "18.30-22", title: "Grand opening", name:"", description: "" },
  { day:"wednesday", time: "11.30-12.30",  title:"Material Intelligence_ Beyond Image.",name: "Tania Winkler", description: "With both AI and Material Intelligence rooted in collective memory, this year superMATTER RCA Platform proposes materiality as container (repository) and signs of human capital to explore the incursion of new technologies in the production of new spatial identities." },
  { day:"wednesday", time: "14.30-15.30",  title:"Design and design schools in/for the ecological transition. Care, proximity, empowering, communing: four keywords to orient design education. ",name: "Ezio Manzini", description: "How does the RCA Interior Design Programme engage with the challenges we are currently facing in the world? Climate Curriculums describes thinking and work that relates to climatic and socially based challenges." },
  { day:"wednesday", time: "17-18", title: "Graeme Brooker", name:"Climate Curriculum(s)", description: "How does the RCA Interior Design Programme engage with the challenges we are currently facing in the world? Climate Curriculums describes thinking and work that relates to climatic and socially based challenges." },
];


let programCtn= document.getElementById("program_container");
//console.log(programCtn)

for (let i = 0; i < days.length; i++) {
  let div= document.createElement("div");
  div.classList.add("dDay")
  div.setAttribute("id", days[i])

  let pDay= document.createElement("p");
  console.log(pDay)
  pDay.innerHTML=days[i]
  pDay.classList.add("pDay")
  pDay.classList.add("titoli")
  div.appendChild(pDay)

  programCtn.appendChild(div)
}

let dDayNodeList= document.getElementsByClassName("dDay")
let dDays= Array.from(dDayNodeList)
console.log(dDays)

