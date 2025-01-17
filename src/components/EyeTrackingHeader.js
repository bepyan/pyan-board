export default function EyeTrackingHeader({ $app }) {

    const HeaderImage = new DOMParser().parseFromString(`
        <div class="eyeTrackingHeader">
            <svg viewBox="0 0 242 109" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g class="ears">
                    <g class="ear-left">
                    <ellipse class="ear-left-outer" transform="matrix(0.9391 -0.3436 0.3436 0.9391 -3.6062 17.8444)" cx="48.5" cy="19.1" rx="11.4" ry="13.8"/>
                    <ellipse class="ear-left-inner" transform="matrix(0.9391 -0.3436 0.3436 0.9391 -3.8876 17.4659)" cx="47.3" cy="19.7" rx="7.3" ry="11.2"/>
                    </g>
                    <g class="ear-right">
                    <ellipse class="ear-right-outer" transform="matrix(0.3436 -0.9391 0.9391 0.3436 106.5379 189.869)" cx="189.1" cy="18.7" rx="14.4" ry="11.9"/>
                    <ellipse class="ear-right-inner" transform="matrix(0.3436 -0.9391 0.9391 0.3436 106.8522 191.5127)" cx="190.4" cy="19.3" rx="11.7" ry="7.7"/>
                    </g>
                </g>
                <g class="eyes">
                    <defs>
                    <clipPath id="eyeRightClip">
                        <path d="M175,25c0-11-7.8-20-17.5-20S140,14,140,25c0,0.7,0,1.3,0.1,2h34.8 C175,26.3,175,25.7,175,25z"/>
                    </clipPath>
                    </defs>
                    <g class="eye-right">
                    <path class="eye-right-outer" d="M174.9,27H186c0-0.3,0-0.7,0-1c0-14.4-11.6-26-26-26c-14.4,0-26,11.6-26,26 c0,0.3,0,0.7,0,1h6.1H174.9z"/>
                    <path class="eye-right-inner" d="M175,25c0-11-7.8-20-17.5-20S140,14,140,25c0,0.7,0,1.3,0.1,2h34.8 C175,26.3,175,25.7,175,25z"/>
                    <g clip-path="url(#eyeRightClip)">
                        <circle class="eye-right-pupil" cx="158" cy="18" r="5"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="eyeLeftClip">
                        <path d="M97,25c0-11-7.8-20-17.5-20S62,14,62,25c0,0.7,0,1.3,0.1,2h34.8C97,26.3,97,25.7,97,25z" />
                    </clipPath>
                    </defs>
                    <g class="eye-left">
                    <path class="eye-left-outer" d="M96.9,27h6.1c0-0.3,0-0.7,0-1c0-14.4-11.6-26-26-26C62.6,0,51,11.6,51,26 c0,0.3,0,0.7,0,1h11.1H96.9z"/>
                    <path class="eye-left-inner" d="M97,25c0-11-7.8-20-17.5-20S62,14,62,25c0,0.7,0,1.3,0.1,2h34.8C97,26.3,97,25.7,97,25z" />
                    <g clip-path="url(#eyeLeftClip)">
                        <circle class="eye-left-pupil" cx="80" cy="17.7" r="5"/>
                    </g>
                    </g>
                </g>
                <g class="nostrils">
                    <g class="nostril-right">
                    <ellipse class="nostril-right-outer" cx="130.5" cy="27.5" rx="6.5" ry="5.5"/>
                    <circle class="nostril-right-inner" cx="130" cy="28" r="4"/>
                    </g>
                    <g class="nostril-left">
                    <ellipse class="nostril-left-outer" cx="106.5" cy="27.5" rx="6.5" ry="5.5"/>
                    <circle class="nostril-left-inner" cx="107" cy="28" r="4"/>
                    </g>
                </g>
                <path class="body" d="M218,98H24C10.8,98,0,87.2,0,74V51c0-13.2,10.8-24,24-24h194c13.2,0,24,10.8,24,24v23 C242,87.2,231.2,98,218,98z"/>
                <g class="freckles">
                    <circle class="freckle" cx="13.7" cy="41.4" r="1.6"/>
                    <circle class="freckle" cx="20.1" cy="44.7" r="1.6"/>
                    <circle class="freckle" cx="19.6" cy="37.8" r="1.6"/>
                </g>
                <defs>
                    <clipPath id="mouthClip">
                    <path d="M218,98H24C10.8,98,0,87.2,0,74V51c0-13.2,10.8-24,24-24h194c13.2,0,24,10.8,24,24v23 C242,87.2,231.2,98,218,98z"/>
                    </clipPath>
                </defs>
                <g class="mouth" clip-path="url(#mouthClip)">
                    <g class="mouth-pieces">
                    <path class="mouth-back" d="M23.6,168.2l-3-56.1c0-7.8,6.4-14.1,14.1-14.1h172.4c7.8,0,14.1,6.4,14.1,14.1l-3,56.1"/>
                    <path class="tongue" d="M174.9,168.2c-7.3-5-24.5-9.9-54.8-9.9s-48,5.1-54.8,9.9"/>
                    </g>
                </g>
                <g class="teeth">
                    <path class="tooth-left" d="M115,97.9v7.5c0,2-1.7,3.6-3.6,3.6H89.7c-2,0-3.6-1.7-3.6-3.6v-7.5H115z"/>
                    <path class="tooth-right" d="M154,97.9v7.5c0,2-1.7,3.6-3.6,3.6h-21.7c-2,0-3.6-1.7-3.6-3.6v-7.5H154z"/>
                </g>
            </svg>
        </div>
    `, 'application/xml');
   
    const $target = document.createElement("div");
    $target.className = `eyeTrackingHeaderWrapper cursor-disappear`
    $target.appendChild($target.ownerDocument.importNode(HeaderImage.documentElement, true));
    $app.appendChild($target);


    // --------------
    // Hover animaton
    // --------------
    const mouthSpeed = 0.3;
    const easeType = Power2.easeOut;
    const mouthOpen = gsap.timeline({ paused: true });
    mouthOpen.to('.mouth-back', { duration: mouthSpeed, ease: easeType, y: -70 }, 0);
    mouthOpen.to('.tongue', { duration: mouthSpeed * 1.5, ease: easeType, y: -70 }, 0);
    mouthOpen.to('.teeth', { duration: mouthSpeed, ease: easeType, y: -70, scaleY: 1.2 }, 0);
    mouthOpen.to('.body', { duration: mouthSpeed, ease: easeType, scaleY: 1.06, transformOrigin: 'center bottom' }, 0);
    mouthOpen.to('.freckles', { duration: mouthSpeed, ease: easeType, y: -10 }, 0);
    mouthOpen.to('.ears', { duration: mouthSpeed, ease: easeType, y: 6 }, 0);
    mouthOpen.to('.eye-right', { duration: mouthSpeed, ease: easeType, x: -2 }, 0);
    mouthOpen.to('.eye-left', { duration: mouthSpeed, ease: easeType, x: 2 }, 0);
    mouthOpen.to('.eyes', { duration: mouthSpeed, ease: easeType, y: 2 }, 0);
    mouthOpen.to('.nostrils', { duration: mouthSpeed, ease: easeType, y: -6 }, 0);

    // ------------
    // Mouse events
    // ------------
    $target.addEventListener('mouseenter', enterButton);
    $target.addEventListener('mouseleave', leaveButton);

    function enterButton() { mouthOpen.play(); }
    function leaveButton() { mouthOpen.reverse(); }

    // ----------
    // Ear wiggle
    // ----------
    const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
    earWiggle.set('.ear-right', { transformOrigin: "center center" });
    earWiggle.to('.ear-right', { duration: 0.1, rotation: 45 });
    earWiggle.to('.ear-right', { duration: 0.1, rotation: 0 });

    window.setInterval(earWigglePlay, 2500);

    function earWigglePlay() { earWiggle.play(0); }

    // ------------
    // Eye tracking
    // ------------
    const eyeRightPupil = document.querySelector('.eye-right-pupil');
    const eyeLeftPupil = document.querySelector('.eye-left-pupil');
    const eyeLeftInner = document.querySelector('.eye-left-inner');
    const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
    const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
    const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
    const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
    const xMovement = (innerEyeWidth - pupilWidth) / 2;
    const yMovement = (innerEyeHeight - pupilHeight) / 2;

    window.addEventListener('mousemove', updateEyePosition);

    function updateEyePosition(event) {
        const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
        const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;

        eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
        eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
    }
}