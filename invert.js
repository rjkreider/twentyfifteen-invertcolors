// Check to see what our preference is on page load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').match
es) {
    invertColors();
}

// Event Listener to watch for mode changes.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =
> {
    //const newColorScheme = e.matches ? "dark" : "light";
    invertColors();
});

// Function to actually invert...

function invertColors() {
    // to not invert images and youtube, use img and .wp-block-embed-youtube.  If other things get inverted and look like shit, add them to the css below.
    var css = 'html, img, .wp-block-embed-youtube {-webkit-filter: invert(100%);
' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: inv
ert(100%); }';
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    if (!window.counter) {
        window.counter = 1;
    } else {
        window.counter++;
        if (window.counter % 2 == 0) {
            var css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
        }
    }
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}
