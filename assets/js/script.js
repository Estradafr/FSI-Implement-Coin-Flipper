// TODO: Declare any global variables we need
let headsFlips = 0 
let headsPercent = '0%'
let tailsFlips = 0
let tailsPercent = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function() {
        // Flip Button Click Handler
        if (Math.random() > .4999999999) {
            document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg';
            document.querySelector('#message').innerHTML = "You Flipped Heads!"
            headsFlips++;
            totalFlips++;
            headsPercent = Math.round((headsFlips/totalFlips) * 100);
            tailsPercent = Math.round((tailsFlips/totalFlips) * 100);
            document.querySelector('#heads').innerHTML = headsFlips;
            document.querySelector('#heads-percent').innerHTML = headsPercent + '%';
            document.querySelector('#tails').innerHTML = tailsFlips;
            document.querySelector('#tails-percent').innerHTML = tailsPercent + '%';
        } else {
            document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg';
            document.querySelector('#message').innerHTML = "You Flipped Tails!"
            tailsFlips++;
            totalFlips++;
            headsPercent = Math.round((headsFlips/totalFlips) * 100);
            tailsPercent = Math.round((tailsFlips/totalFlips) * 100);
            document.querySelector('#heads').innerHTML = headsFlips;
            document.querySelector('#heads-percent').innerHTML = headsPercent + '%';
            document.querySelector('#tails').innerHTML = tailsFlips;
            document.querySelector('#tails-percent').innerHTML = tailsPercent + '%';
        }
    })
    


    // Clear Button Click Handler
    document.querySelector('#clear').addEventListener('click', function() {
        headsFlips = 0 
        headsPercent = '0%'
        tailsFlips = 0
        tailsPercent = '0%'
        totalFlips = 0
        document.querySelector('#heads').innerHTML = headsFlips
        document.querySelector('#heads-percent').innerHTML = headsPercent
        document.querySelector('#tails').innerHTML = tailsFlips
        document.querySelector('#tails-percent').innerHTML = tailsPercent
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    })
})