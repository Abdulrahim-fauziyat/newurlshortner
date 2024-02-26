console.log(window.location);
const  url = document.querySelector("#url");
const  form = document.querySelector("form");
const  record = document.querySelector(".record");

form.addEventListener('submit',function (ev) {
      ev.preventDefault();
      console.log(url);
      let  originalUrl = url.value;
      let shortQueryStr = Math.floor(Math.random() * 10001 + 1);
      let shorturl = location.origin + location.pathname + '?url=' + shortQueryStr;

      //store the value as an object

      let newUrlObject = {
        original: originalUrl,
        short: shorturl
      }


      if( localStorage.getItem('URLS') && localStorage.getItem('URLS') !==null) {
        let oldData=JSON.parse( localStorage.getItem('URLS'));

        console.log(oldData)
        oldData.push(newUrlObject);
        localStorage.setItem('URLS', JSON.stringify(oldData));
        loadUrls(JSON.parse( localStorage.getItem('URLS')), record);

      } else {
        //save the details to local storage

        localStorage.setItem('URLS', JSON.stringify([newUrlObject]));
        loadUrls(JSON.parse( localStorage.getItem('URLS')), record);


      }

          
});


  loadUrls(JSON.parse( localStorage.getItem('URLS')), record);

function loadUrls(data, record) {

  let result = ""
    data?.map ( (item ) =>{
      result+= `<div class="url_item"> 
      
  <div class="url_inner_item">
      <div class="my_urls">        
          <p class="original">${item.original}</p>
          <p class="short">${item.short}</p>
      </div>      
      <div class="my_buttons">
      <a href="${item.short}"  id="${item.original}" class="short_url"> Visit</a>
      <a href="#" class="copy_btn"> Copy Url</a>
      <button class="delete_btn">Delete</button>
      </div>      
      </div>
      
      </div>`;
      
    

    })
    
    // display result to the html  element (.record)
    record.innerHTML =result;
}


let short_url = document.querySelectorAll(".short_url");
console.log(short_url)


  for (let item of short_url) {
      item.addEventListener('click', function(ev) {
          ev.preventDefault();
          let href=ev.target.href;
          let id =ev.target.id;
          // location.assign = href;
        console.log(id)
          //wait for 2 seconds and load the main/original url;

          setTimeout(()=> {location.href = id} , 2000);
      })
    }


    record.addEventListener('click', function (ev) {
      if (ev.target.classList.contains('copy_btn')) {
          let urlToCopy = ev.target.parentElement.previousElementSibling.querySelector('.short').textContent;
          navigator.clipboard.writeText(urlToCopy).then(function () {
              alert('URL copied to clipboard!');
          }, function (err) {
              console.error('Error copying URL to clipboard: ', err);
          });
      } else if (ev.target.classList.contains('delete_btn')) {
          let parentDiv = ev.target.closest('.url_item');
          let originalUrl = parentDiv.querySelector('.original').textContent;
          let urls = JSON.parse(localStorage.getItem('URLS'));
          let filteredUrls = urls.filter(item => item.original !== originalUrl);
          localStorage.setItem('URLS', JSON.stringify(filteredUrls));
          parentDiv.remove();
      }
  });





