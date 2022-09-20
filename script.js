function validation()
        {
          var form = document.getElementById("form");
          var email = document.getElementById("email").value;
          var text = document.getElementById("error-text");
          var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

          if (email.match(pattern))
          {
            // form.classList.remove("error-icon");
            // form.classList.add("");
            text.innerHTML = "";
            text.style.color = "#00ff00";
          }
          else
          {
            // form.classList.add("error-icon");
            // form.classList.remove("");
            text.innerHTML = "Please Enter Valid Email.";
            text.style.color = "#ff0000";
          }
        }