#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "Eats",
      "questions": [{
        "content": {
          "question": "What should we eat?",
          "answers": [
            {"answer": "Brains"},
            {"answer": "Monkeys"},
            {"answer": "Fish"},
            {"answer": "Nothing"}
          ]
        }
      }],
      "timesTaken": 0
    }
  }'


echo
