console.log("Script Loaded")
function printHello() {
    console.log("Hello");
}
function fetchJoke() {
    fetch('https://api.example.com/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.joke) {
                console.log(data.joke);
            } else {
                console.log('Failed to fetch joke');
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Call the function to fetch and print a joke
fetchJoke();

