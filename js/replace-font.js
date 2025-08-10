// - fonts 'comic sans ms,cursive' are not preinstalled on android or iOS devices, so the font does not display properly 
// - Solution - download Google Font similar to comic sans as a replacement on mobile devices (the <link> tag uses the attribute data-mobile="true", which downloads the font only on 768px and smaller viewports
// - the following script finds <span> tags with the inline font-family:comic sans ms,cursive and adds a css class that will replace the font with the Google Font. The inline style on larger viewports will not be impacted

$( document ).ready(function() {
		
	$('span').filter(function() {
	   	return $(this).is("[style*='comic sans']") === true; // if style contains 'comic sans'
		})
		.addClass("replace-font-mobile");
});