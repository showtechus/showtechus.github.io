$(document).ready(function() {
  // Give modal attributes to all equipments
  $(".equipments").each(function() {
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", ".equipment-info");
  });

  // Change information on modal
  $(".equipments").on("click", function() {
    var equipment = $(this);
    var modal = $(".equipment-info");

    // Change title
    $(".modal-header .modal-title", modal).html($("h4", equipment).html());


  });
});
