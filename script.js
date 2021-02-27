$(document).ready(function() {
  $( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }

    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css('background-color', "#" + hex );
    }
    function refreshText() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#text" ).css('color', "#" + hex );
    }
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max:255,
      min:0
    });
    $( "#colorBtn" ).click(function() {
      $( "#red, #green, #blue" ).slider({
        slide: refreshText,
        change: refreshText
      });
    });
    $( "#backgroundColorBtn" ).click(function() {
      $( "#red, #green, #blue" ).slider({
        slide: refreshSwatch,
        change: refreshSwatch
      });
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  } );
  
});
