$(function () {
	$('.autoplay').bxSlider({
      mode: 'horizontal', 
      speed:2000,
	  slideMargin: 30,
      auto: true,
      controls: true,
      nextText: 'Next',
	  prevText: 'Prev',
	});
    $(".control_slider").bxSlider({
		nextText: '<i class="fa-solid fa-chevron-right"></i>',
		prevText:'<i class="fa-solid fa-chevron-left"></i>',
		auto:true,
		pause: 2000,
		autoHover:true,
	})
    const btt = $('#back-to-top');
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            btt.addClass('visible');
        }else{
            btt.removeClass('visible');
        }
    })
    btt.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},2000)
    })
    if(jQuery.browser.mobile == true){
        location.href ="mobile/index.html"}
})

// tab 버튼
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = '';
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('is_on');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}