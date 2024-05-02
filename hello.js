function printHello() {
    console.log("Hello");
}
async function fetchJoke() {
    try {
        const response = await fetch('https://api.example.com/jokes/random');
        const data = await response.json();
        if (data && data.joke) {
            console.log(data.joke);
        } else {
            console.log('Failed to fetch joke');
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

// Call the function to fetch and print a joke
fetchJoke();
