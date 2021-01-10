const axios = require("axios");

const api = "http://jservice.io/api/random";

const jService = async () => {
  const question = await axios.get(api).then(({ data }) => {
    console.log(data[0]);
    return data[0];
  });
  return question;
};

module.exports = { jService };
