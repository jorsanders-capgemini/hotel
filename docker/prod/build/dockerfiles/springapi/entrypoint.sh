# rm -rf doesn't work well with wildcards and nested non empty directories.
# And we cant delete the volume mounted by docker. So first clean out all files
# this will give warnings in the console but cant fixed easily
find /app/compiled/* -delete || true
rm -rf /app/compiled/* || true

mvn -Dmaven.test.skip=true package

cp -r /app/target/* /app/compiled
