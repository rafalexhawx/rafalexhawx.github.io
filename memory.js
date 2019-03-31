function MemoryGame(images, blank) {
  this.images = images;
  this.blank = blank;
  var cards = [];
  for(image in this.images) {
    cards.push({
      'front':this.images[image],
      'back':this.blank,
      'index':parseInt(image)
    })
  }
  for(image in this.images) {
    cards.push({
      'front':this.images[image],
      'back':this.blank,
      'index':parseInt(image)+images.length
    })
  }
  this.cards = cards;
  this.cards_being_flipped = new Array();
}

fischer_yates_shuffle = function fischer_yates_shuffle(array) {
  ///Used to shuffle an array, uses the fischer yates algorithm
  for(var i = 0; i < array.length; i++) {
      var j = Math.floor(Math.random()*((array.length-i)+1));
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }
}

MemoryGame.prototype.build_card = function build_card(div, card, id) {
  div.innerHTML += "<div onclick=\"game.flipcard(" + id + ");\" id=\"" + id + "\"><img src=" + card['back'] + "></div>";
}


MemoryGame.prototype.build = function build(div) {
  fischer_yates_shuffle(this.cards);
  console.log(this.cards);
  for(i in this.cards) {
    this.build_card(div, this.cards[i], this.cards[i]['index']);
  }
}








MemoryGame.prototype.flipcard = function flipcard(id_number) {
  this.cards_being_flipped.push(id_number);
  this.set_card_front(id_number);
  if(this.cards_being_flipped.length == 2) {
    var [card_1, card_2] = this.cards_being_flipped;
    if(!this.compare(this.cards_being_flipped)) {
      setTimeout(function reflipcards() {game.set_card_back(card_1);game.set_card_back(card_2);}, 500);
  } else {
    setTimeout(function removeboth() {game.delete_card(card_1);game.delete_card(card_2);}, 500);
  }
  this.cards_being_flipped = new Array();
  }
  
  }

MemoryGame.prototype.delete_card = function delete_card(card_id) {
  div_of_card = document.getElementById(card_id);
  div_of_card.outerHTML="";
}

MemoryGame.prototype.set_card_front = function set_card_front(card_id) {
  div_of_card = document.getElementById(card_id);
  div_of_card.innerHTML = "<img src=\"" + this.cards[card_id]['front'] + "\">";
}

MemoryGame.prototype.set_card_back = function set_card_back(card_id) {
  div_of_card = document.getElementById(card_id);
  div_of_card.innerHTML = "<img src=\"" + this.cards[card_id]['back'] + "\">";
}

MemoryGame.prototype.cards_are_same = function cards_are_same(id1, id2) {
  return((this.cards[id1]['front'] == this.cards[id2]['front']) && id1 != id2);
}

MemoryGame.prototype.compare = function compare(card_pair) {
  console.log("Comparing cards in array: " + this.cards_being_flipped);
  var [card_1, card_2] = card_pair;
  var [card_int_1, card_int_2] = [parseInt(card_1), parseInt(card_2)];
  if(this.cards_are_same(card_int_1, card_int_2)) {
    console.log("Removed cards number " + card_int_1 + " and " + card_int_2);
    return(true);
  } else {
    console.log("Cards are different so not deleted");
    return(false);
  }
  
}


