    
    
    //loading first question
    var i;
    var quiz=[];
    var Count;
    var imageChoice;
    
    var correct=0;
    var missed =0;
    var attempted = 0;
    
    var rightAns;
    var intervalTimer;
    var delayButtonAlert;
    var newQuest;
    var ansAttempt;
    
    
    
    quizBuild();        //put data into quiz constructor function to make object

    function quizElements(question,choice1,choice2,choice3,choice4,ans,imageURL,attempted){
    
        this.question = question;
        this.choice1   = choice1;
        this.choice2   = choice2;
        this.choice3   = choice3;
        this.choice4   = choice4;
        this.ans       = ans;
        this.imageURL  = imageURL;
        this.attempted = attempted;
    }

    function quizBuild(){
    
     
            quiz[0] = new quizElements('Elliptical galaxies','Spherical galaxies','Oblong galaxies','Helical galaxies','Double helix galaxies',2,"https://tenor.com/view/galaxy-universe-space-astronaut-moon-gif-13397473.gif",false);
            quiz[1] = new quizElements('The Boomerang Nebula','Eskimo Nebula','Helix Nebula','Lemon Slice Nebula','Oyster Nebula',1,'https://media2.giphy.com/media/3og0INtldac8gncQO4/giphy.gif?cid=790b76115d1acfff6c3452754d47f0d4&rid=giphy.gif',false);
            quiz[2] = new quizElements('96%','48%','27%','83%','77%',3,'https://66.media.tumblr.com/188ed820349f02486f8768c7011167f0/tumblr_ncol0igSYj1rnq3cto4_500.gif',false);
            
        
            return quiz
        }

        $("#new-question").on("click",displayNewQuestion);
    
    function displayNewQuestion(){
    
        //hide the button after the first click;  new questions
        //will automatically display with timers
    
        if (i > 0) {clearTimeout(newQuest);}
    
        $("#new-question").hide();
        hideStuff();
    
        //send question and options info to screen
    
        ansAttempt = false;
        console.log("New question " + i +  " will display now");
        quizWrite();
    
        //Initialize count & display
        Count = 20;
        intervalTimer = setInterval(countDown,1000)
    
        //take this path if time expires..
        delayButtonAlert = setTimeout(notAttempted,1000)   
    }