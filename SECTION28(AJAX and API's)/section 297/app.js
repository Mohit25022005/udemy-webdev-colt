fetch("https://swapi.tech/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data.result.properties);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
 
// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
 
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.tech/api/people/1/");
    const data = await res.json();
    console.log(data.result.properties);
    const res2 = await fetch("https://swapi.tech/api/people/2/");
    const data2 = await res2.json();
    console.log(data.result.properties);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};
 
loadStarWarsPeople();