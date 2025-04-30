
// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//     try {
//       const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//       console.log(res.data.result.properties);
//     } catch (e) {
//       console.log("ERROR", e);
//     }
//   };
//    getStarWarsPerson();
//   getStarWarsPerson(5);
//   getStarWarsPerson(10);

//Setting headers with aixos
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);





