#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "Eats",
      "questions": [{
        "content": {
          "question": "What should we eat?",
          "answers": [
            {"answer": "Brains", "selected": 1},
            {"answer": "Monkeys"},
            {"answer": "Fish"},
            {"answer": "Nothing"}
          ]
        }
      }]
    }
  }'

echo
