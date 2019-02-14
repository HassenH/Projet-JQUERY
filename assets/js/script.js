$(function(){
  $('.secondNavbar').hide();

  $('#phoneHover').hover(function(){
    $('.secondNavbar').show();
  
  });
  // Animation des produits dans le content
  $('.productShop').hide();
  $('.product').mouseenter(function(){
    $(this).children('.card').animate({
      top: '-20px'}, 400);
    $(this).children('.card').children('.productShop').slideDown('slow');
  }).mouseleave(function(){
    $(this).children('.card').children('.productShop').slideUp();
    $(this).children('.card').css({
      'top': '',
      'border': ''});
  });
  // Fin de l'animation des produits dans le content

  //Bouton panier recupération data
  $('.add-to-cart').click(function(){
    var price = $(this).attr('data-price');
    console.log(price);
    price = Number(price);
    var name = $(this).attr('data-name');
    var ref = $(this).attr('data-id');
    var qt = $(this).attr('data-quantity');
    qt = Number(qt);
    var img = $(this).parents('.card').children('img').attr('src');
   
  })
});

