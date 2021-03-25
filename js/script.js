document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline2 = new TimelineMax();
    timeline2.to('.fmove ', 4, {
        x: -517,
        y: 754,
        autoAlpha: 0

    });
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.maybefirst',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline2)
    .setPin('.maybefirst')
    .addTo(controller);
    ////////////////////////
    let timeline1 = new TimelineMax();
    timeline1.to('.content ', 4, {
        x: 465.956,
        y: 142,
        autoAlpha: 0

    })
    .from('.contentonly ', 4, {
        x: 10,
        y: 10,


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
})