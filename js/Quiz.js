class Quiz{
    constructor(){}

    getState(){
        var gsRef = db.ref("gameState");
        gsRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        db.ref("/").update({
            gameState : state
        });
    }



    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            //Get the player count
           var conCountRef = await db.ref("contestantCount").once("value");
            if(conCountRef.exists()){
                conCount = conCount.val();
                contestant.getCount();
            }
            question = new Question()
            question.display()
        }
    }


}