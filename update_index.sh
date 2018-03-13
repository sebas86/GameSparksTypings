#! /bin/bash

OUT="index.d.ts"

echo -n "" > "$OUT"

find ./GSTypings -iname "*.d.ts" | sort | while read path
do
	echo "///<reference path=\"$path\"/>" >> "$OUT"
done
