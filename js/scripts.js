$(() => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    })



<<<<<<< Updated upstream


      const sertificatSliders = [],
      sertificat = document.querySelectorAll('.sertificat .swiper-container')
  
      sertificat.forEach(function (el, i) {
      el.classList.add('sertificat_s' + i)
  
      let options = {
=======
    const swiper2 = new Swiper('.sertificat .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
>>>>>>> Stashed changes
        loop: false,
        speed: 500,
        watchSlidesProgress: true,
        slideActiveClass: 'active',
        slideVisibleClass: 'visible',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
            nextEl: '.sertificat .swiper-button-next',
            prevEl: '.sertificat .swiper-button-prev',
        },
<<<<<<< Updated upstream
        preloadImages: false,
        lazy: {
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
          loadPrevNext: true
=======
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
>>>>>>> Stashed changes
        },
        breakpoints: {
          0: {
            spaceBetween: 0,
            slidesPerView: 1
          },
          480: {
            spaceBetween: 20,
            slidesPerView: 2
          },
<<<<<<< Updated upstream
          768: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 4
          }
        },
        on: {
          init: swiper => {
            setTimeout(() => setHeight($(swiper.$el).find('.swiper-slide')))
          },
          resize: swiper => {
            setTimeout(() => {
              $(swiper.$el).find('.swiper-slide').height('auto')
              setHeight($(swiper.$el).find('.swiper-slide'))
            })
=======
          767: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1023: {
            slidesPerView: 4,
            spaceBetween: 20
>>>>>>> Stashed changes
          }
        }
      }
  
      sertificatSliders.push(new Swiper('.sertificat_s' + i, options))
    })



    
    $('body').on('click', '.modal_link', function(e) {
        e.preventDefault()
        Fancybox.close(true)
        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline',
        }]);
    })

    $(".products_link").click(function(e) {
        e.preventDefault();
        //$(".object_items .object_item").removeClass("hide");
        
        $('.products_items .products_item.hide').each(function(i,elem) {
            if(i==8)
            {                
                return false;
            }
            $(elem).removeClass("hide");
        }); 

        if($(".products_items .products_item.hide").length==0)
        {
            $(".products_link").hide();
        }       
    });   


    $(".filter_category-items .filter_category-item input").on( "change", function(e) {
        let array = [];
        $(".filter_category-items .filter_category-item input:checked").each(function() {
            array.push($(this).val());
        });

        $(".products_items .products_item.hide").removeClass("hide");

        if(array.length>0)
        {
            $(".products_items .products_item").each(function() {
                if(!array.includes($(this).data("cat").toString()))
                {
                    $(this).addClass("hide");
                }
            });
        }
        $(".products_link").hide();
    });


    $(".filter_alphabet-items .filter_alphabet-item input").on( "change", function(e) {
        let array = [];
        $(".filter_alphabet-items .filter_alphabet-item input:checked").each(function() {
            array.push($(this).val());
        });

        $(".products_items .products_item.hide").removeClass("hide");

        if(array.length>0)
        {
            $(".products_items .products_item").each(function() {
                let fl = $(this).find(".products_item-title").text();            
                if(!array.includes(fl[0]))
                {
                    $(this).addClass("hide");
                }
            });
        }
        $(".products_link").hide();
    });
    
    var wpcf7Elm = document.querySelector( '.wpcf7' );

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        Fancybox.close()
        Fancybox.show([{
            src: '#success_modal',
            type: 'inline'
        }])     
    }, false );
})