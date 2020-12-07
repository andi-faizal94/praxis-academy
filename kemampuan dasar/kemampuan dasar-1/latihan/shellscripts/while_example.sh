#!/bin/bash 
valid=true
count=1
while [ $valid ]
do 
echo $count
if [ $count -eq 5 ];
then
break
fi
((count++))
done
#save dan klik kanan open in terminal
# 192:latihan mac$ bash while_example.sh 
#1
#2
#3
#4
#5
#192:latihan mac$ 


