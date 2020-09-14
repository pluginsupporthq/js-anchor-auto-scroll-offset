(function() {

	var conf = {
		padding: 50,
		breakpoint: 640,
		duration: 700 
	}
	let padding 
	if (document.currentScript.getAttribute('data-padding') != undefined) {
		padding = document.currentScript.getAttribute('data-padding')
	}else{
		padding = conf.padding;
	}

	if (document.currentScript.getAttribute('data-padding-sm') != undefined) {
		paddingSm = document.currentScript.getAttribute('data-padding-sm')
	}else{
		paddingSm = conf.padding;
	}
	if (document.currentScript.getAttribute('data-duration') != undefined) {
		conf.duration = document.currentScript.getAttribute('data-duration')
	}

	if (document.currentScript.getAttribute('data-breakpoint') != undefined) {
		conf.breakpoint = document.currentScript.getAttribute('data-breakpoint')
	}


	if (window.screen.width > conf.breakpoint) {
		conf.padding = padding
	}else{
		conf.padding = paddingSm
	}
	var scrollTo = function(to, duration) {
	    var
	    element = document.scrollingElement || document.documentElement,
	    start = element.scrollTop,
	    change = to - start,
	    startDate = +new Date(),
	    // t = current time
	    // b = start value
	    // c = change in value
	    // d = duration
	    easeInOutQuad = function(t, b, c, d) {
	        t /= d/2;
	        if (t < 1) return c/2*t*t + b;
	        t--;
	        return -c/2 * (t*(t-2) - 1) + b;
	    },
	    animateScroll = function() {
	        var currentDate = +new Date();
	        var currentTime = currentDate - startDate;
	        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
	        if(currentTime < duration) {
	            requestAnimationFrame(animateScroll);
	        }
	        else {
	            element.scrollTop = to;
	        }
	    };
	    animateScroll();
	};

	//t = current time
	//b = start value
	//c = change in value
	//d = duration
	Math.easeInOutQuad = function (t, b, c, d) {
	  t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	document.querySelectorAll('a[href*="#"]').forEach(a => {
	    a.addEventListener('click', function(event) {
	        event.preventDefault();
	        let elm = document.querySelector(this.hash);
	        if (elm == null) {
	        	document.location = this.href
	        }else{
	        	let to = elm.offsetTop - conf.padding
	        	scrollTo(to, conf.duration)
	        }
	    });
	});

	if(window.location.hash) {
		let elm = document.querySelector(window.location.hash);
	    let to = elm.offsetTop - conf.padding
	    scrollTo(to, conf.duration)
	} 
})();