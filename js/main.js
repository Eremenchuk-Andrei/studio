const modal = new GraphModal();
document.querySelector('.btn-order').addEventListener('click', () => {
	new GraphModal().open('first');
});

ymaps.ready(init);
function init() {
	var map = new ymaps.Map("map", {
		center: [31.915373, 34.768247], // ваши данные
		zoom: 15
	});
	var myPlacemark = new ymaps.Placemark(
		[31.915373, 34.768247],
		{},
		{
			iconLayout: "default#image",
			iconImageHref: "img/ellipse.png",
			iconImageSize: [20, 20],
		}
	);
	map.geoObjects.add(myPlacemark);
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

gsap.registerPlugin(ScrollTrigger);

gsap.to('.text-wrap__two', {
	scrollTrigger: {
		trigger: '.text-wrap__two',
		toggleActions: 'play'
	},
	y: 0,
	duration: 1
})

gsap.to('.part-two', {
	scrollTrigger: {
		trigger: '.part-two',
		toggleActions: 'play'
	},
	y: 0,
	duration: 1,
	delay: .5,
	zIndex: 0
})

gsap.to('.team', {
	scrollTrigger: {
		trigger: '.team',
		toggleActions: 'play'
	},
	backgroundPosition: 'right 0 bottom 36%',
	duration: .5,
})

gsap.to('.team', {
	scrollTrigger: {
		trigger: '.team',
		toggleActions: 'play'
	},
	backgroundSize: '925px 560px',
	backgroundPosition: 'center center',
	duration: .5,
	delay: .5
})

gsap.to('.team', {
	scrollTrigger: {
		trigger: '.team',
		toggleActions: 'play'
	},
	backgroundPosition: 'center -100%',
	duration: .5,
	delay: 1
})

gsap.to('.list-team', {
	scrollTrigger: {
		trigger: '.list-team',
		toggleActions: 'play'
	},
	maxWidth: '1064px',
	transform: 'translateY(0)',
	opacity: 1,
	visibility: 'visible',
	gridGap: '30px',
	delay: 1,
	duration: .5,
	
})

gsap.to('.settings-text', {
	scrollTrigger: {
		trigger: '.settings-text',
		toggleActions: 'play'
	},
	transform: 'translateY(0)',
	//opacity: 1,
	duration: .5,
})

gsap.to('.head-portfolio', {
	scrollTrigger: {
		trigger: '.head-portfolio',
		toggleActions: 'play'
	},
	opacity: 1,
	duration: 1.5,
})

gsap.to('.first-section', {
	scrollTrigger: {
		trigger: '.first-section',
		toggleActions: 'play'
	},
	display: 'grid',
	transform: 'translateX(0)',
	duration: 1,
})

gsap.to('.second-section', {
	scrollTrigger: {
		trigger: '.second-section',
		toggleActions: 'play'
	},
	display: 'grid',
	transform: 'translateX(0)',
	duration: 1,
})

gsap.to('.our-text', {
	scrollTrigger: {
		trigger: '.our-text',
		toggleActions: 'play'
	},
	opacity: 1,
	duration: 1.5,
})

gsap.to('.our-contacts__header', {
	scrollTrigger: {
		trigger: '.our-contacts__header',
		toggleActions: 'play'
	},
	opacity: 1,
	duration: 1.5,
})

gsap.to('.phone', {
	scrollTrigger: {
		trigger: '.phone',
		toggleActions: 'play'
	},
	transform: 'translateY(0)',
	opacity: 1,
	duration: .5,
	delay: .3
})

gsap.to('.mail', {
	scrollTrigger: {
		trigger: '.mail',
		toggleActions: 'play'
	},
	transform: 'translateY(0)',
	opacity: 1,
	duration: .5,
	delay: .3
})

gsap.to('.map', {
	scrollTrigger: {
		trigger: '.map',
		toggleActions: 'play'
	},
	transform: 'translateX(0)',
	opacity: 1,
	duration: 1,
	delay: .3
})

let mm = gsap.matchMedia();
mm.add("(min-width: 1224px)", () => {
	gsap.timeline({ repeatDelay: 1 })
		.to('.bg-text__first', { backgroundPosition: '3px -224px, 100% center', duration: 1 })
		.to('.double', { backgroundPosition: '3px -224px, 100% center', duration: .3, delay: .1 })
		.to('.bg-text__first', { transform: 'translateX(-75.5px) translateY(-20px) scale(1.6)', duration: .5, })
		.to('.double', { transform: 'translateX(-117px) translateY(-10px) scale(1.6)', duration: .5 })
		.to('.text-wrap', { left: 'calc(0% + 265px)', duration: .5, delay: .1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.wrap-down__section', { textAlign: 'left', transform: 'translateX(-146px) translateY(90px)', delay: 2.5, duration: 1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.hero-2', { transform: 'translateX(-184px) translateY(30px)', delay: 2.5, duration: 1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.bg-text__hero', { transform: 'translateX(-410px) translateY(95px)', delay: 2.5, duration: 1, })
		.to('.double', { display: 'block', transform: 'translateX(-75.5px) translateY(-19.9px) scale(1.6)', duration: .5, })
})

if (document.documentElement.clientWidth <= 736) {

	gsap.to('.list-team', {
		scrollTrigger: {
			trigger: '.list-team',
			toggleActions: 'play'
		},
		opacity: 1,
		duration: 5,
		delay: .1
	})

	gsap.to('.swiper-button-next', {
		scrollTrigger: {
			trigger: '.team',
			toggleActions: 'play'
		},
		opacity: 1,
		visibility: 'visible',
		duration: 4,
		delay: .1
	})
	
	gsap.to('.swiper-button-prev', {
		scrollTrigger: {
			trigger: '.team',
			toggleActions: 'play'
		},
		opacity: 1,
		visibility: 'visible',
		duration: 4,
		delay: .1
	})
	
	mm.kill(gsap);
}

let devSwiper = document.querySelector('.swiper')
let adaptiveSlider;

function mSlider() {
	if (window.innerWidth <= 736 && devSwiper.dataset.mobile === "false") {
		 adaptiveSlider = new Swiper(devSwiper, {
			grabCursor: true,
			loop: true,
			effect: "creative",
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			creativeEffect: {
				prev: {
					shadow: true,
					origin: "left center",
					translate: ["-5%", 0, -200],
					rotate: [0, 100, 0],
				},
				next: {
					origin: "right center",
					translate: ["5%", 0, -200],
					rotate: [0, -100, 0],
				}
		
			}
		})

		 devSwiper.dataset.mobile = "true";
	}

	if (window.innerWidth > 736 && devSwiper.dataset.mobile == "true") {
		devSwiper.dataset.mobile = "false";
		if (devSwiper.classList.contains("swiper-initialized")) {
			adaptiveSlider.destroy();
		}
	}
}

mSlider();


window.addEventListener("resize", () => {
	mSlider();
})


window.addEventListener("resize", () => {
	
	if (document.documentElement.clientWidth <= 1224) {
		mm.kill(gsap);
	}
	if (document.documentElement.clientWidth >= 736) {
		let k = document.querySelector('.list-team');
		k.style.transform = 'translateY(0px)';
		k.style.opacity = '1';
		k.style.visibility = 'visible';
		k.style.gridGap = '30px';
	}

	if (document.documentElement.clientWidth <= 736) {
		gsap.to('.swiper-button-next', {
			scrollTrigger: {
				trigger: '.team',
				toggleActions: 'play'
			},
			opacity: 1,
			visibility: 'visible',
			duration: 4,
			delay: .1
		})
		
		gsap.to('.swiper-button-prev', {
			scrollTrigger: {
				trigger: '.team',
				toggleActions: 'play'
			},
			opacity: 1,
			visibility: 'visible',
			duration: 4,
			delay: .1
		})
		
		mm.kill(gsap);
	} else {
		let btnPrev = document.querySelector('.swiper-button-prev');
		let btnNext = document.querySelector('.swiper-button-next');
		btnPrev.style.visibility = 'hidden';
		btnNext.style.visibility = 'hidden';	
		mm.add(gsap);
	}
});



mm.add("(max-width: 1223px)", () => {
	gsap.timeline({ repeatDelay: 1 })
		.to('.bg-text__first', { backgroundPosition: '3px -224px, 100% center', duration: 1.6, delay: .1 })
		.to('.double', { backgroundPosition: '3px -224px, 100% center', duration: .3, delay: .1 })
		.to('.bg-text__first', { transform: 'translateX(-13.5px) translateY(-1px) scale(1.1)', duration: .3, delay: .1 })
		.to('.double', { transform: 'translateX(-117px) translateY(-10px) scale(1.1)', duration: .3 })
		.to('.text-wrap', { left: 'calc(0% + 95px)', duration: 1, delay: .1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.wrap-down__section', { textAlign: 'left', transform: 'translateX(-21px) translateY(55px)', delay: 3, duration: 1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.hero-2', { transform: 'translateX(-184px) translateY(30px)', delay: 3, duration: 1 })
	gsap.timeline({ repeatDelay: 1 })
		.to('.bg-text__hero', { fontSize: '68px', transform: 'translateX(-285px) translateY(72px)', delay: 3, duration: 1, })
		.to('.double', { display: 'block', transform: 'translateX(-13.5px) translateY(-.9px) scale(1.1)', duration: .3, })

});

if (document.documentElement.clientWidth <= 736) {
	mm.kill(gsap);
}
else {
	mm.add(gsap);
}


const video = document.querySelector('.back-video');
const btnPausedSvg = document.getElementById('video');
const btnPlaySvg = document.getElementById('video-play');
const btn = document.querySelector('.play');

const btnVyn = document.querySelector('.play-vynyl');
const videoVyn = document.querySelector('.back-video__vynil');
const btnPauseVyn = document.querySelector('.pause-vynyl-svg');
const btnPlayVyn = document.querySelector('.play-vynyl-svg');

const playPaused = (video, play, pause) => {
	let tl = gsap.timeline({ repeatDelay: 1 })
	if (video.paused) {
		video.play();
		tl.to(pause, { opacity: '1', duration: .1, visibility: 'visible' })
		tl.to(play, { opacity: '0', duration: .1, visibility: 'hidden' })
	} else {
		video.pause();
		tl.to(play, { opacity: '1', duration: .1, visibility: 'visible' })
		tl.to(pause, { opacity: '0', duration: .1, visibility: 'hidden' })
	}
}

btnVyn.addEventListener("click", function () {
	playPaused(videoVyn, btnPauseVyn, btnPlayVyn)
})

btn.addEventListener("click", function () {
	playPaused(video, btnPlaySvg, btnPausedSvg)
});

function validateName() {
	const name = document.getElementById('name');
	const error = document.getElementById('name-error');
	const re = /^[a-zA-Z]{2,30}$/;

	if (!re.test(name.value)) {
		error.classList.add('is-invalid');
	} else {
		error.classList.remove('is-invalid');
		console.log('noo')
	}
}

function validateEmail() {
	const email = document.getElementById('email');
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	const error = document.getElementById('error-mail');

	if (!re.test(email.value)) {
		error.classList.add('is-invalid');
	} else {
		error.classList.remove('is-invalid');
	}
}

function validatePhone() {
	const phone = document.getElementById('phone');
	const error = document.getElementById('error-phone');
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!re.test(phone.value)) {
		error.classList.add('is-invalid');
	} else {
		error.classList.remove('is-invalid');
	}
}
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

let selector = document.getElementById("selector");
let container = document.querySelector('.container-team');

container.onmouseover = function (e) {
	let el = e.target;
	var attribute = el.getAttribute('data-target');
	let team = document.querySelector('.team');
	if (attribute === 'first') {
		team.classList.add('back-text');
		team.style.backgroundPosition = 'center 0%';

	} else if (attribute === 'second') {
		team.style.backgroundPosition = 'center 0%';
		team.classList.add('back-text__two')
	} else if (attribute === 'third') {
		team.style.backgroundPosition = 'center 0%';
		team.classList.add('back-text__three')
	} else if (attribute === 'fourth') {
		team.style.backgroundPosition = 'center 0%';
		team.classList.add('back-text__fourth')
	} else if (attribute === 'fifth') {
		team.style.backgroundPosition = 'center 0%';
		team.classList.add('back-text__fifth')
	} else if (attribute === 'sixth') {
		team.style.backgroundPosition = 'center 0%';
		team.classList.add('back-text__sixth')
	}
}

container.onmouseout = function (e) {
	let el = e.target;
	// var attribute = el.getAttribute('data-target');
	let team = document.querySelector('.team');
	team.style.backgroundPosition = 'center -150%';
	team.classList.remove('back-text');
	team.classList.remove('back-text__two');
	team.classList.remove('back-text__three');
	team.classList.remove('back-text__fourth');
	team.classList.remove('back-text__fifth');
	team.classList.remove('back-text__sixth');

}




