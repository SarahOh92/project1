/* ------------------
0. 변수지정
------------------ */
var visualWrap = $("#brandVisual"),
	visual = visualWrap.find(".visual_slide>li"),
	visualCount = visual.length,
	pager = visualWrap.find(".buttonList>li"),
	leftBtn = visualWrap.find(".btnImg>.prev"),
	rightBtn = visualWrap.find(".btnImg>.next"),
	current = 0,
	setIntervalId;

/* ------------------
1. 슬라이드 위치설정 함수
------------------ */
let visualPos = visual.each(function (i) {
	$(this).css("left", i * 100 + "%");
});

/* ------------------
2. timer() 각 함수로 인덱스 번호를 전달
   1초마다 반복 실행
------------------ */
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

/* ------------------
3. move() 위치이동 
  호출하는 쪽에서 값을 전달해줘야함
------------------ */
function move(tg, start, end) {
	tg.css("left", start).stop().animate({ left: end }, 500);
}

/* ------------------
4. 배너위에 마우스오버시 일시정지 함수
------------------ */
visualWrap.hover(
	function () {
		clearInterval(setIntervalId);
	},
	function () {
		timer();
	},
);

/* ------------------
5. 좌우(컨트롤)버튼추가
------------------ */
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

/* ------------------
6. 페이저 추가
------------------ */
pager.click(function () {
	var tg = $(this);
	var i = tg.index();
	pager.removeClass("on");
	tg.addClass("on");
	move1(i);
  cnt(i);

});

/* ------------------
7. 페이저 슬라이드함수
------------------ */
function move1(i) {
	if (current == i) return;
	var currentEl = visual.eq(current);
	var nextEl = visual.eq(i);
	currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
	nextEl.css("left", "100%").stop().animate({ left: "0%" }, 500);
	current = i;
}

/* ------------------
8. 카운터 동적생성
------------------ */
var counterEl = "<div class='counter'>1";
$("#wrap").append(counterEl);
var counter = $(".counter");
function cnt(num) {
	counter.html(`${num + 1}`);
}