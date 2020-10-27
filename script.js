new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },
      {
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      }
    ],
    newCard: {
        question:"",
        answer:"",
        category:"",
        flipped:false
    }
  },
  methods: {
    flipIt: function(card) {
      card.flipped = !card.flipped;
    },
    addCard: function(submitEvent) {
      this.cards.push(this.newCard);
      this.newCard = {
        question:"",
        answer:"",
        category:"",
        flipped:false
      };
    }
  }
})