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
  
  for(element of response) {
    let keys = Object.keys(element);
  
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      document.write(key + ': ' + element[key] + '</br>');
    }

  }

}

makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts', testCallback);