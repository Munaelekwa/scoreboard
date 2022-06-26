let homescore = 0
let guestscore = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function increaseHomeScore() {
    homescore = homescore + 1
    homeScore.innerText = homescore
}

function decreaseHomeScore() {
    homescore = homescore - 1
    homeScore.innerText = homescore
}

function increaseGuestScore() {
    guestscore = guestscore + 1
    guestScore.innerText = guestscore
}

function decreaseGuestScore() {
    guestscore = guestscore - 1
    guestScore.innerText = guestscore
}

function reset() {
    homeScore.innerText = 0
    guestScore.innerText = 0
}