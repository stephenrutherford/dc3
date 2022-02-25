export default async (req, res) => {
  const body = JSON.parse(req.body);

  var axios = require("axios").default;

  const promiseArray = body.map((Item) => {
    return axios({
      method: "GET",
      url: "https://mailcheck.p.rapidapi.com/",
      headers: {
        "x-rapidapi-host": "mailcheck.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.API_KEY}`,
      },
      params: {
        domain: Item,
      },
    });
  });

  const mergedArray = [].concat
    .apply([], await axios.all(promiseArray))
    .map((e) => e.data);

  return await res.status(200).json(mergedArray);
};
