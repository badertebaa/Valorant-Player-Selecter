const agents = ["astra", 
                "breach", 
                "brimstone", 
                "chambre", 
                "cypher",
                "deadlock", 
                "fade", 
                "gekko", 
                "harbor", 
                "jett", 
                "kayo", 
                "killjoy", 
                "neon", 
                "omen", 
                "phoenix", 
                "raze", 
                "reyna", 
                "sage", 
                "skye", 
                "sova", 
                "viper", 
                "yoru"]

const selectAgent = document.getElementById("selectedAgent")

agents.forEach(agent => {
    agentSelectImage=document.getElementById("agent-"+agent);
    agentSelectImage.addEventListener("click",()=>{
        selectAgent.setAttribute("src","assets/images/agents/"+agent+".png");
    });
});