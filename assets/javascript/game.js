// make sure everything is ready//
$(document).ready(function () {

    //variables//
    //crystals//

    var crystal1 = Math.floor(Math.random() * 12) + 1
    var crystal2 = Math.floor(Math.random() * 12) + 1
    var crystal3 = Math.floor(Math.random() * 12) + 1
    var crystal4 = Math.floor(Math.random() * 12) + 1

    //scores//
    var score2beat = Math.floor(Math.random() * 102 + 19)
    var won = 0;
    var loss = 0;
    var playerScore = 0;

    $('#score').text(score2beat);
    $('#won').text(won);
    $('#loss').text(loss);


    //if won

    function winnerWinner() {
        alert("Winner Winner Chicken Dinner!");
        won++;
        $('#won').text(won);
        reset();
    }
        //if lost


        function loser() {
            alert("Loser!");
            loss++;
            $('#loss').text(loss);
            reset()
        }



            //clicking crystals -on.click listener - needs to 
            // take the amount assigned to the crystal and add it to the playerScore
            // also need an If/else/elseif statement to determin the winner or loser
            // Anything over the set score would be losing

            $('.1').on('click', function () {
                playerScore = playerScore + crystal1;
                console.log("New playerScore= " + playerScore);
                $('#totalScore').text(playerScore);
                //Win & lose conditions
                if (playerScore == score2beat) {
                    winnerWinner();
                }
                else if (playerScore > score2beat) {
                    loser();
                }
            });
            $('.2').on('click', function () {
                playerScore = playerScore + crystal2;
                console.log("New playerScore= " + playerScore);
                $('#totalScore').text(playerScore);
                if (playerScore == score2beat) {
                    winnerWinner();
                }
                else if (playerScore > score2beat) {
                    loser();
                }
            });
            $('.3').on('click', function () {
                playerScore = playerScore + crystal3;
                console.log("New playerScore= " + playerScore);
                $('#totalScore').text(playerScore);

                if (playerScore == score2beat) {
                    winnerWinner();
                }
                else if (playerScore > score2beat) {
                    loser();
                }
            });
            $('.4').on('click', function () {
                playerScore = playerScore + crystal4;
                console.log("New playerScore= " + playerScore);
                $('#totalScore').text(playerScore);

                if (playerScore == score2beat) {
                    winnerWinner();
                }
                else if (playerScore > score2beat) {
                    loser();
                }
            });



            //reset game

            //regenerate everything

            function reset() {
                //reset score2beat
                score2beat= Math.floor(Math.random() * 102 + 19);
                console.log(score2beat)
                $('#score').text(score2beat);
                //reset crystals
                crystal1 = Math.floor(Math.random() * 12 + 1);
                crystal2 = Math.floor(Math.random() * 12 + 1);
                crystal3 = Math.floor(Math.random() * 12 + 1);
                crystal4 = Math.floor(Math.random() * 12 + 1);
                playerScore = 0;
                $('#score').text(playerScore);
            }
})
    





        
