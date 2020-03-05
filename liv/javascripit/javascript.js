// for preloader
var preloader = document.getElementById('loading');
function  preloadfunction(){
    preloader.style.display = 'none' ;
}
/* Nav bar start here*/

$('#nav-toggle').click(function(){
  $('body').toggleClass('open');
});

/* Nav bar start here*/
/* logo Start here */
const logo = document.querySelectorAll('#logo path');
for(let i=0;i<logo.length;i++){
  console.log(logo[i].getTotalLength());
}
/* logo End here */
$('#girl').hover(function(){
  $('#facebook').show();
  $('#instagram').show();
  $('#twitter').show();

})

