$(function(){
	var visualWrap = $("#brandVisual"),
	visual = visualWrap.find(".visual_slide>li"),
	visualCount = visual.length,
	pager = visualWrap.find(".buttonList>li"),
	leftBtn = visualWrap.find(".main_bn_slider_btn>li.slider_prev"),
	rightBtn = visualWrap.find(".main_bn_slider_btn>li.slider_next"),
	current = 0,
	setIntervalId;

let visualPos = visual.each(function (i) {
	$(this).css("left", i * 100 + "%");
});
timer();

function timer() {
	setIntervalId = setInterval(function () {
		var prev = visual.eq(current);
		var prevpager = pager.eq(current);
		move(prev, 0, "-100%");
		prevpager.removeClass("on");
		current++;
		if (current == visual.length) {
			current = 0;
		}
		var next = visual.eq(current);
		var nextpager = pager.eq(current);
		move(next, "100%", "0%");
		nextpager.addClass("on");
		cnt(current);
	}, 3000);
}
function move(tg, start, end) {
	tg.css("left", start).stop().animate({ left: end }, 500);
}
visualWrap.hover(
	function () {
		clearInterval(setIntervalId);
	},
	function () {
		timer();
	},
);

rightBtn.click(function () {
	var prev = visual.eq(current);
  	var prevpager=pager.eq(current);
  	prevpager.removeClass('on');
	move(prev, 0, "-100%");
	current++;
	if (current == visualCount) current = 0;
	var next = visual.eq(current);
  	var nextpager=pager.eq(current);
  	nextpager.addClass('on');
	move(next, "100%", "0%");
  	cnt(current);
	return false;
});

leftBtn.click(function () {
	var prev = visual.eq(current); //0
  	var prevpager=pager.eq(current);
  	prevpager.removeClass('on');
	move(prev, 0, "100%");
	current--;
	console.log(current);
	if (current == -visualCount) current = 0;
	var next = visual.eq(current);
  	var nextpager=pager.eq(current);
  	nextpager.addClass('on');
	move(next, "-100%", "0%");
  	cnt(current);
	return false;
});

var counterEl = "<div class='counter'>1";
$("#wrap").append(counterEl);
var counter = $(".counter");
function cnt(num) {
	counter.html(`${num + 1}`);
}
})