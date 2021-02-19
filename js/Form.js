class Form{
    constructor(){

    }
display(){

    var title = createElement('h1');
    title.html("Car Racing Game");
    title.position(520,0);

    var input = createInput("Name");
    input.position(540,200);

    var button = createButton("Play");
    button.position(580,300);


    button.mousePressed(function(){

        input.hide();
        button.hide();

        var name = input.value();
        playerCount+=1;

        player.updateCount(playerCount);
        player.update(name);


        var greeting = createElement('h2');
        greeting.html("Welcome "+name);
        greeting.position(530,200);

    })


}
}