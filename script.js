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
               {'name':"sova","id":"ded3520f-4264-bfed-162d-b080e2abccf9"}
            ]

const selectAgent = document.getElementById("selectedAgent")

agents.forEach(agent => {
    agentSelectImage=document.getElementById("agent-"+agent.name);
    agentSelectImage.addEventListener("click",()=>{
        selectAgent.setAttribute("src","assets/images/agents/"+agent.name+".png");
        getAgentId(agent.id)
    });
});


function getAgentId(id) {
    const url = "https://valorant-api.com/v1/agents/"+id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => updatePlayerInfo(data,id)).catch((error) => {
        console.error("Error fetching agent data:", error);
      });
  }
  
  function updatePlayerInfo(data,id) {
    if(id!="ded3520f-4264-bfed-162d-b080e2abccf9"){
    document.getElementById("player-and-abilities-info").style.display="block";
    const roleNameElement = document.getElementById("role-name");
    roleNameElement.innerHTML = data.data.role.displayName;
    document.getElementById("agent-name").innerHTML=data.data.displayName;
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
    else{
      document.getElementById("player-and-abilities-info").style.display="block";
      document.getElementById("role-name").innerHTML="Initiator"
      document.getElementById("agent-name").innerHTML="Sova";
      document.getElementById("info-player").setAttribute("src","https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png");
      document.getElementById("Abilitie1").setAttribute("src",data.data.abilities[1].displayIcon);
      document.getElementById("Abilitie2").setAttribute("src",data.data.abilities[0].displayIcon);
      document.getElementById("Abilitie3").setAttribute("src",data.data.abilities[2].displayIcon);
      document.getElementById("Abilitie4").setAttribute("src",data.data.abilities[3].displayIcon);
      document.getElementById("player-and-abilities-info").innerHTML=data.data.description;
      document.getElementById("mini-title-role-player").innerHTML="Initiator";
      document.getElementById("role-text").innerHTML="Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
      document.getElementById("info-player").addEventListener("click",()=>{
        document.getElementById("mini-title-role-player").innerHTML="Initiator";
        document.getElementById("player-and-abilities-info").style.display="block";
        document.getElementById("role-text").innerHTML="Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
        })
        document.getElementById("Abilitie1").addEventListener("click",()=>{
          document.getElementById("player-and-abilities-info").style.display="none";
          document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[1].displayName;
          document.getElementById("role-text").innerHTML=data.data.abilities[1].description;
        })
        document.getElementById("Abilitie2").addEventListener("click",()=>{
          document.getElementById("player-and-abilities-info").style.display="none";
          document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[0].displayName;
          document.getElementById("role-text").innerHTML=data.data.abilities[0].description;
        })
        document.getElementById("Abilitie3").addEventListener("click",()=>{
          document.getElementById("player-and-abilities-info").style.display="none";
          document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[2].displayName;
          document.getElementById("role-text").innerHTML=data.data.abilities[2].description;
        })
        document.getElementById("Abilitie4").addEventListener("click",()=>{
          document.getElementById("player-and-abilities-info").style.display="none";
          document.getElementById("mini-title-role-player").innerHTML=data.data.abilities[3].displayName;
          document.getElementById("role-text").innerHTML=data.data.abilities[3].description;
        })
      
    }
  }

  window.addEventListener("load",()=>{
    selectAgent.setAttribute("src","assets/images/agents/"+"yoru"+".png");
    getAgentId("7f94d92c-4234-0a36-9646-3a87eb8b5c89");
})
