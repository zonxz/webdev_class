var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://www.boredapi.com/api/activity'
  
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});