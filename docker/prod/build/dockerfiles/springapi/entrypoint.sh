# rm -rf doesn't work for some reason on nested not empty directories
# So first clean out all files
# this will give warnings in the console but cant fixed easily
find /app/compiled/* -delete || true
cd /app/compiled && rm -rf * || true

mvn -Dmaven.test.skip=true package

cp -r /app/target/* /app/compiled