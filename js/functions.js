/*SLICK SLIDER */
$('.container-slider').slick({
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
    ]
});

/* */

/*ACCORDEON */
    let accordeonButton = document.querySelectorAll('.accordeon-title')
    let accordeonContent = document.querySelectorAll('.accordeon-single > p')
    let accordeonArrow = document.querySelectorAll('.accordeon-title i')
    accordeonButton.forEach((value, index)=>{
        accordeonButton[index].addEventListener('click', ()=>{
            let accContent = accordeonContent[index]
            let accArrow = accordeonArrow[index]
            if(accContent.style.display === "block"){
                accContent.style.display = "none"
                accArrow.classList.remove('fa-chevron-up')
                accArrow.classList.add('fa-chevron-down')
            }else if(accContent.style !== "block"){
                accContent.style.display = "block"
                accArrow.classList.remove('fa-chevron-down')
                accArrow.classList.add('fa-chevron-up')
            }

        })
    })
/* */