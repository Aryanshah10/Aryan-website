document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function password (event) {
      this.textContent = "Loged In!!!";
      var name =
       document.getElementById("user").value;
       

       if (name==="Khadyta"){
         var pass =
         document.getElementById("pass").value;
            if (pass=="12345"){
                 document
                 .getElementById("content")
                 .innerHTML="<iframe id='sheet' src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTBHd36SOTQGX34jWkQDRmXkSfY01bUB5CQvY678FVpgq6pnuS-lGI5rAw9T6nQuGtdBr7B7NsL3MPD/pubhtml?widget=true&amp;headers=false'></iframe>";
                 this.textContent = "Loged In!!!";

                 document.querySelector(".box").innerHTML="";
            }
        }
      
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", password);

  }
);