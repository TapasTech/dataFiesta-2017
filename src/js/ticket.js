$(function () {
  
  console.log('ticket');
  
  const numTickets = 2;
  let prevTicketIndex = 2;
  
  const $ticketsWrapper = $('#tickets .tickets-wrapper');
  const $ticketUnits = $ticketsWrapper.find('.ticket-unit');
  const $arrows = $('#tickets .arrow');
  $arrows.on(CLICK, function (e) {
    const dataMove = parseInt($(this).find('.arrow-unit').attr('data-move'));
    const nextTicketIndex = prevTicketIndex + dataMove;
    if (nextTicketIndex <= numTickets && nextTicketIndex >= 1) {
       // within valid range of tickets
      $ticketsWrapper.removeClass('selected-' + prevTicketIndex);
      $ticketsWrapper.addClass('selected-' + nextTicketIndex);
      $ticketUnits.removeClass('selected');
      $($ticketUnits[nextTicketIndex - 1]).addClass('selected');
      prevTicketIndex = nextTicketIndex;
    }
  });
  
  $ticketUnits.on(CLICK, function(e) {
    const url = $(this).find('a').attr('href');
    window.open(url);
  });
  
  $ticketUnits.find('a').on(CLICK, function(e) {
    e.preventDefault();
  })
  
});
