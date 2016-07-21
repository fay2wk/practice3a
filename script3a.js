/* globals $ */
$(document).ready(function () {
  $('#newdeck').on('submit', function (event) {
    // new game
    event.preventDefault()
    $('#results').empty()
    $('#results2').empty()
    $('#notice').empty()
    currentDeck = 0
    score = 0
    $.ajax({
      url: 'http://deckofcardsapi.com/api/deck/new/draw/?count=2',
      success: function (deck) {
        console.log(deck.cards[0].value)
        console.log(deck.cards[1].value)
        $('#results').append('<img src="' + deck.cards[0].images.png + '" height="250" width="190"">')
        $('#results').append('<img src="' + deck.cards[1].images.png + '" height="250" width="190"">' + '<br>')
        score1 = 0
        score2 = 0
        if (deck.cards[0].value == 'KING') {
            score1 += 10
        }
        if (deck.cards[0].value == 'QUEEN') {
            score1 += 10
        }
        if (deck.cards[0].value == 'JACK') {
           score1 += 10
        }
        else if (deck.cards[0].value === 'ACE') {
            score1 += 1
        } else score1 += parseInt(deck.cards[0].value)

        if (deck.cards[1].value == 'KING') {
            score2 += 10
          }
          if (deck.cards[1].value == 'QUEEN') {
            score2 += 10
          }
          if (deck.cards[1].value == 'JACK') {
            score2 += 10
          }
          else if (deck.cards[1].value === 'ACE') {
            score2 += 1
          } else score2 += parseInt(deck.cards[1].value)
          score = score1 + score2
          console.log(score)
      }
  })

  $('#cards').on('submit', function (event) {
    event.preventDefault()
    current = $('#results2').val()
    $.ajax({
      url: 'http://deckofcardsapi.com/api/deck/new/draw/?count=1',
      success: function (deck) {
        $('#results2').append(current + '<img src="' + deck.cards[0].images.png + '" height="250" width="190"">')
        if (deck.cards[0].value == 'KING') {
          score += 10
        }
        if (deck.cards[0].value == 'QUEEN') {
          score += 10
        }
        if (deck.cards[0].value == 'JACK') {
          score += 10
        } else if (deck.cards[0].value === 'ACE') {
          score += 1
        } else score += parseInt(deck.cards[0].value)
          if (score > 21) {
            $('#notice').append('Over 21! Game Over!')
            console.log('Over 21!')
          }
      }
    })
  })
  })
})
