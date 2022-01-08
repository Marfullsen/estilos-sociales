#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Create 404 same as index for proper vue-routing redirecting.
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Marfullsen/estilos-sociales.git master:gh-pages

cd -