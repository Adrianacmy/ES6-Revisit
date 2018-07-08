promise = new Promise((resolve, reject) => {
  // reject();
  let request = new XHTMLRquest();
  request.onload = () => {
    resolve();
  };
});


promise.then( () => {
  console.log('resolved');
}).then(() =>{
  console.log('second fun executed')
}).catch(() => {
  console.log('wrong');
});

// fetch helper
url = 'https://..../posts/';
fetch(url)
.then((response) => response.json())
.then((data) => {
  console.log(data);
}).catch((error) => console.log(error));
// recommending axios over fetch