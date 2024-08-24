#!/bin/bash

echo "pwd..."
pwd

echo "Building Frontend..."
cd ret-web
npm start

cd ..
echo "Building Backend..."
cd ret-backend
mvn clean package