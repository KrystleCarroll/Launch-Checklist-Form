// Write your JavaScript code here!
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) { return response.json()})
        .then(function (planetaryJson) {
            console.log(planetaryJson[1]);
        /* This block of code shows how to format the HTML once you fetch some planetary JSON!
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${Pern}</li>
           <li>Diameter: ${measurement is under dispute}</li>
           <li>Star: ${Alpha Sagittarius (a.k.a. Rukbat)}</li>
           <li>Distance from Earth: ${Varies - find a library}</li>
           <li>Number of Moons: ${2}</li>
        </ol>
        <img src="${"https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"}">
        */
            let missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = 
                    `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planetaryJson[2].name}</li>
               <li>Diameter: ${planetaryJson[2].diameter}</li>
               <li>Star: ${planetaryJson[2].star}</li>
               <li>Distance from Earth: ${planetaryJson[2].distance}</li>
               <li>Number of Moons: ${planetaryJson[2].moons}</li>
            </ol>
                <img src="${planetaryJson[2].image}">`

        });
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let submitButton = document.getElementById("formSubmit");
    let fuelLevel = document.getElementById("fuelLevelNumber");
    let cargoLevel = document.getElementById("cargoMassNumber");
   

    submitButton.addEventListener("click", function (event) {
        

        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuelLevelNumber = Number(fuelLevel.value);
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargoMassNumber = Number(cargoMass.value);
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            return;
        }
        if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
            alert("Has to be a name!");
            event.preventDefault();
            return;
        }
        if (isNaN(fuelLevelNumber) || isNaN(cargoMassNumber)) {
            alert("Has to be a number!");
            // stop the form submission
            event.preventDefault();
            return;
        }

        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerText = pilotName.value;

        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerText = copilotName.value;

        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        fuelStatus.innerText = fuelLevel.value;
        cargoStatus.innerText = cargoLevel.value;

        if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
            let pilotStatusVisiblity = document.getElementById("faultyItems");
            pilotStatusVisiblity.style.visibility = "visible";

            let launchNotReady = document.getElementById("launchStatus");
            launchNotReady.style.color = "red";
            pilotStatus.innerText = `${pilotName.value} is ready for Launch`;
            copilotStatus.innerText = `${copilotName.value} is ready for Launch`;
            fuelStatus.innerText = "There is not enough fuel for the journey";
            cargoStatus.innerText = "There is too much mass for the shuttle to take off"
            launchStatus.innerText = "Shuttle not ready for launch"
        } else if (fuelLevel.value < 10000 && cargoLevel.value < 10000) {
                let pilotStatusVisiblity = document.getElementById("faultyItems");
            pilotStatusVisiblity.style.visibility = "visible";
                let launchNotReady = document.getElementById("launchStatus");
            launchNotReady.style.color = "red";
            pilotStatus.innerText = `${pilotName.value} is ready for Launch`;
            copilotStatus.innerText = `${copilotName.value} is ready for Launch`;
            fuelStatus.innerText = "There is not enough fuel for the journey";
            cargoStatus.innerText = "Cargo level low enough to launch";
            launchStatus.innerText = "Shuttle not ready for launch"
        } else if (fuelLevel.value > 10000 && cargoLevel.value > 10000) {
                let pilotStatusVisiblity = document.getElementById("faultyItems");
            pilotStatusVisiblity.style.visibility = "visible";
                let launchNotReady = document.getElementById("launchStatus");
            launchNotReady.style.color = "red";
            pilotStatus.innerText = `${pilotName.value} is ready for Launch`;
            copilotStatus.innerText = `${copilotName.value} is ready for Launch`;
            fuelStatus.innerText = "Fuel level high enough to launch";
            cargoStatus.innerText = "There is too much mass for the shuttle to take off"
            launchStatus.innerText = "Shuttle not ready for launch"
        } else {
                let launchReady = document.getElementById("launchStatus");
            launchReady.style.color = "green";
            launchStatus.innerText = "Shuttle is ready for launch";
                let faultyItemsInvisible = document.getElementById("faultyItems");
            faultyItemsInvisible.style.visibility = "hidden";
        };


        console.log(fuelStatus);
        console.log(cargoStatus);
        console.log(launchStatus);
    })
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${Pern}</li>
   <li>Diameter: ${measurement is under dispute}</li>
   <li>Star: ${Alpha Sagittarius (a.k.a. Rukbat)}</li>
   <li>Distance from Earth: ${Varies - find a library}</li>
   <li>Number of Moons: ${2}</li>
</ol>
<img src="${"https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"}">
*/
