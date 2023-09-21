// 

const fs = require('fs');
const data = () => fs.readFileSync(require.resolve("./movies_metadata.json"), { encoding: "utf8" });
console.log("Found moivies ",data);

const getAllMovies = (page,limit) => {
    return data()
}

module.exports = {getAllMovies};