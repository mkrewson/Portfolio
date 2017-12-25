$(document).ready(function(){
    $( '#paycraveImg' ).mouseenter( showOverlay );
    $( '#paycraveOverlay' ).mouseleave( showImg );

    $( '#funderImg' ).mouseenter( showOverlay2 );
    $( '#funderOverlay' ).mouseleave( showImg2 );

    function showOverlay() {
        console.log("here");
        $( '#paycraveImg' ).css('z-index', 1);
        $( '#paycraveOverlay' ).css('z-index', 2);
    }
    
    function showImg() {
        $( '#paycraveImg' ).css('z-index', 2);
        $( '#paycraveOverlay' ).css('z-index', 1);
    }

    function showOverlay2() {
        $( '#funderImg' ).css('z-index', 1);
        $( '#funderOverlay' ).css('z-index', 2);
    }
    
    function showImg2() {
        $( '#funderImg' ).css('z-index', 2);
        $( '#funderOverlay' ).css('z-index', 1);
    }
});
