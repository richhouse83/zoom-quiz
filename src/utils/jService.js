import axios from "axios";

const api = "http://jservice.io/api/random";

const jService = async () => {
  const question = await axios.get(api).then(({ data }) => {
    data[0].answer = data[0].answer.replace(/<\/?.>/g, "");
    return data;
  });
  return question;
};

export default jService;
