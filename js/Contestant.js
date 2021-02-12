class Contestant{
constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0 ;
}
//reads playercount from db
getCount(){
    var refs = db.ref("contestantCount");
    refs.on("value", (data)=>{
        conCount = data.val();
    })
        
    }

    //writes playercount into db
    updateCount(count){
        db.ref("/").update({
            contestantCount : count
        })
    }

    //updates player's info into db
    update(){
        db.ref("contestantCount/player"+this.index).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        db.ref("contestantCount").on(
            "value", (k)=>{
                allPlayers = k.val();
            }
        )
    }









}