$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2100);
        return false;
      }
    }
  });
});

$(window).load(function(){
    setTimeout(function() {
      $('.loader').fadeOut();
      $('body').css('overflowY', 'auto'); 
    }, 2000);
});
// $.scrollingParallax('http://i1301.photobucket.com/albums/ag119/jabattack1/clouds_zpsjupnhatn.jpg');

// $.scrollingParallax('http://i1301.photobucket.com/albums/ag119/jabattack1/clouds_zpsjupnhatn.jpg', { 
//     bgWidth : '200%', 
//     enableHorizontal : true 
// });
$( document ).ready(function() {
// $('body').scrollingParallax();
console.log('connected')

var services = "<p id='row1'>Dry Cleaning<br><br><br>Traditional Laundered Shirt Service<br><br><br>Furs and Leather Cleaning<br><br><br>Wedding Dress Cleaning and Preservation</p><p id='row2'>Flat Work Laundry Service<br><br><br>Household Items<br><br><br>Alterations<br><br><br>Laundry Jean Service</p><p id='row3'>Wash/Dry/Fold Laundry Service<br><br><br>Designer Purse/Handbag Cleaning<br><br><br>Pick-up and Delivery Service</p><p id='servant'>**Call us if you have any questions about our services or have additional needs.  (908) 464-5784</p>"
var about = "<p id='explanation'>We strive to pursue perfection, in service and in quality. Come experience our service - we are here to help you. We offer Dry Cleaning, Tailoring, Leather & Suede Cleaning plus many other services.  All of this is done with the finest care and attention to detail. Come and try us out, we look forward to helping you with all of your garment care needs.</p>"
var contact ="<div id='address1'><p id='addy1'>37 South St, New Providence, NJ 07974</p><p id='phone2'>(908) 464-5784</p><p id='schedule'>Monday - Friday<br><br>Saturday<br><br>Sunday</p><p id='time1'>7AM-6PM<br><br>8AM-4PM<br><br>CLOSED</p><img id= 'map' src='https://i.imgur.com/7c1M7Qe.png' /><div id='mapcircle'></div></div>"


$('#service_content').append(services);
$('#about_content').append(about);
$('#contact_content').append(contact);


  
});