
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="400"

while [ $i -lt 460 ]
do
rrr $i;
sleep 30;
i=$[$i+1]
done