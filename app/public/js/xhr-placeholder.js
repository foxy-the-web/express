const makeRequest = function(method, url, callback){

  // body data for POST requests
  let data = null;
  let result = 'Test';
  let xhr = new XMLHttpRequest;

  // use XMLHttpRequest2
  xhr.withCredentials = true;

  // store response as JSON
  xhr.onreadystatechange = async function(e) {
    
    // initiate a promise
    let promise = new Promise((resolve, reject) => {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      }
    });

    let result = await promise; // wait till the promise resolves (*)

    callback(result);
    
  };

  xhr.open(method, url);
  xhr.setRequestHeader("Cache-Control", "no-cache");
  xhr.send(data);

};

const testCallback = (response) => {
  
  let keys = Object.keys(response[0]);
  
  response.forEach(item => {
    
    document.write('<p>');

    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      document.write(key + ': ' + item[key] + '</br>');
    }
    
    document.write('</p>');

  });

}

makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts', testCallback);