class Form{
    constructor(){

        this.title = createElement("h2");
        
        this.textBox = createInput("Name");

        this.button = createButton("Play");

        this.greeting = createElement("h3");
    }

    hideForm(){
        this.textBox.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(200,0);

        this.textBox.position(250,100);

        this.button.position(250,200);
        
        this.button.mousePressed(()=>{
            this.textBox.hide();
            this.button.hide();

            player.name = this.textBox.value();
            this.greeting.html("Hello "+player.name);
            this.greeting.position(200,250);

            playerCount = playerCount+1;
            player.index = player.index+1;
            player.updateCount(playerCount);
            player.update();
        })
    }
}