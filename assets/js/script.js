$(function(){
  $('#secondNavbar').hide();

  function deleteLine(){
    $(this).parents('.row').remove();
  }

  $('#phoneHover').hover(function(){
    $('#secondNavbar').slideDown('slow');
});
$('.testeee').mouseleave(function(){
  $('#secondNavbar').slideUp('slow');
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
    var priceQuantity = price;
    var name = $(this).attr('data-name');
    var ref = $(this).attr('data-id');
    var qt = $(this).attr('data-quantity');
    qt = Number(qt);
    console.log(qt);
    var img = $(this).parents('.card').children('img').attr('src');
    
    
    var display = '<div class="row lineCreate">'
   +'<div class="col-2">'
   +'<p>' + name +'</p>'
   +'</div>'
   +'<div class="col-2">'
   +'<img class="imgCart" src="'+ img + '" />'
   +'</div>'
   +'<div class="col-3">'
   +'<p>' + ref + '</p>'
   +'</div>'
   +'<div class="col-2">'
   +'<p>' + qt + '</p>'
   +'</div>'
   +'<div class="col-1">'
   +'<p>'+ priceQuantity +'</p>'
   +'</div>'
   +'<div class="col-2">'
   +'<img src="assets/img/deletebutton.png" class="basketButtonDelete" alt="boutonsupprime"/>'
   +'</div>'
   +'</div>'
   +'<script>$(".basketButtonDelete").on("click", function(){ $(this).parents(".row").remove() })</script>';
    $('div.lineProduct').append(display);
    
  });
});

