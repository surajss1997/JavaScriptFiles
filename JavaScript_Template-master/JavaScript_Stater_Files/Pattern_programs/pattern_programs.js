



result ='';
let count =95;
for(let i=1;i<=count;i++)
{
    for(let j=i;j<=count;j++)
    {
        result ='';
    }
    for(let k=1;k<=i;k++)
    {
        result += `*`;
    }
    result += `\n`;
}
console.log(result);



