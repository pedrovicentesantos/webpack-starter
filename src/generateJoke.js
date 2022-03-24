import axios from 'axios';

const generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  };

  return axios.get('https://icanhazdadjoke.com/', config).then(res => {
    document.querySelector('#joke').innerHTML = res.data.joke;
  });
};

export default generateJoke;
