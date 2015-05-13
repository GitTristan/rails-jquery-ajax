// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( "button" ).click(function() {
  var text = $( this ).text();
  $( "input" ).val( text );
});

$( document ).ready(function() {
  $(".foo").on("click", function() {
    var type = $("input").val();
    $.ajax({
              type: "POST",
              url: "/shoes",
              data: { "shoe": { "material": type } },
              success: function(data) {
                var show_link = "<a href='/shoes/" + data.id + "'>Show</a>";
                var edit_link = "<a href='/shoes/" + data.id + "'>Edit</a>";
                var delete_link = "<a href='/shoes/" + data.id + "' data-method='delete'>Delete</a>";
                $("tbody").append("<tr><td>" + data.material + "</td><td>" + show_link + "</td><td>" + edit_link + "</td><td>" + delete_link + "</td></tr>");
                $("input").val(" ");
              }
            })
  });

});
