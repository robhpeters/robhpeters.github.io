

(function() {
    var httpRequest;
    document.getElementById("myButton").onclick = function() { getJSONData('https://robhpeters.github.io/data/my_degrees.json');
  };
  // getJSONData creates a new XMLHttpRequest object
  function getJSONData(url) {
    httpRequest = new XMLHttpRequest();
     // if the object is not successfully created, exit and provide an alert
     if (!httpRequest){
       alert("Exiting : Cannot create an XMLHTTP instance");
       return false;
     }
     // handle the server response, call alerContents when the state of the request changes
     httpRequest.onreadystatechange = printContents;
     // make the request with open() and send()
     httpRequest.open('GET', url);
     httpRequest.send();
  }
  // check for the state of the request if it is DONE, then we know we received a full response from the server
  function printContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // check the response code, 200 indicates a successful AJAX call
      if (httpRequest.status === 200) {
        // if successful, write the responseText property of the XMLHttpRequest object
        const myObj = JSON.parse(this.responseText);
        let text = "<table border='1'>"
        var i;
        for (i = 0; i < myObj['my_degrees'].length; i++) {
          const degreeObj = myObj['my_degrees'][i]['degree'];
          text += "<tr>"
          // Object.values(animals).forEach(val => console.log(val));
          for (const property in degreeObj){
            text += "<td>" + degreeObj[property] + "</td>";
          }
          text += "</tr>";
        }
        text += "</table>"
        document.getElementById("jsondata").innerHTML = text;
      } else {
        // if our AJAX call is unsuccessful, provide an alert indicating that there was a problem
        alert("There was a problem with the request");
      }
    }
  }
})();
