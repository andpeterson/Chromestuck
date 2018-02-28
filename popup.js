chrome.browserAction.onClicked.addListener(function(tab) {
  //if currently open run features options
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    if((tabs[0]).url.indexOf("http://www.mspaintadventures.com/") > -1)
    {
      //create and open a new window
      window_ = open("popup.html", "_blank", "width=300, height=350");
      //wait until new window is fully loaded
      $(window_).load(function(){
        //request cookie information
        chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
          //send cookies to current tab
          chrome.tabs.sendMessage(tabs[0].id, "cookie request", function(responce){
            console.log(responce);
            //extract cookies
            var cookies = responce.split(';');
            //set checkboxes
            for(var i = 0; i < cookies.length; ++i)
            {
              if(cookies[i].indexOf("true") > -1 || cookies[i].indexOf("false") > -1)
              {
                var name = cookies[i].split('=');
                name[0] = name[0].substr(1); //removes the space at the beginnning
                console.log(name[0]);
                if(name[1] == "true")
                {
                  console.log("true");
                  window_.document.getElementById(name[0]).checked = true;
                }
                else if(name[1] == "false")
                {
                  console.log("false");
                  window_.document.getElementById(name[0]).checked = false;
                }
              }
            }
          });
        });
        //wait till the submit button is clicked
        window_.document.getElementById('submit').addEventListener("click", function(){
          //add all checkbox values to cookies string
          var cookies="keys=" + (window_.document.getElementById("keys").checked) + "-";
          cookies+="cleanup=" + (window_.document.getElementById("cleanup").checked) + "-";
          cookies+="colour=" + (window_.document.getElementById("colour").checked) + "-";
          cookies+="names=" + (window_.document.getElementById("names").checked) + "-";
          cookies+="Daedra=" + (window_.document.getElementById("Daedra").checked);
          //query current tab to send data to
          chrome.tabs.query({active: true, url: "http://www.mspaintadventures.com/*"}, function(tabs){
            //send cookies to current tab
            chrome.tabs.sendMessage(tabs[0].id, cookies)
          });
          window_.close();
        });
      });
    }
    else //if current tab isn't homestuck
    {
      //open homestuck
      window.open("http://www.mspaintadventures.com/?s=6&p=001901", "_newtab");
    }
  });
});