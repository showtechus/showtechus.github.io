$(document).ready(function() {
  // Load Data via AJAX
  var equipments = undefined;
  $.ajax({
    // TODO: use .hostname in production
    url:  "http://localhost:8888/json/inventory.json",
    dataType: "json",
    async: false,
    success: function(result, status, xhr) {
      equipments = result[0];
    },
    error: function(result, status, xhr) {
      alert("Error");
      alert(result);
      alert(status);
    }
  });

  // Give modal attributes to all equipments
  $(".equipments").each(function() {
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", ".equipment-info");
  });

  // Change information on modal
  $(".equipments").on("click", function() {
    var equipment = $(this);
    var modal = $(".equipment-info");
    var title = $("h4", equipment).html();

    // Change title
    $(".modal-header .modal-title", modal).html(title);

    // Change Body
    $(".modal-body", modal).html("");
    $(".modal-body", modal).append($("img",equipment).clone());
    $(".modal-body", modal).append("<h3>Product Description</h3>");
    $(".modal-body", modal).append("<p>" + equipments[title.toUpperCase()] + "</p>");
  });
});
