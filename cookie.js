/* A snippet that generates a random number of 10 digits on page load and save it for next pages using cookies
author : Nessrine Hammami
*/

const timeout = 120000    // 2 minutes in ms
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days : the number of days until the cookie should expire


// This can be replaced by the manual execution, just call the function start()
window.onload = start()

function start() {
  // Attempt to pull the code from cookie storage
  let code = getCookie('code');
  // generate code for the first page  
  if (code === ""){
    setCode();
   }
  console.log(code)
  
  // Get the URL parameters
  let urlParams = new URLSearchParams(window.location.search)
  
  // Check to see if the source parameter exists
  if (!urlParams.has('source')) {
    // If not, begin the timer
    setTimeout(() => {
      setCode()
    }, timeout)
  } else {
    setCode()
  }
}
// Attempt to save the random number using a cookie 
function setCookie(name, value)
{
  document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCode() {
  const code = Math.floor(Math.random() * 10000000000)
  setCookie('code',code)
  console.log(code)
}
