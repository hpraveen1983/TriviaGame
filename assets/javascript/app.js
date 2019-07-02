    
    
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
            quiz[1] = new quizElements('Crows','Murder','Flutter','Omen','City',1,'https://media.giphy.com/media/VeTm2S9veYuli/giphy.gif',false);
            quiz[2] = new quizElements('Geese','Nuisance','Parliament','Gaggle','Honk',3,'https://media.giphy.com/media/b8hm9N1bjne3S/giphy.gif',false);
            quiz[3] = new quizElements('Mice','Click','Mischief','Nibble','World',2,'https://media.giphy.com/media/tCWMUAuZLMvKg/giphy.gif',false);
            quiz[4] = new quizElements('Cockroaches','Immortality','Crunch','Plague','Intrusion',4,'https://media.giphy.com/media/lSwE4S5EPUHf2/giphy.gif',false);
            quiz[5] = new quizElements('Rhinos','Rhumba','Wallop','Crash','Cluster',3,'https://media.giphy.com/media/pr7WHmW9qqG4M/giphy.gif',false);
            quiz[6] = new quizElements('Zebras','Zeal','Line','Skinny','Zip',1,'https://media.giphy.com/media/l0HlHPUWqZ8iTXjAA/giphy.gif',false);
            quiz[7] = new quizElements('Cats','Mob','Conspiracy','Royalty','Nuisance',4,'https://media.giphy.com/media/3o85xGRWMlHdGB1vMs/giphy.gif',false);
            quiz[8] = new quizElements('Hedgehogs','Array','Variable','Object','Function',1,'https://media.giphy.com/media/11mVKGuLwmfAZ2/giphy.gif',false);
            quiz[9] = new quizElements('Rattlesnakes','Coil','Rhumba','Slither','Pile',2,'https://media.giphy.com/media/kkw6txIhMqnBu/giphy.gif',false);
        
            return quiz
        }