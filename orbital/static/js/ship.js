(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

function search() {
  // Declare variables
  var input, tr, table, i, group_name;
  input = document.getElementById('search').value.toLowerCase();
  table = document.getElementById('group_data');
  tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(input) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function redirect(group_name) {
  location.href = "/accounts/ship/" + group_name;
}

(function () {  // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');

  s.src = 'https://shopbud.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

$(document).on("click", ".delete", function () {
  $.ajax({
    type: 'GET',
    url: "/accounts/deleteGroup",
    data: {
      "name": $('#group_name').text(),
    },
    success: function (response) {
      location.href = '/accounts/ship'
    }
  })
});