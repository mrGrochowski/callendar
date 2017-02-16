//rok przestepny rok%4==0 && rok%100!=0) || rok%400==0
// dealing with it https://jsfiddle.net/2uvthagz/34/

var months={
styczeń:31,
luty:28,
//luty:przestępny?29:28,
marzec:31,
kwiecień:30,
maj:31,
czerwiec:30,
lipiec:31,
sierpień:31,
wrzesień:30,
październik:31,
listopad:30,
grudzień:31,
}
var week=['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota']

for (var i in months){
document.body.innerText+= i+" "+months[i]+"\n";
	for (var j=1; j<months[i]; j++)	{document.body.innerText+="["+j+"]\u0020"}   
	document.body.innerText+="\n";
}
console.log("yolo");
/*function dzien_tygodnia(year,month,day:word):string;
var m,c,d,n:integer;
begin
	m := 1 + (month + 9) mod 12 ; if m>10 then dec(year) ;
	c := year div 100 ; d := year mod 100 ;
	n := ((13*m-1) div 5 + d + d div 4 + c div 4 + 5*c + day) mod 7 ;
	dzien_tygodnia:=week[n];
end;*/
