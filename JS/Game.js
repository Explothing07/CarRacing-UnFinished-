class Game{
    constructor(){

    }
    
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player = new Player();
            form = new Form();
            form.display();
            player.getCount();
        }
    }

    play(){
        form.hideForm();

        textSize(30);
        text("Game Started", 100, 100);

        Player.getPlayerInfo();
        if(allPlayers!=undefined){
            var displayPos = 150;
            for(var plr in allPlayers){
                if(plr === 'player'+player.index){
                    fill("red");
                }else {
                    fill("black");
                }
                displayPos = displayPos+20;
                textSize(15);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance, 100, displayPos);            
            }

            if(keyDown(UP_ARROW) && player.index!=null){
                player.distance = player.distance+100;
                player.update();
            }
        }
    }
}
