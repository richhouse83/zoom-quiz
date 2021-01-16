//const axios = require("axios");
import axios from "axios";

const api = "https://opentdb.com/api.php?amount=1&encode=url3986";

const openT = async (difficulty = "medium") => {
  const question = await axios
    .get(`${api}&difficulty=${difficulty}`)
    .then(({ data: { results } }) => results);
  console.log(question);
  return question;
};

openT();
openT("hard");
openT("easy");

export default openT;

// {
//   category: 'Entertainment: Video Games',
//   type: 'multiple',
//   difficulty: 'medium',
//   question: 'Which CS:GO eSports team won the major event ESL One Cologne 2016?',
//   correct_answer: 'SK Gaming',
//   incorrect_answers: [ 'Team Liquid', 'Fnatic', 'Virtus.pro' ]
// }
