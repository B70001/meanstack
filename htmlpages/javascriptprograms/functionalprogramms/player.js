var players=[
{name:"sunil gavaskar",debut:1974,retired:1987,runs:10122},
{name:"tom",debut:1964,retired:1997,runs:10152},
{name:"jerry",debut:1954,retired:1977,runs:11122},
{name:"raju",debut:1975,retired:1988,runs:10162},
{name:"radha",debut:1970,retired:1984,runs:10129},
{name:"mallu",debut:1969,retired:1990,runs:10142},
{name:"chikku",debut:1988,retired:1991,runs:10145},
{name:"chakk",debut:1971,retired:1978,runs:10156}
]
// print all player name uppercase
 var data=players.map(items=>console.log(items.name.toUpperCase()))

 //print all player name  who have exp more than 8 years
 players.filter(items=>(items.retired-items.debut)>8).forEach(items=>console.log(items.name))
 
 
 //find the player who scored highest runs in his account
 var data=players.map(items=>items.runs).reduce((no1,no2)=>(no1>no2?no1:no2))
 players.filter(playr=>playr.runs==data).forEach(plyr=>console.log(plyr.name))
 
 
 

     
 
 
 

