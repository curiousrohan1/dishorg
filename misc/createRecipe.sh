#!/bin/bash

dir=$(dirname "$0")
curl -d"@$dir/createRecipe.json" -H "Content-type: application/json" http://localhost:8080/recipes
echo
