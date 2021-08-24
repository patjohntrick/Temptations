$(document).ready(function(){
    $('.navbar-toggler').on('click', function(){
        $('.navbar-toggler').toggleClass('show');
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.btn-up').addClass('show-btn');
        }
        else{
            $('.btn-up').removeClass('show-btn');
        }
    });

    // $('.faq-scroll').on('click', () =>{
    //     $('html, body').animate({scrollTop: 575}, 500);
    // });

    $('#scroll-faq').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 1500}, 500);
    });

    $('.btn-up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, '1000');
    });

    var qoute = [
        ['Smell is a word, perfume is literature.', 'Jean Claude Ellena'],
        ['I never face the day without perfume.', 'Elizabeth Taylor'],
        ['The ultimate code of seduction for men.', 'Armani Code for Men'],
        ['Perfume is an intimate object, it is the reflector of the heart.', 'Emmanuel Ungaco'],
        ['Perfume is the art that makes memory speak.', 'Francis Kurkdjian'],
        ["A woman who doesn't wear perfume has no future.", 'Coco Chanel'],
        ['Love is smell', 'Unknown'],
        ['Charisma is the fragance of the soul', 'Toba Beta'],
        ['You are never fully dressed without perfume.', 'C. Joybell'],
        ['Perfume is something which is invisible and yet an unforgettable accessory.', 'Unknown'],
        ['Fragrance makes us dream.', 'Francois Nars'],
        ['Perfumes heralds a womans arrival and prolongs her departure.', 'Coco Chanel'],
        ['A good fragrance should have a certain personality that makes people identify the scent with you.', 'Shakira'],
        ['Just like men, perfume is never perfect rigth away, you have to let it seduce you.', 'Jean Patou']
    ];

    var random_qoute = Math.floor(Math.random() * qoute.length);
    $('.qoute').append('<h2 class="qt" data-aos="fade-right" data-aos-offset="-100" data-aos-duration="1000">'+ qoute[random_qoute][0]+'</h2>')
    $('.qoute').append('<p class="ath" data-aos="fade-up" data-aos-offset="-100" data-aos-duration="1000">'+ '- '+qoute[random_qoute][1]+'</p>')
    // .html('<h2>'+ qoute[random_qoute][0] +'</h2>');

    // shop-product
    // $('#sizes').on('input', function(){
    //     if($(this).val() == 'small'){
    //         total = item;
    //     }
    //     else if($(this).val() == 'medium'){
    //         total = item + 50;
   
    //     }
    //     else if($(this).val() == 'large'){
    //         total = item + 50;

    //     }
    //     console.log(total);
    // });
    var item = $('.product-total').text(), total;
    $('.qty-number').on('input', function(){
        total = item * this.value;
        $('.product-total').html(total + '.00');
    });
    // $('.qty-number, #sizes').on('input', function(){
    //     var quantity = $('.qty-number').val();
    //     if($('#sizes').val() == 'small'){
    //         total = quantity.value * item;
    //         $('.product-total').html(total + '.00');
    //     }
    //     else if($('#sizes').val() == 'medium'){
    //         total = quantity * item  + 50;
    //         $('.product-total').html(total + '.00');
    //     }
    //     else if($('#sizes').val() == 'large'){
    //         total = quantity.value * item  + 100;
    //         $('.product-total').html(total + '.00');
    //     }
    //     console.log(quantity);
    // });
    $('.product-info').on('click', '.product-text-one', function(){
        $('.arrow-one').toggleClass('info-rotate');
    });
    $('.product-info').on('click', '.product-text-one', function(){
        $('.info-description-one').toggleClass('info-rotate');
    });

    $('.product-info').on('click', '.product-text-two', function(){
        $('.arrow-two').toggleClass('info-rotate');
    });
    $('.product-info').on('click', '.product-text-two', function(){
        $('.info-description-two').toggleClass('info-rotate');
    });

    
    // shop-product
});