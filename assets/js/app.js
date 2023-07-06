const joke = document.querySelector("#joke");
const generateBtn = document.querySelector("#generate-btn");

const generateJoke = async () => {
    const res = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data  = res.data.joke;
    return data;
}

const changeJoke = async () => {
    const string = await generateJoke();
    const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
    console.log(string);
    joke.innerHTML = result;
}

changeJoke();

generateBtn.addEventListener("click", changeJoke);