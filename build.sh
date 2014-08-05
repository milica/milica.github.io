#!/bin/bash

echo "**************************"
echo "Installing dependencies..."
echo "**************************"

npm install

echo "**************************"
echo "Running grunt."
echo "**************************"

if ! grunt production; then
    echo "RequireJS build is broken!"
    rm -rf "${BUILD_DIR}"
    exit 1
fi

echo "DONE!"