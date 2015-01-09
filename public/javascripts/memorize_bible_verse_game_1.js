

$( init );

function init() {


  // Hide the success message
  $('#successMessage').delay(5000).fadeOut(400);
  $('#successMessage').css('color', 'green');

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );


  for ( var i=0; i<words.length; i++ ) {
    $('<div class="col-sm-4">' + words[i] + '</div>').data( 'word', words[i] ).attr( 'id', 'word'+i ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  for ( var i=0; i<words_copy.length; i++ ) {
    $('<div class="col-sm-4">&nbsp;</div>').data( 'word', words_copy[i] ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'word' );
  var cardNumber = ui.draggable.data( 'word' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == words.length ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',  top: '200px', opacity: 1
    } );
  }

}