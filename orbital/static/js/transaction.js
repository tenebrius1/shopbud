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

// Get CSRF token
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Delete button AJAX Request
$(document).on("click", ".delete", function () {
  $(this).parents("tr").remove();
  $.ajax({
    type: 'POST',
    url: "/accounts/deleteTransaction",
    data: {
      "name": $(this).parent().parent().siblings().closest(".name").text(),
      "price": $(this).parent().parent().siblings().closest(".price").text(),
      "date": $(this).parent().parent().siblings().closest(".date").text(),
      "company": $(this).parent().parent().siblings().closest(".company").text(),
      csrfmiddlewaretoken: getCookie('csrftoken'),
    },
  })
});

// Save button AJAX Request
$(document).on("click", ".btnSave", function () {
  $.ajax({
    type: 'POST',
    url: "/accounts/editTransaction",
    data: {
      "name": $(this).parent().parent().siblings().closest(".name").text(),
      "price": $(this).parent().parent().siblings().closest(".price").text(),
      "date": $(this).parent().parent().siblings().closest(".date").text(),
      "company": $(this).parent().parent().siblings().closest(".company").text(),
      csrfmiddlewaretoken: getCookie('csrftoken'),
    },
  })
});

function displayExpenses() {
  $.ajax({
    type: 'GET',
    url: "/accounts/displayExpenses",
    success: function (response) {
      new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: "pie",
        data: {
          labels: ["Lazada", "Shopee", "Amazon", "Others"],
          datasets: [{
            data: [response["lazada"], response["shopee"], response["amazon"], response["others"]],
            backgroundColor: [
              window.theme.primary,
              window.theme.warning,
              window.theme.danger,
            ],
            borderWidth: 5
          }]
        },
        options: {
          responsive: !window.MSInputMethodContext,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          cutoutPercentage: 75
        }
      });

      $(".amazon").text("$" + (response["amazon"] ? response["amazon"] : "0.00"));
      $(".lazada").text("$" + (response["lazada"] ? response["lazada"] : "0.00"));
      $(".shopee").text("$" + (response["shopee"] ? response["shopee"] : "0.00"));
      $(".others").text("$" + (response["others"] ? response["others"] : "0.00"));
    },
  })
}

// Display expenses
$(document).ready(displayExpenses());

// Edit functions
function Save() {
  var par = $(this).parents("tr"); //tr 
  var tdItem = par.children("td.name");
  var tdDate = par.children("td.date");
  var tdCompany = par.children("td.company");
  var tdPrice = par.children("td.price");
  var tdEdit = par.find(".btnSave");
  var tdDelete = par.find(".cancel");

  tdItem.html(tdItem.children("input[type=text]").val());
  tdDate.html(tdDate.children("input[type=date]").val());
  tdCompany.html(tdCompany.children("select#company").val())
  tdPrice.html(tdPrice.children("input[type=text]").val());
  tdEdit.replaceWith("<a class='edit' title='Edit' data-bs-toggle='tooltip' data-bs-placement='top'>" +
    "<i class='bi bi-pencil-square me-3'></i>" +
    "</a>");
  tdDelete.replaceWith("<a class='delete' title='Delete' data-bs-toggle='tooltip' data-bs-placement='top'>" +
    "<i class='bi bi-trash-fill me-3'></i>" +
    "</a>");

  $(".edit").bind("click", Edit);
};

function Edit() {
  var par = $(this).parents("tr"); //tr 
  var tdItem = par.children("td.name");
  var tdDate = par.children("td.date");
  var tdCompany = par.children("td.company");
  var tdPrice = par.children("td.price");
  var tdSave = par.find(".edit");
  var tdCancel = par.find(".delete");
  
  // Extract and format original date
  let date = tdDate.html().split("/")
  date = date[2] + "-" + date[1] + "-" + date[0]

  let selectMenu = "<select name='company' id='company' required>" +
  "<option value=''>---Select platform---</option>" +
  "<option value='Shopee'>Shopee</option>" +
  "<option value='Lazada'>Lazada</option>" +
  "<option value='Amazon'>Amazon</option>" +
  "<option value='Others'>Others</option>" +
  "</select>"
  // Extract original selected company
  let cmp = "'" + tdCompany.html() + "'"
  selectMenu = selectMenu.replace(cmp, cmp + " selected")

  let items = [tdItem.html(), tdDate.html(), tdCompany.html(), tdPrice.html()]

  tdItem.html("<input type='text' class='name' value='" + tdItem.html() + "'/>");
  tdDate.html("<input type='date' value='" + date + "' required/>");
  tdCompany.html(selectMenu);
  tdPrice.html("<input type='text' value='" + tdPrice.html() + "' required/>");
  tdSave.replaceWith("<a class='btnSave' title='Save' data-bs-toggle='tooltip' data-bs-placement='top'>" +
    "<i class='bi-check-square me-3'></i>" +
    "</a>");
  tdCancel.replaceWith("<a class='cancel' title='Cancel' data-bs-toggle='tooltip' data-bs-placement='top'>" +
    "<i class='bi bi-x-square me-3'></i>" +
    "</a>");

  $(".btnSave").bind("click", Save);
  $(".cancel").bind("click", function () {
    var par = $(this).parents("tr"); //tr 
    var tdItem = par.children("td.name");
    var tdDate = par.children("td.date");
    var tdCompany = par.children("td.company");
    var tdPrice = par.children("td.price");
    var tdEdit = par.find(".btnSave");
    var tdDelete = par.find(".cancel");

    tdItem.html(items[0]);
    tdDate.html(items[1]);
    tdCompany.html(items[2]);
    tdPrice.html(items[3]);
    tdEdit.replaceWith("<a class='edit' title='Edit' data-bs-toggle='tooltip' data-bs-placement='top'>" +
      "<i class='bi bi-pencil-square me-3'></i>" +
      "</a>");
    tdDelete.replaceWith("<a class='delete' title='Delete' data-bs-toggle='tooltip' data-bs-placement='top'>" +
      "<i class='bi bi-trash-fill me-3'></i>" +
      "</a>");

    $(".edit").bind("click", Edit);
  });
};

$(function () { //Add, Save, Edit and Delete functions code 
  $(".edit").bind("click", Edit);
});