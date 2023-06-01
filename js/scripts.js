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