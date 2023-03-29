
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="400"

while [ $i -lt 420 ]
do
rrr $i;
sleep 80;
i=$[$i+1]
done