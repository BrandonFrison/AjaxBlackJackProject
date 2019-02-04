/**
 * Created by Brandon on 2016-11-18.
 */
var dcardNum = 0; //dealers first two cards
var runnTotal, drunnTotal; //player and dealer running total
var cardsuit, cardnumber, cardname;
var playerWallet = 500;
var playerBet = 0;
var usedCards = new Array();
//0 through 9 elements per hand, at maximum 0,1 are dealer, 2,3,4,5,6 are player and 7,8,9 are dealer.
var i; //for incrementing
var hit = 0; //for increm
var dup, natural, insurance, dblackjack = false; //for duplicate checking and natural blackjack wins




function randSuit() {
    var x = Math.floor(Math.random() * (4));
    if (x == 0) {
        cardsuit = "D"; //diamonds
    }
    if (x == 1) {
        cardsuit = "S"; //spades
    }
    if (x == 2) {
        cardsuit = "H" //hearts
    }
    if (x == 3) {
        cardsuit = "C" //clubs
    }


    //delete

}

function randCard() {
    var x = Math.floor(Math.random() * (13));
    i++;
    switch (x) {
        case 0:
            cardnumber += 11;
            cardname = "G"; //weird problem with Ace of Diamonds (AD) didn't show the img so i changed to G and it works.
            break;
        case 1:
            cardnumber += 2;
            cardname = "2";
            break;
        case 2:
            cardnumber += 3;
            cardname = "3";
            break;
        case 3:
            cardnumber += 4;
            cardname = "4";
            break;
        case 4:
            cardnumber += 5;
            cardname = "5";
            break;
        case 5:
            cardnumber += 6;
            cardname = "6";
            break;
        case 6:
            cardnumber += 7;
            cardname = "7";
            break;
        case 7:
            cardnumber += 8;
            cardname = "8";
            break;
        case 8:
            cardnumber += 9;
            cardname = "9";
            break;
        case 9:
            cardnumber += 10;
            cardname = "10";
            break;
        case 10:
            cardnumber += 10;
            cardname = "J";
            break;
        case 11:
            cardnumber += 10;
            cardname = "Q";
            break;
        case 12:
            cardnumber += 10;
            cardname = "K";
            break;
    }

}

function chipbet1() {
    if (playerBet + 1 <= playerWallet) {
        playerBet += 1;
        var x = playerBet.toString();
        document.getElementById("bet").innerHTML = x;
        document.getElementById("ngbut").disabled = false;
    }
}

function chipbet2() {
    if (playerBet + 5 <= playerWallet) {
        playerBet += 5;
        var x = playerBet.toString();
        document.getElementById("bet").innerHTML = x;
        document.getElementById("ngbut").disabled = false;
    }
}

function chipbet3() {
    if (playerBet + 25 <= playerWallet) {
        playerBet += 25;
        var x = playerBet.toString();
        document.getElementById("bet").innerHTML = x;
        document.getElementById("ngbut").disabled = false;
    }
}

function chipbet4() {
    if (playerBet + 100 <= playerWallet) {
        playerBet += 100;
        var x = playerBet.toString();
        document.getElementById("bet").innerHTML = x;
        document.getElementById("ngbut").disabled = false;
    }
}

function chipbet5() {
    if (playerBet + 500 <= playerWallet) {
        playerBet += 500;
        var x = playerBet.toString();
        document.getElementById("bet").innerHTML = x;
        document.getElementById("ngbut").disabled = false;
    }
}

function checkForDups() {
    var cardFull = cardname + cardsuit;
    var t = usedCards.indexOf(cardFull);
    if (t == -1) {
        dup = false;
    } else {
        dup = true;
        //stop from allowing it to add to running total
        var dupNum;
        if (cardname == "G") {
            dupNum = 11;
        } else {
            dupNum = parseInt(cardname) || 10;
        }
        cardnumber -= dupNum; //delete duplicates from being added to running total
    }
}

function addToArray() {
    while (usedCards.length <= i) {
        if (!dup) {
            usedCards[i] = cardname + cardsuit;
        } else {
            randSuit();
            randCard();
            checkForDups();
            i--;
        }
    }
}

function checkForDAces() {
    for (var k = 0; k <= 8; k++) { //accounts for players aces hits

        if (hit == 0) { //works
            if (k <= 6) { //so cards max out
                //continue on k = 2,3
                if (k == 2 || k == 3) {
                    continue;
                } else {
                    switch (usedCards[k - 1]) {
                        case "GH":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GD":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GC":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GS":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                    }
                }
            }

        } else if (hit == 1) {

            if (k <= 7) {
                //continue on k = 2,3,4
                if (k == 2 || k == 3 || k == 4) {
                    continue;
                } else {

                    switch (usedCards[k - 1]) {
                        case "GH":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                                document.getElementById("testing").innerHTML = "ace";
                            }
                            break;
                        case "GD":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                                document.getElementById("testing").innerHTML = "ace";
                            }
                            break;
                        case "GC":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                                document.getElementById("testing").innerHTML = "ace";
                            }
                            break;
                        case "GS":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                                document.getElementById("testing").innerHTML = "ace";
                            }
                            break;
                    }
                }
            }

        } else if (hit == 2) {

            if (k <= 8) {
                //continue on k = 2,3,4,5
                if (k == 2 || k == 3 || k == 4 || k == 5) {
                    continue;
                } else {

                    switch (usedCards[k - 1]) {
                        case "GH":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GD":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GC":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                        case "GS":
                            if (drunnTotal > 21) {
                                drunnTotal -= 10;
                            }
                            break;
                    }
                }
            }

        }


    }
}

function checkForPAces() {
    for (var j = 2; j <= 6; j++) { //starts at 2 to not include first two dealer cards

        switch (usedCards[j]) {
            case "GH":
                if (runnTotal > 21) {
                    runnTotal -= 10;
                }
                break;
            case "GD":
                if (runnTotal > 21) {
                    runnTotal -= 10;
                }
                break;
            case "GC":
                if (runnTotal > 21) {
                    runnTotal -= 10;
                }
                break;
            case "GS":
                if (runnTotal > 21) {
                    runnTotal -= 10;
                }
                break;

        }

    }
}

function newGameFunction() {
    if (document.getElementById("pName").value != "Enter your name here") {
        document.getElementById("pName").style.visibility = "hidden";

    } else {
        alert("Please Enter your name before starting!");
        return; //won't start without name
    }

    //to place bet
    if (playerWallet - playerBet >= 0) {
        playerWallet -= playerBet;
        var z = playerWallet.toString();
        document.getElementById("wallet").innerHTML = z;
    } else {
        return; //won't start if bet is too large
    }



    //resetting game commands
    cardnumber = 0;
    hit = 0;
    i = -1;
    usedCards = []; //clearing the array.
    natural = false;
    insurance = false;
    dblackjack = false; //resets the odd blackjack possibilities
    document.getElementById("ddbut").disabled = false;
    document.getElementById("hitbut").disabled = false;
    document.getElementById("standbut").disabled = false;

    document.getElementById("testing").innerHTML = ""; //delete
    document.getElementById("ngbut").disabled = true; //add at the end
    document.getElementById("dcard2").style.backgroundImage = null;
    document.getElementById("dcard3").style.backgroundImage = null; //resetting other spots
    document.getElementById("dcard4").style.backgroundImage = null;
    document.getElementById("pcard2").style.backgroundImage = null;
    document.getElementById("pcard3").style.backgroundImage = null;
    document.getElementById("pcard4").style.backgroundImage = null;
    document.getElementById("lwmsg").innerHTML = "";
    document.getElementById("dhand").innerHTML = "";
    document.getElementById("defmsg").innerHTML = "";

    //for first two dealer cards
    randSuit();
    randCard();
    usedCards[i] = cardname + cardsuit; //manually adding first
    //add first image here
    document.getElementById("dcard0").style.backgroundImage = "url('./images/" + usedCards[0] + ".png')";

    randSuit();
    randCard();
    checkForDups();
    addToArray();
    //card doesn't appear but is stored in element 1 of the array so it can be displayed later.
    document.getElementById("dcard1").style.backgroundImage = "url('./images/BackOfCard.png')";
    dcardNum = cardnumber;
    if (dcardNum == 21) {
        dblackjack = true;
    }
    //double ace fix
    if (dcardNum == 22) {
        dcardNum = 12;
    }


    //for 2 player cards
    randSuit();
    randCard();
    checkForDups();
    addToArray();
    document.getElementById("pcard0").style.backgroundImage = "url('./images/" + usedCards[2] + ".png')";


    //player card 2
    randSuit();
    randCard();
    checkForDups();
    addToArray();
    document.getElementById("pcard1").style.backgroundImage = "url('./images/" + usedCards[3] + ".png')";
    checkForPAces();
    runnTotal = cardnumber - dcardNum;
    //for rare occurence of double ace
    if (runnTotal == 22) {
        runnTotal = 12;
    }

    document.getElementById("defmsg").innerHTML = document.getElementById("pName").value + "'s Hand Total is: " + runnTotal;

    if (runnTotal == 21) {
        natural = true; //sets natural to true for the win function so bet *1.5
        if (dcardNum !== 21) {
            document.getElementById("lwmsg").innerHTML = "<br>Player wins with a natural blackjack";
            winFunction();
        } else {
            tieFunction();
        }
    }

    //to turn on insurance button
    switch (usedCards[0]) {
        case "GH":
            document.getElementById("insbut").disabled = false;
            break;
        case "GD":
            document.getElementById("insbut").disabled = false;
            break;
        case "GC":
            document.getElementById("insbut").disabled = false;
            break;
        case "GS":
            document.getElementById("insbut").disabled = false;
            break;
        default:
            document.getElementById("insbut").disabled = true;
            break;
    }


    if (playerWallet == 0 && playerBet == 0) {

        prompt("you have ran out of money in your wallet, please enter your credit card here and you will be given $500", "");
        location.reload();
    }
}

function hitFunction() {
    hit++; //number of times hit is clicked
    document.getElementById("ddbut").disabled = true;
    if (i <= 5) {
        randSuit();
        randCard();
        checkForDups();
        addToArray();
        document.getElementById("pcard" + (i - 2)).style.backgroundImage = "url('./images/" + usedCards[i] + ".png')";
        runnTotal = cardnumber - dcardNum;
        checkForPAces();
        document.getElementById("defmsg").innerHTML = document.getElementById("pName").value + "'s Hand Total is: " + runnTotal;
        if (runnTotal > 21) {
            loseFunction();
            document.getElementById("lwmsg").innerHTML = "<br>You have Busted out the dealer wins";
        } else if (runnTotal == 21) {
            standFunction();
            document.getElementById("standbut").disabled = true;
            document.getElementById("ngbut").disabled = true;
        }
    }
    if (hit == 3) {
        if (runnTotal <= 21) {
            winFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Player has drawn 5 cards and not busted, player wins.";
            document.getElementById("ngbut").disabled = false;
        }
    }
}

function dealerHittingFunction() {
    drunnTotal = dcardNum;

    while (drunnTotal < 17) {
        randSuit();
        randCard();
        checkForDups();
        addToArray();
        checkForDAces();
        drunnTotal = cardnumber - runnTotal;

        if (hit == 1) {
            document.getElementById("dcard" + (i - 3)).style.backgroundImage = "url('./images/" + usedCards[i] + ".png')";
        } else if (hit == 2) {
            document.getElementById("dcard" + (i - 4)).style.backgroundImage = "url('./images/" + usedCards[i] + ".png')";
        } else {
            document.getElementById("dcard" + (i - 2)).style.backgroundImage = "url('./images/" + usedCards[i] + ".png')";
        }

    }
    if (drunnTotal >= 17 && drunnTotal < 21) {
        if (drunnTotal > runnTotal) {
            loseFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Dealer has the higher hand, House wins";
        } else if (drunnTotal < runnTotal) {
            winFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Player has the higher hand, player wins";
        } else if (drunnTotal == runnTotal) {
            tieFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Tie, money back";
        }
    }

    if (drunnTotal == 21) {
        if (runnTotal == 21) {
            document.getElementById("lwmsg").innerHTML = "<br>You tie with blackjack, money back";
            tieFunction();

        } else {
            document.getElementById("lwmsg").innerHTML = "<br>You lose, dealer has blackjack";
            loseFunction();
        }
    }

    if (drunnTotal > 21) {
        winFunction();
        document.getElementById("lwmsg").innerHTML = "<br>the dealer has Busted out, player wins";
    }

    //var dhandtot = drunnTotal.toString();
    //document.getElementById("dhand").innerHTML = "<br>Dealer's hand total is "+dhandtot;
}

function standFunction() {
    document.getElementById("hitbut").disabled = true;
    document.getElementById("standbut").disabled = true;
    document.getElementById("dcard1").style.backgroundImage = "url('./images/" + usedCards[1] + ".png')";

    //checks for dealer autostand
    if (dcardNum >= 17 && dcardNum < 21) {
        if (dcardNum > runnTotal) {
            loseFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Dealer has the higher hand, House wins";
        } else if (dcardNum < runnTotal) {
            winFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Player has the higher hand, player wins";
        } else if (dcardNum == runnTotal) {
            tieFunction();
            document.getElementById("lwmsg").innerHTML = "<br>Tie, money back";
        }
    }

    //checks for dealer blackjack
    if (dcardNum == 21) {
        if (runnTotal == 21) {
            document.getElementById("lwmsg").innerHTML = "<br>You tie with blackjack, money back";
            tieFunction();

        } else {
            loseFunction();
            document.getElementById("lwmsg").innerHTML = "<br>You lose the dealer got blackjack";
        }
    }

    dealerHittingFunction();

}

function insuranceFunction() {
    document.getElementById("insbut").disabled = true;
    if (playerWallet - (playerBet * 0.5) >= 0) {
        insurance = true;
        playerWallet -= (playerBet * 0.5);
        var x = playerWallet.toString();
        document.getElementById("wallet").innerHTML = x;

    } else {
        alert("You do not have enough money to insurance bet!");
        return;
    }
}

function doubledownFunction() {
    if (playerWallet - playerBet >= 0) {
        playerWallet -= playerBet;
        playerBet *= 2;
    } else {
        alert("You do not have enough money to double down!");
        return;
    }
    hitFunction();
    if (runnTotal <= 21) {
        standFunction();
    }

}

function winFunction() {
    document.getElementById("hitbut").disabled = true;
    document.getElementById("ddbut").disabled = true;
    document.getElementById("standbut").disabled = true;
    document.getElementById("insbut").disabled = true;
    document.getElementById("ngbut").disabled = true;

    if (natural) {
        playerWallet += (playerBet * 2.5);
    } else if (insurance) {
        playerWallet -= (playerBet * 0.5);
    } else {
        playerWallet += (playerBet * 2);
    }
    var z = playerWallet.toString();
    document.getElementById("wallet").innerHTML = z;
    playerBet = 0;
    document.getElementById("bet").innerHTML = "0";
}

function loseFunction() {
    document.getElementById("hitbut").disabled = true;
    document.getElementById("ddbut").disabled = true;
    document.getElementById("standbut").disabled = true;
    document.getElementById("insbut").disabled = true;
    document.getElementById("ngbut").disabled = true;
    if (insurance && dblackjack) {
        playerWallet += (playerBet * 1.5);
        document.getElementById("lwmsg").innerHTML = "<br>Player has lost the hand but insurance bet won";
    }
    if (playerWallet <= 0) {
        document.getElementById("ngbut").disabled = false;
        newGameFunction();
    }
    var z = playerWallet.toString();
    document.getElementById("wallet").innerHTML = z;
    playerBet = 0;
    document.getElementById("bet").innerHTML = "0";
}

function tieFunction() {
    document.getElementById("hitbut").disabled = true;
    document.getElementById("ddbut").disabled = true;
    document.getElementById("standbut").disabled = true;
    document.getElementById("insbut").disabled = true;
    document.getElementById("ngbut").disabled = true;
    playerWallet += playerBet;
    var z = playerWallet.toString();
    document.getElementById("wallet").innerHTML = z;
    playerBet = 0;
    document.getElementById("bet").innerHTML = "0";
}