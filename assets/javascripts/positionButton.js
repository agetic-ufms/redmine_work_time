$(document).ready(function() {
	$( "#dialog" ).dialog({
	    autoOpen: false,
	    height: 400,
	    width: 500,
	    position: { my: "left center", of: "#dialog-link" }
    });


	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});

    // .position() uses position relative to the offset parent, 
    var activity_field = $("#time_entry_activity_id");
    var pos = activity_field.position();

    // .outerWidth() takes into account border and padding.
    var width = activity_field.outerWidth();

    //show the menu directly over the placeholder
    $("#dialog-link").css({
        position: "absolute",
        top: (pos.top + 6) + "px",
        left: (pos.left + width + 6) + "px",
        padding: "2px",
        margin: "1px"
    }).show();
});
