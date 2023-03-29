
rrr() { git add . ; git commit -m "code update"$1 ; git push ;}

i="40"

while [ $i -lt 60 ]
do
rrr $i;
sleep 80;
i=$[$i+1]
done