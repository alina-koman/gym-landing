document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
        });

        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'visible';
            });
        });
    }

    const track = document.getElementById('sliderTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (track && nextBtn && prevBtn) {
        const sliderBreakpoint = 1139;
        const transitionTime = 500;

        let cards = Array.from(track.querySelectorAll('.ticket-card'));

        if (cards.length > 0 && !track.querySelector('.slider-clone')) {
            const clonesStart = cards.map(c => c.cloneNode(true));
            const clonesEnd = cards.map(c => c.cloneNode(true));

            clonesStart.forEach(c => c.classList.add('slider-clone'));
            clonesEnd.forEach(c => c.classList.add('slider-clone'));

            clonesEnd.forEach(clone => track.appendChild(clone));
            clonesStart.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));

            cards = Array.from(track.querySelectorAll('.ticket-card'));

            const style = document.createElement('style');
            style.innerHTML = `@media (min-width: ${sliderBreakpoint + 1}px) { .slider-clone { display: none !important; } }`;
            document.head.appendChild(style);
        }

        let currentIndex = cards.length / 3;

        let isTransitioning = false;

        function getSlideStep() {
            const card = cards[0];
            if (!card) return 0;
            const cardWidth = card.getBoundingClientRect().width;
            const trackStyle = window.getComputedStyle(track);
            const gap = parseFloat(trackStyle.gap) || 0;
            return cardWidth + gap;
        }

        function updateSlider(enableTransition = true) {
            if (window.innerWidth > sliderBreakpoint) {
                track.style.removeProperty('transform');
                track.style.removeProperty('transition');
                return;
            }

            const step = getSlideStep();
            if (step === 0) return;

            const offset = -currentIndex * step;

            if (enableTransition) {
                track.style.transition = `transform ${transitionTime}ms ease-in-out`;
            } else {
                track.style.transition = 'none';
            }

            track.style.setProperty('transform', `translateX(${offset}px)`, 'important');
        }

        track.addEventListener('transitionend', () => {
            if (!isTransitioning) return;

            const totalReal = cards.length / 3;

            if (currentIndex >= totalReal * 2) {
                currentIndex -= totalReal;
                updateSlider(false);
            }

            else if (currentIndex < totalReal) {
                currentIndex += totalReal;
                updateSlider(false);
            }
            isTransitioning = false;
        });

        nextBtn.addEventListener('click', () => {
            if (window.innerWidth > sliderBreakpoint || isTransitioning) return;
            isTransitioning = true;
            currentIndex++;
            updateSlider(true);
        });

        prevBtn.addEventListener('click', () => {
            if (window.innerWidth > sliderBreakpoint || isTransitioning) return;
            isTransitioning = true;
            currentIndex--;
            updateSlider(true);
        });

        window.addEventListener('resize', () => {
            updateSlider(false);
        });

        requestAnimationFrame(() => {
            updateSlider(false);
        });
    }
});