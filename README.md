# twentyfifteen-invertcolors
Invert twentyfifteen Wordpress theme colors based on device dark mode settings.

Add the following to twentyfifteen theme functions.php to enqueue the javascript:

wp_enqueue_script('invertcolors',get_template_directory_uri() . '/invert.js', array(), true);

'/invert.js' is the invert javascript code relative to the template directory path.  In this case, it is is wp-content/themes/twentyfifteen/invert.js

You can test it is working after adding this code by going to your darkmode settings on your browser or smartphone and toggling then going back to your site.

I have not tested this in other themes, I was just looking for specifically doing this in the theme I use -- theoretically, it should work in other themes but
mileage will definitely vary.


