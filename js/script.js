// lesson-task-js1-module3-lesson1
const cors = "https://noroffcors.herokuapp.com/";
const url = "https://aw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const corsUrl = cors + url;
const results = document.querySelector(".results");



async function displayData() {
  try {
    const response = await fetch(corsUrl);
  const result = await response.json();

  for (let i = 0; i < result.length; i++) {

    if (i === 15) {
      break;
    }

    const teamName = result[i].teamName;
    const location = result[i].location;

    if(teamName.startsWith("C") || teamName.startsWith("c")) {
      continue;
    }
    results.innerHTML += `<h1>Team name: ${teamName}</h1>
                          <h2>Location: ${location}</h2>`

  }
  }
  catch(error) {
    console.log(error);
  }
}

displayData();
