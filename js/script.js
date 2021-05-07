document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline2 = new TimelineMax();
    timeline2
        .to(".leftcontent", 5, {
            autoAlpha: 0,
        })
        .to(".fmove", 5, {
            scale: 3,
            autoAlpha: 0,
        })
        .from(".rightmain", 5, {
            autoAlpha: 0,
            scale: 3,
        })
        .from(".bmove", 5, {
            autoAlpha: 0,
            scale: 3,
        })
      



    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.contentsection',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline2)
        .setPin('.contentsection')
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
    //     let timeline3 = new TimelineMax();
    //     timeline3.from('.thirdsanim', 1, {
    //         // x:-346.788,
    //         // y:-369.7276,
    //         // scale:3,
    //         // autoAlpha: 0

    //     });
    //     let scene3 = new ScrollMagic.Scene({
    //         triggerElement: '.thirdsanim',
    //         duration: '50%',
    //         triggerHook: 1,
    //         offset: '-200'
    //     })
    //         .setTween(timeline3)
    //         .setPin('.thirdsanim')
    //         .addTo(controller);
});