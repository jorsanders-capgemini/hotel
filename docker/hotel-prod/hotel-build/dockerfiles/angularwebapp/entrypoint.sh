#!/bin/sh

# Clean up, commands may fail if directory is empty
rm -rf /app/dist/hotel/* || true

# rm -rf doesn't work for some reason on nested not empty directories
# So first clean out all files
# this will give warnings in the console but cant fixed easily
find /app/compiled/* -delete || true
rm -rf /app/compiled/* || true

npm install
ng build --configuration=production
cp -r /app/dist/hotel/* /app/compiled

# Sometimes doesn't copy without this last ls statement
ls /app/compiled