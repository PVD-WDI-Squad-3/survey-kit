#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "survey": {
      "title": "Quest",
      "questions": [{
        "content": {
          "question": "What is your quest?",
          "answers": [
            {"answer": "I seek the Holy Grail", "selected": 1},
            {"answer": "To dream the impossible dream"},
            {"answer": "To beat the unbeatable foe"},
            {"answer": "To save Shapeir"}
          ]
        }
      }]
    }
  }'

echo
