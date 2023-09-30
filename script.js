const agents = [{'name':"astra",'id':"41fb69c1-4189-7b37-f117-bcaf1e96f1bf"}, 
              {'name':"breach",'id':"5f8d3a7f-467b-97f3-062c-13acf203c006"}, 
              {'name': "brimstone",'id':"9f0d8ba9-4140-b941-57d3-a7ad57c6b417"}, 
              {'name':"chambre",'id':"22697a3d-45bf-8dd7-4fec-84a9e28c69d7"},
              {'name':"cypher",'id':"117ed9e3-49f3-6512-3ccf-0cada7e3823b"},
               {'name': "deadlock",'id':"cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"},
               {'name':"fade",'id':"dade69b4-4f5a-8528-247b-219e5a1facd6"}, 
               {'name':"gekko",'id':"e370fa57-4757-3604-3648-499e1f642d3f"}, 
               {'name':"harbor","id":"95b78ed7-4637-86d9-7e41-71ba8c293152"}, 
               {'name':"jett","id":"add6443a-41bd-e414-f6ad-e58d267f4e95"}, 
               {'name':"kayo","id":"601dbbe7-43ce-be57-2a40-4abd24953621"},
               {'name':"killjoy","id":"1e58de9c-4950-5125-93e9-a0aee9f98746"}, 
               {'name':"neon","id":"bb2a4828-46eb-8cd1-e765-15848195d751"}, 
               {'name':"omen","id":"8e253930-4c05-31dd-1b6c-968525494517"}, 
               {'name':"phoenix","id":"eb93336a-449b-9c1b-0a54-a891f7921d69"}, 
               {'name':"raze","id":"f94c3b30-42be-e959-889c-5aa313dba261"}, 
               {'name':"reyna","id":"a3bfb853-43b2-7238-a4f1-ad90e9e46bcc"}, 
               {'name':"sage","id":"569fdd95-4d10-43ab-ca70-79becc718b46"}, 
               {'name':"skye","id":"6f2a04ca-43e0-be17-7f36-b3908627744d"}, 
               {'name':"viper","id":"707eab51-4836-f488-046a-cda6bf494859"}, 
               {'name':"yoru","id":"7f94d92c-4234-0a36-9646-3a87eb8b5c89"},
               {'name':"sova","id":"320b2a48-4d9b-a075-30f1-1f93a9b638fa"}
            ]

function getIdByName(agentName) {
  const agent = agents.find(agent => agent.name === agentName);
  return agent ? agent.id : null;
}

const selectAgent = document.getElementById("selectedAgent")
let previousAgentImage = null;

agents.forEach(agent => {
  agentSelectImage = document.getElementById("agent-" + agent.name);
  agentSelectImage.addEventListener("click", (event) => {
    // Remove border from the previously selected agent image, if exists
    if (previousAgentImage) {
      previousAgentImage.style.border = "1px solid #ffffff50";
      previousAgentImage.querySelector('img').style.filter = "brightness(1)";
    }
    // Set border for the clicked agent image
    event.currentTarget.style.border = "1px solid #EFEF5A";
    event.currentTarget.querySelector('img').style.filter = "brightness(0.5)";
    // Update the previousAgentImage to the current one
    previousAgentImage = event.currentTarget;

    selectAgent.setAttribute("src", "assets/images/agents/" + agent.name + ".png");
    getAgentId(agent.id)
  });
});


function getAgentId(id) {
    const url = "https://valorant-api.com/v1/agents/"+id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => updatePlayerInfo(data)).catch((error) => {
        console.error("Error fetching agent data:", error);
      });
  }
  
  function updatePlayerInfo(data) {
    document.getElementById("player-and-abilities-info").style.display="block";
    const roleNameElement = document.getElementById("role-name");
    roleNameElement.innerHTML = data.data.role.displayName;
    document.getElementById("agent-name").innerHTML=data.data.displayName.toUpperCase();
    document.getElementById("info-player").setAttribute("src",data.data.role.displayIcon);
    document.getElementById("Abilitie1").setAttribute("src",data.data.abilities[1].displayIcon);
    document.getElementById("Abilitie2").setAttribute("src",data.data.abilities[0].displayIcon);
    document.getElementById("Abilitie3").setAttribute("src",data.data.abilities[2].displayIcon);
    document.getElementById("Abilitie4").setAttribute("src",data.data.abilities[3].displayIcon);
    document.getElementById("player-and-abilities-info").innerHTML=data.data.description;
    document.getElementById("mini-title-role-player").innerHTML=data.data.role.displayName;
    document.getElementById("role-text").innerHTML=data.data.role.description;
    document.getElementById("info-player").addEventListener("click",()=>{
    document.getElementById("player-and-abilities-info").style.display="block";
    document.getElementById("mini-title-role-player").innerHTML=data.data.role.displayName;
    document.getElementById("role-text").innerHTML=data.data.role.description;
    })
    document.getElementById("Abilitie1").addEventListener("click",()=>{
      document.getElementById("player-and-abilities-info").style.display="none";
      document.getElementById("role-text").innerHTML=data.data.abilities[1].description;
      document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[1].displayName;
    })
    document.getElementById("Abilitie2").addEventListener("click",()=>{
      document.getElementById("player-and-abilities-info").style.display="none";
      document.getElementById("role-text").innerHTML=data.data.abilities[0].description;
      document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[0].displayName;
    })
    document.getElementById("Abilitie3").addEventListener("click",()=>{
      document.getElementById("player-and-abilities-info").style.display="none";
      document.getElementById("role-text").innerHTML=data.data.abilities[2].description;
      document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[2].displayName;
    })
    document.getElementById("Abilitie4").addEventListener("click",()=>{
      document.getElementById("player-and-abilities-info").style.display="none";
      document.getElementById("role-text").innerHTML=data.data.abilities[3].description;
      document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[3].displayName;
    })

    
    
  }

  window.addEventListener("load",()=>{
    const defaultAgent = "yoru";
    agentSelectImage = document.getElementById("agent-" + defaultAgent);
    agentSelectImage.style.border = "1px solid #EFEF5A";
    agentSelectImage.querySelector('img').style.filter = "brightness(0.5)";
    previousAgentImage = agentSelectImage;

    selectAgent.setAttribute("src","assets/images/agents/"+defaultAgent+".png");
    const id = getIdByName(defaultAgent)
    getAgentId(id);
})
