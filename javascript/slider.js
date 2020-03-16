var galleryThumbs = new Swiper(
	'.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		loop: true,
		freeMode: true,
		loopedSlides: 4, 
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	}
);
var galleryTop = new Swiper(
	'.gallery-top', {
		spaceBetween: 10,
		loop:true,
		loopedSlides: 4,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	}
);