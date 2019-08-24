const result = document.querySelector('.result');
const apiURL = 'https://randomuser.me/api/';

const btnXMLHttpRequest = document.querySelector('#btnXMLHttpRequest');
const btnJQuery = document.querySelector('#btnJQuery');
const btnFetch = document.querySelector('#btnFetch');
const btnAxios = document.querySelector('#btnAxios');

const btnReset = document.querySelector('#btnReset');


btnReset.addEventListener('click', function () {
  result.innerHTML = 'Result';
  console.log('------ Reset ------');
});

btnXMLHttpRequest.addEventListener('click', function () {
  let request = new XMLHttpRequest();
  request.open('get', apiURL, true);
  request.send();
  request.onload = function () {
    const data = JSON.parse(this.responseText);
    console.log('------ AJAX: XMLHttpRequest ------');
    data.results.forEach(el => {
      console.log(el);
    });
    result.innerHTML = data.results[0].email;
  };
  request.onerror = function (err) {
    console.log('Error: ', err);
  };
});

btnJQuery.addEventListener('click', function () {
  $.ajax({
    url: apiURL,
    dataType: 'json',
    success: function (data) {
      console.log('------ AJAX: jQuery ajax ------');
      data.results.forEach(el => {
        console.log(el);
      });
      result.innerHTML = data.results[0].email;
    },
    error: function (err) {
      console.log('Error: ', err)
    },
  });
});

btnFetch.addEventListener('click', function () {
  fetch(apiURL, { method: 'GET' })
    .then(res => {
      return res.json();
    }).then(data => {
      console.log('------ AJAX: Fetch ------');
      data.results.forEach(el => {
        console.log(el);
      });
      result.innerHTML = data.results[0].email;
    }).catch(err => {
      console.log('Error: ', err);
    });
});

btnAxios.addEventListener('click', function () {
  axios.get(apiURL)
    .then(res => {
      return res.data;
    }).then(data => {
      console.log('------ AJAX: Axios ------');
      data.results.forEach(el => {
        console.log(el);
      });
      result.innerHTML = data.results[0].email;
    }).catch(err => {
      console.log('Error: ', err);
    });
});
