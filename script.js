/*
#post input

.front__your-posts

.posted

.like__poll

.time__stamp
*/
alert("README : I am a student who has just completed with 1st year and is new to web devlopment, even though i have put lot efforts to make this web objective partially complete(partially due to lack of time[only one day]). i request u to let me in the club and i will do my best");

document.getElementById('post-toggle').onclick = function () {
    let t = new Date();
    h = t.getHours();
    m = t.getMinutes();
 
    var inputStr = document.getElementById('post-input').value;
    let time = `${h} : ${m}`
    console.log(time);
}