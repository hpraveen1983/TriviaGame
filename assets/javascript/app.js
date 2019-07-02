$(document).ready(function(){
//////////////////////////////////////////////////////////////////////////////////////////////
//variable declaration
var i;
var quiz = [];
var Count;
var imageChoice;

var correct = 0;
var missed = 0;
var attempted = 0;

var rightAns;
var intervalTimer;
var delayButtonAlert;
var newQuest;
var ansAttempt;


quizBuild();
i = 0;    
hideStuff();

function quizConstructor(question, choice1, choice2, choice3, choice4, ans, imageURL, attempted) {

    this.question = question;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
    this.ans = ans;
    this.imageURL = imageURL;
    this.attempted = attempted;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function quizBuild() {


    quiz[0] = new quizConstructor('type of galaxy is the most common in the universe','Elliptical galaxies', 'Spherical galaxies', 'Oblong galaxies', 'Helical galaxies', 1, "https://tenor.com/view/galaxy-universe-space-astronaut-moon-gif-13397473.gif", false);
    quiz[1] = new quizConstructor('is the coldest place in the universe','Boomerang Nebula', 'Eskimo Nebula', 'Helix Nebula', 'Lemon Slice Nebula', 1, 'https://media2.giphy.com/media/3og0INtldac8gncQO4/giphy.gif?cid=790b76115d1acfff6c3452754d47f0d4&rid=giphy.gif', false);
    quiz[2] = new quizConstructor('percent of the universe is dark matter','96%', '48%', '27%', '83%', 3, 'https://66.media.tumblr.com/188ed820349f02486f8768c7011167f0/tumblr_ncol0igSYj1rnq3cto4_500.gif', false);
    quiz[3] = new quizConstructor('is the largest planet in our solar system','Saturn', 'Uranus', 'Earth', 'Jupiter', 4, 'https://i.imgur.com/Kmv7vbJ.gif', false);
    quiz[4] = new quizConstructor('is the smallest planet in our solar system','Venus', 'Mars', 'Earth', 'Mercury', 4, 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/9dc18a44a92486b24c4ee7be1e51b959/large.gif', false);
    quiz[5] = new quizConstructor('is the most common type of star found in the Milky Way','Venus', 'Mars', 'Red Dwarf', 'Mercury', 3, 'https://66.media.tumblr.com/47268456235e7a3a0311cdc5650249b3/tumblr_n0qp64iaev1rnq3cto1_r1_500.gif', false);
    quiz[6] = new quizConstructor('is the largest type of star in the universe','Venus', 'Mars', 'Earth', 'Red SuperGiant', 4, 'https://66.media.tumblr.com/f2a0f042b3c49eeccdd683e80a75d43d/tumblr_n028wgH0Ft1rnq3cto1_500.gif', false);
    quiz[7] = new quizConstructor('has a gravitational pull so strong that even light cannot escape it','Backhole', 'Mars', 'Earth', 'Mercury', 2, 'https://66.media.tumblr.com/4f9106d81234d79929ae4157b20fb917/tumblr_mlw8ozdsfJ1qdlh1io1_400.gif', false);
    quiz[8] = new quizConstructor('is the closest star to the Sun','Venus', 'Proxima Centauri', 'Earth', 'Mercury', 2, 'https://qph.fs.quoracdn.net/main-qimg-1638e30b96a15c0ada92c01cfcdb94b6.jpg', false);
    quiz[9] = new quizConstructor('is the longest continuous time a human has spent in space','237', '537', '437', '137', 3, 'https://s3.amazonaws.com/iexplore_web/images/assets/000/006/572/original/space_travel.jpg?1443785354', false);
    
    return quiz;
}

//////////////////////////////////////////////////////////////////////////////

$("#new-question").on("click", displayNewQuestion);

function displayNewQuestion() {

    //hide the button after the first click;  new questions
    //will automatically display with timers

    if (i > 0) { clearTimeout(newQuest); }

    $("#new-question").hide();
    hideStuff();

    //send question and options info to screen

    ansAttempt = false;
    console.log("New question " + i + " will display now");
    quizWrite();

    //Initialize count & display
    Count = 30;
    intervalTimer = setInterval(countDown, 1000)

    //take this path if time expires..
    delayButtonAlert = setTimeout(notAttempted, 30000)
}

$(document).on("click",".answer",Attempted);

function countDown() {
    Count -= 1;
    $("#seconds-count").html('<h3> You have ' + Count + " seconds left</h3> ")
    return Count;
}

////////////////////////////////////////////////////////////////////////////////////

function notAttempted() {

    //this executes after 30 seconds have passed
    //clear timers when this is called
    if (ansAttempt != true) {

        clearTimeout(delayButtonAlert);
        clearTimeout(intervalTimer);

        //other two stats will not change

        missed += 1;

        $(".stats").show();
        displayStats();

        displayAnsImg();
    }
    else {
        return
    }
}

///////////////////////////////////////////////////////////////////////////////

function Attempted(){
        
    //this executes after an answer was attempted
    //clear timers when this is called
    
    clearTimeout(delayButtonAlert);
    clearTimeout(intervalTimer);

    // this function is called if an answer is
    // attempted before the timeout

    ansAttempt = true;
    $("#message").show();
    

    userChoice = parseInt($(this).val());
    //console.log(userChoice, i);

    attempted += 1;

    if (userChoice == quiz[i].ans){
        $("#message").html('Correct Answer!');
        correct += 1;
        }
    else {
        $("#message").html('Incorrect Answer!');   
        missed += 1;
    }

    $(".stats").show();
    displayStats();

    //call the function that displays the answer and gif

    displayAnsImg();
}
////////////////////////////////////////////////////////////////////////////////////

function displayAnsImg(){
    
    //start a 5-second timer so answers will remain
   //for 5 seconds before a new question is displayed

   if (i < quiz.length){
       newQuest = setTimeout(displayNewQuestion,5000);
   }
   else {
       $("#message").html("Game Over");
       //$("#message").show();          //offer the option to run the game again

       document.getElementById("question").style.opacity = "0.0";
       document.getElementById("option-1").style.opacity = "0.0";
       document.getElementById("option-2").style.opacity = "0.0";
       document.getElementById("option-3").style.opacity = "0.0";
       document.getElementById("option-4").style.opacity = "0.0";

       //       $("#question").hide();
       $("#seconds-count").hide();
       //       $(".answer").hide();
       return;
   }
   
   imageChoice = imageInsert();

   $("#picture").html(imageChoice);
   $("#Reveal").html("The correct answer is: " + quizAnswer());

   $("#picture").show();
   $("#Reveal").show();

   //display the correct answer and the image
   //increment i only AFTER displaying answer and image

   i++; 
   //console.log("Answer and image will display now");
   
}
//////////////////////////////////////////////////////////////////////////////////

function quizWrite(){
    
    //   console.log('quizWrite');
   
       $("#question").html("What " + quiz[i].question + " ?");
       
       $("#option-1").html(quiz[i].choice1);
       $("#option-2").html(quiz[i].choice2);
       $("#option-3").html(quiz[i].choice3);
       $("#option-4").html(quiz[i].choice4);
    
   }

   ////////////////////////////////////////////////////////////////////////////////
   
   //this function doesn't get called. I compare the
   // value of the button to the answer instead ...
   
   function quizAnswer(){
       if (quiz[i].ans == 1){
           quizAns = quiz[i].choice1;
       }else if (quiz[i].ans == 2){
           quizAns = quiz[i].choice2;
       }else if (quiz[i].ans == 3){
           quizAns = quiz[i].choice3;
       }if (quiz[i].ans == 4){
           quizAns = quiz[i].choice4;
       }
       //console.log(quizAns);
   
       return quizAns;
   }
   
   ////////////////////////////////////////////////////////////////////////////////////
   
   function displayStats(){
       $(".stats").html("<h4> Correct: "+correct+'<br>'+"Incorrect: " + missed + '<br>' +"Attempted: " +attempted+ '</h4>');
   }
   
   
   ////////////////////////////////////////////////////////////////////////////////////

   function imageInsert(){ 
   
    //   console.log(quiz[i].imageURL);
   
       var imageChoice = $('<img>');
       
       imageChoice.addClass('universe');
       
       imageChoice.attr('src', quiz[i].imageURL);
   
       imageChoice.attr('width','400px');
                         
      return imageChoice;
   }
///////////////////////////////////////////////////////////////////////////////////////////

function hideStuff(){
    
    $(".stats").hide();
    $("#message").hide();
    $("#picture").hide();
    $("#Reveal").hide();
}

///////////////////////////////////////////////////////////////////////////////////////////

var fullreset=document.getElementById("fullreset");

fullreset.addEventListener("click", function(){
    location.reload();
},false);


}) 
