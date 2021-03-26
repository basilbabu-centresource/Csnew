document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline2 = new TimelineMax();
    timeline2.to('.fmove ', 10, {
        x: -217,
        y: 454,
        scale: 3,
        autoAlpha: 0

    })
        .to('.contentonly ', 4, {
            x: 400,
            scale: 1.2,

        })
        ;
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.maybefirst',
        duration: '50%',
        triggerHook: 0,
        offset: '-200'
    })
        .setTween(timeline2)
        .setPin('.maybefirst')
        .addTo(controller);
    ////////////////////////
    let timeline1 = new TimelineMax();
    timeline1.to('svg', 4, {
        scale: 60,

    });
    let scene1 = new ScrollMagic.Scene({
        triggerElement: '.homegif',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline1)
        .setPin('.homegif')
        .addTo(controller);
    ////////////////////////
    let timeline3 = new TimelineMax();
    timeline3.from('.sahpinside', 1, {
        x: 100,
        y: 100

    });
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.thirdsanim',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
        .setTween(timeline3)
        .setPin('.thirdsanim')
        .addTo(controller);
});