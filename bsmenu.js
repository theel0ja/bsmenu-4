/* Original code: https://stackoverflow.com/questions/17717025/how-to-active-nav-bar-in-bootstrap-with-jquery#17737393 */
/* Modified by @theel0ja for Bootstrap 4 */
$(document).ready(function () {
  var url = window.location;
  $('nav.navbar ul a[href="'+ url +'"]').parent().addClass('active');
  $('nav.navbar ul a').filter(function() {
    return this.href == url;
  }).parent().addClass('active');
});
