class Game{
    constructor(){

    }
getState(){

    var getStateRef = database.ref('gameState');
    getStateRef.on("value",function(data){
       gameState = data.val();

    })

}
start(){

    if(gameState === 0){

    player = new Player();
    player.getCount();
    form = new Form();
    form.display();



    }
}


}
