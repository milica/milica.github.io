#!/bin/bash

echo "----------------------------"
echo "      grunt build"
echo "----------------------------"

grunt --gruntfile=../cliche/Gruntfile.js 

echo "----------------------------"
echo " adding new files to the git"
echo "----------------------------"

git add --all

echo "----------------------------"
echo "      commit changes"
echo "----------------------------"

git commit -am "Deploy commit"

echo "----------------------------"
echo "      pushing changes"
echo "----------------------------"

git push origin master

echo "done."