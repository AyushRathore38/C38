class Player{
    constructor(){
        
    }
    getCount(){

        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        playerCount = data.val();
        })
    }
                          
    update(value){           

        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            'name' : value
        })


    }                                          
    updateCount(count){     

        database.ref('/').update({
        'playerCount' : count
        })

    }
}