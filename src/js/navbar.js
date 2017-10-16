$(() => {
  
  console.log('navbar');
  const $navItem = $('a.nav-item');
  const $menusWrapper = $('.menus-wrapper');
  const $menuMobile = $('.menu-btn');
  
  $navItem.on(CLICK, function(e) {
    const $this = $(this);
    if (!$this.attr('target')) {
      e.preventDefault();
      const $href = $($this.attr('href'));
      $('html').animate({scrollTop: $href.offset().top - 80}, 600);
      
      $menusWrapper.removeClass('expanded');
      
    }
  });
  

  $menuMobile.on(CLICK, function() {
    $menusWrapper.toggleClass('expanded');
  })
  
});
