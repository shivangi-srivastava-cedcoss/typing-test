var outputString1='';
var i=0;j=0;
var hours=00;
var minutes=00;
var seconds=00;
var timeOut;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var inputString=document.getElementById('txtInput');
var span = document.getElementsByClassName("close")[0];
var arrStrings=['An event forces the main character to change their ways and often become a better individual.',
                'The meta-plot begins with the anticipation stage, in which the hero is called to the adventure to come. This is followed by a dream stage, in which the adventure begins, the hero has some success, and has an illusion of invincibility.',
                'However many characters may appear in a story, its real concern is with just one: its hero. It is the one whose fate we identify with, as we see them gradually developing towards that state of self-realization which marks the end of the story.',
                'The contrasting three, where only the third has positive value, for example, The Three Little Pigs, two of whose houses are blown down by the Big Bad Wolf.',
                'The final or dialectical form of three, where, as with Goldilocks and her bowls of porridge, the first is wrong in one way, the second in an opposite way, and the third is "just right".']
function randomNo()
{
    return Math.floor(Math.random() * 5);
}
function outputString()
{
    
    document.getElementById('hours').innerHTML=hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('minutes').innerHTML=minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('seconds').innerHTML=seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    outputString1=arrStrings[randomNo()];
    document.getElementById('txtOutput').innerHTML="";
    outputString1.split('').forEach(character=>
        {
            let charSpan=document.createElement('span');
            charSpan.innerHTML=character;
            document.getElementById('txtOutput').appendChild(charSpan);
        });
        inputString.value=null;
}
function compareStrings()
{
    if(j==0)
    {
        playTimer();
    }
    j++;
    let output1=document.getElementById('txtOutput').querySelectorAll('span');
    let inputvalue1=inputString.value.split('');
    output1.forEach((charSpan,index)=>
    {
        let character=inputvalue1[index]
        if(character==null)
        {
            charSpan.classList.remove('correct');
            charSpan.classList.remove('incorrect');
        }
        else if(character==charSpan.innerText)
        {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        }
        else
        {
            charSpan.classList.remove('correct');
            charSpan.classList.add('incorrect');
            i++;
        }
    });
    if(inputString.value===outputString1)
    {
        clearTimeout(timeOut);
        var words=WordCount(inputString.value);
        var wpm=Math.floor((words*60)/((hours*60)+(minutes*60)+(seconds)));
        document.getElementById('wpm').innerHTML=wpm;
        modal.style.display = "block";
        console.log(words);
    }  
}
function playTimer()
{
    timeOut=setTimeout(function()
    {
        if(seconds>59)
        {
            document.getElementById('minutes').innerHTML=(++minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            seconds=00;
            if(minutes>59)
            {
                document.getElementById('hours').innerHTML=(++hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
                
            }
        }
        document.getElementById('seconds').innerHTML=(++seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        playTimer();
    }, 1000);
}
function StartOver()
{
    i=0;j=0,hours=00,minutes=00,seconds=00;
    
    inputString.value="";
    outputString();
}
function WordCount(str) { 
    return str.split(" ").length;
}
  
