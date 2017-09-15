db.surveys.insertOne(
  {
    title: "What should we eat?",
    questions: {
      content: {
        question: "Where should we eat?",
        answers: [
          "Joe's",
          "Elli's",
          "McDonalds",
          "TGI Fridays"
        ]
      },
      content: {
        question: "What should we eat?",
        answers: [
          "Pizza",
          "Salad",
          "Burgers",
          "Nothing"
        ]
      }
    }
  }
)
