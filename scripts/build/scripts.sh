for file in app/scripts/*.js
do 
    ./node_modules/uglify-es/bin/uglifyjs $file --magle > dist/scripts/$(basename $file)
done 
