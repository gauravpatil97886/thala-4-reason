// Function to display a specific tab
function showTab(tabName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove 'active' class from all tabs
    var tablinks = document.getElementsByClassName("tab");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and set it as active
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "Tab").classList.add("active");
}

// Function to display a styled alert message with animation
function showStyledAlert(message, tabName) {
    var alertDiv = document.createElement('div');
    alertDiv.classList.add('custom-alert', 'alert-danger', 'animated-alert');
    alertDiv.textContent = message;

    var tabContent = document.getElementById(tabName);
    tabContent.appendChild(alertDiv);

    setTimeout(function() {
        alertDiv.remove();
    }, 3000); // Remove the alert after 3 seconds (adjust as needed)
}

// Function to check if the sum of numbers is 7
function checkDigits(digits, tabName) {
    var sum = digits.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    if (sum === 7) {
        showCongratulations("", tabName);
    } else {
        showStyledAlert('Bhai tere se naa hoga phirse try karke dekh', tabName);
    }
}



function showCongratulations(message, tabName) {
    var twitterLink = 'https://twitter.com'; // Replace this with your actual Twitter share link
    var whatsappLink = 'https://wa.me'; // Replace this with your actual WhatsApp share link

    var congratulationsHTML = `<div class="congratulations-message animate__animated animate__fadeIn">
        <h2 class="text-center mb-4">Congratulations!</h2>
        <p class="lead text-center">${message} - Thala for a reason ❤️</p>
        <div class="image-container text-center">
            <img src="./fun.gif" alt="fun-Gif" height="200" width="200">
        </div>
        <div class="share-buttons text-center mt-4">
            <button class="share-button twitter" onclick="shareTwitter('${twitterLink}')">
                <i class="fab fa-twitter"></i> Share on Twitter
            </button>
            <button class="share-button whatsapp" onclick="shareWhatsApp('${whatsappLink}')">
                <i class="fab fa-whatsapp"></i> Share on WhatsApp
            </button>
        </div>
    </div>`;


    // Display congratulations message
    var tab = document.getElementById(tabName);
    tab.innerHTML = congratulationsHTML;

    // Play success sound
    var sound = document.getElementById('success-sound');
    sound.play();

    // Clear message after 10 seconds
    setTimeout(function() {
        tab.innerHTML = '';
        setupTabContent(tabName);
    }, 10000); // Display the message for 10 seconds
}

// Functions to share on Twitter and WhatsApp
function shareTwitter(link) {
    window.open(link, '_blank');
}

function shareWhatsApp(link) {
    window.open(link, '_blank');
}

// Function to display an alert message
function showAlert(message, tabName) {
    var tab = document.getElementById(tabName);
    tab.innerHTML = `<div class="animate__animated animate__shakeX">${message}</div>`;
    setTimeout(function() {
        tab.innerHTML = '';
        setupTabContent(tabName);
    }, 5000); 
}

// Function to set up tab content after congratulations or alert message
function setupTabContent(tabName) {
    var inputHTML = '';
    if (tabName === 'oneDigit') {
        inputHTML = '<input type="text" id="singleDigit" placeholder="Type the Lucky number">' +
            '<button onclick="checkOneDigit()">Submit</button>';
    } else if (tabName === 'twoDigits') {
        inputHTML = '<input type="text" id="firstDigit" placeholder="First number">' +
            '<input type="text" id="secondDigit" placeholder="Second number">' +
            '<button onclick="checkTwoDigits()">Submit</button>';
    } else if (tabName === 'threeDigits') {
        inputHTML = '<input type="text" id="digitOne" placeholder="First number">' +
            '<input type="text" id="digitTwo" placeholder="Second number">' +
            '<input type="text" id="digitThree" placeholder="Third number">' +
            '<button onclick="checkThreeDigits()">Submit</button>';
    } else if (tabName === 'anyWord') {
        inputHTML = '<input type="text" id="word" placeholder="Type the Lucky word">' +
            '<button onclick="checkWord()">Submit</button>';
    }

    // Set up tab content
    document.getElementById(tabName).innerHTML = inputHTML;
}

// Event listeners for the tabs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('oneDigitTab').addEventListener('click', function() {
        showTab('oneDigit');
    });
    document.getElementById('twoDigitsTab').addEventListener('click', function() {
        showTab('twoDigits');
    });
    document.getElementById('threeDigitsTab').addEventListener('click', function() {
        showTab('threeDigits');
    });
    document.getElementById('anyWordTab').addEventListener('click', function() {
        showTab('anyWord');
    });

    setupTabContent('oneDigit');
    setupTabContent('twoDigits');
    setupTabContent('threeDigits');
    setupTabContent('anyWord');
});

// Functions to check digits or words on submit
function checkOneDigit() {
    var digit = document.getElementById('singleDigit').value;
    checkDigits([digit], 'oneDigit');
}

function checkTwoDigits() {
    var firstDigit = document.getElementById('firstDigit').value;
    var secondDigit = document.getElementById('secondDigit').value;
    checkDigits([firstDigit, secondDigit], 'twoDigits');
}

function checkThreeDigits() {
    var digitOne = document.getElementById('digitOne').value;
    var digitTwo = document.getElementById('digitTwo').value;
    var digitThree = document.getElementById('digitThree').value;
    checkDigits([digitOne, digitTwo, digitThree], 'threeDigits');
}

function checkWord() {
    var word = document.getElementById('word').value;
    var flag = isNaN(word) ? word.length : Array.from(word).reduce((acc, curr) => acc + parseInt(curr), 0);

    if (flag === 7) {
        showCongratulations(word, 'anyWord');
    } else {
        showAlert('Not the lucky number', 'anyWord');
    }
}

function shareTwitter() {
    var textToShare = "I guessed it right! Thala for a reason ❤️ #ezSnippet @ezSnippet"; // Your message here with hashtag and mention

    var twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
    
    // Open the Twitter share URL in a new tab
    window.open(twitterShareURL, '_blank');
}



document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                document.querySelector('.preloader-message').style.display = 'none';
            }, 5000); // Adjust the time in milliseconds (3 seconds in this case)
        });