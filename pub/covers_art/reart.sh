pwd
for i in ./*.mp3; do
	lame --ti ./covers.png "$i"
done
