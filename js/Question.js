class Question{
    constructor(){
        this.title = createElement("My Quiz game");
        this.Question = createElement("Q1");
        this.option1 = createElement("Ans1");
        this.option2 = createElement("Ans2");
        this.input = createInput("answer");
    }
    
    
    display(){

        
        this.title.html("My Quiz Game");
        this.title.position(350, 0);
        this.Question.html("Question: What starts and ends with 'E' but has only 1 letter in it ???")
        this.Question.position(150, 80);
        this.option1.html("1. Everyone")
        this.option1.position(150, 100);
        this.option2.html("1. Envelope")
        this.option2.position(150, 100);
    }
    hide(){
        this.title.hide();
        this.button.hide();
        this.greeting.hide();
    }
    }