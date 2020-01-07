# Clean up, commands may fail if directory is empty
rm -rf /app/dist/hotel/* || true

# rm -rf doesn't work well with wildcards and nested non empty directories.
# And we cant delete the volume mounted by docker. So first clean out all files
# this will give warnings in the console but cant fixed easily
find /app/compiled/* -delete || true
cd /app/compiled rm -rf /app/compiled/* || true

npm install
ng build --prod
cp -r /app/dist/hotel/* /app/compiled
