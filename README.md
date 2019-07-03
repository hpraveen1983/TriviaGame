#TriviaGame


This is a quiz game that uses html, css and jQuery. It also incorporates the use of two timers:

1. the first timer is activated when a new question is displayed. 
2. If the question is answered before the 30 second timer counts down, then the timer is reset and the correct answer is displayed, with a relevant giphy. 
3. If the question is not answered before timeout, the correct answer and the giphy still display. Stats are updated at this time, either way.
4. The second timer is activated as soon as the answer is displayed, whether it is triggered by an expired timeout or an answered question. 
5. It only counts for 5 seconds - enough time to read the rcorrect answer, see the new score and enjoy the giphy - before the next question is automatically displayed.
6. When the quiz is completed (10 questions), player has to use the reset button to restart the game.