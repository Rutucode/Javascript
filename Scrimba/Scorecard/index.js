let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtntwo = document.getElementById("home-score-btn-2")
let homeScoreBtnthree = document.getElementById("home-score-btn-3")

let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
//----------------------------------------------------------------------
function increaseHomeScoretwo(){
    homeScore += 2;
    homeStoreEl.textContent = homeScore
}
//------------------------------------------------------------------------
function increaseHomeScorethree(){
    homeScore += 3;
    homeStoreEl.textContent = homeScore
}
//----------------PART 2 ----------------------------------------------

let guestScoreBtnone = document.getElementById("guest-score-btn-1")
let guestScoreBtntwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnthree = document.getElementById("guest-score-btn-3")
let guestScorePt = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1;
    guestScorePt.textContent = guestScore;
}
//----------------------------------------------------------------------------
 function increaseGuestScoretwo(){
    guestScore += 2;
    guestScorePt.textContent = guestScore;
 }
 //--------------------------------------------------------------------------
 function increaseGuestScorethree(){
    guestScore += 3;
    guestScorePt.textContent = guestScore;
 }