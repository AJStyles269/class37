class Form 
{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("").attribute("placeholder","Name");
        this.button=createButton("Play");
        this.greeting=createElement('h3');
        this.button2=createButton("RESET");

    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display()
    {
       
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2+100,100);

        
        this.input.position(displayWidth/2+50,displayHeight/2-80);
        
        this.button.position(displayWidth/2+100,displayHeight/2);
        this.button2.position(displayWidth-100,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("WELCOME   "+player.name);
            this.greeting.position(displayWidth/2+100,displayHeight/4);
        })
        
        this.button2.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            database.ref('players').remove()
        })
    }
}
