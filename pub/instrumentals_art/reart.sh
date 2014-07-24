pwd
for i in ./*.mp3; do
	lame --ti ./instrumentals.png "$i"
done
