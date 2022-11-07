/* methods to hide and show the dropdown content */
buttons = document.querySelectorAll(".dropbtn");
dropdown1 = document.getElementById("myDropdown1");

// buttons[0].addEventListener('mouseover', () => {
//     programmingList();
// });

// dropdown1.addEventListener('mouseout', () => {
//     programmingList();
// });

function programmingList() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  function databaseList() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  
  function WebTechList() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  /* methods to redirect to tutorial page that user will select from dropdown list */
//   function java() {
//      window.location.replace("https://www.javatpoint.com/java-tutorial");
//   }
//   function python() {
//      window.location.replace("https://www.javatpoint.com/python-tutorial");
//   }
//   function cpp() {
//      window.location.replace("https://www.javatpoint.com/cpp-tutorial");
//   }
//   function c() {
//      window.location.replace("https://www.javatpoint.com/c-programming-language-tutorial");
//   }
//   function mysql() {
//      window.location.replace("https://www.javatpoint.com/mysql-tutorial");
//   }
//   function mDB() {
//      window.location.replace("https://www.javatpoint.com/mongodb-tutorial");
//   }
//   function cassandra() {
//      window.location.replace("https://www.javatpoint.com/cassandra-tutorial");
//   }
//   function php() {
//      window.location.replace("https://www.javatpoint.com/php-tutorial");
//   }
//   function css() {
//      window.location.replace("https://www.javatpoint.com/css-tutorial");
//   }
//   function js() {
//      window.location.replace("https://www.javatpoint.com/javascript-tutorial");
//   }

// Funtion name() {
// redirect 
// }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }