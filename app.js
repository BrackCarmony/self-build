var messageArray  = [
  {file:"console",message:"This is a test of the emergency website broadcast system"},
  {file:"style",message:"* {transition:.11s}"},
  {file:"style",message:"body, html{padding:0;margin:0}"},
  {file:"style",message:"#console {background-color:rgba(25,25,25,.6);"},
  {file:"style",message:"color:white;"},
  {file:"style",message:"font-size:8px;"},
  {file:"style",message:"font-family:Monaco, monospaced;"},
  {file:"style",message:"position:absolute;"},
  {file:"style",message:"top:0;"},
  {file:"style",message:"right:0;"},
  {file:"style",message:"overflow:scroll;"},
  {file:"style",message:"height:95%;"},
  {file:"style",message:"width:50%;"},
  {file:"style",message:"perspective:500px;"},
  {file:"style",message:"transform:rotate3d(0, 38, 0, 30deg)}"},
  {file:"console",message:"There, Now we have some room to work."},

  {file:"index",message:"<h1>Brack Carmony</h1>"},
  {file:"index",message:"<h2>Web Developer</h2>"},
  {file:"index",message:"<p>I'm a math nerd turned programmer.  I'm really not all that fond of talking about myself.  But I saw <a href='http://strml.net/'>this webpage</a> and thought it looked pretty fun to try and emulate.  Sure I probably shouldn't link to a site that does this same sort of thing better than me...  There's a reason I don't work in marketing. </p>"},
  {file:"style",message:"*{box-sizing:borderbox}"},
  {file:"style",message:"p{padding-left:30px;"},
  {file:"style",message:" font-size:10px;"},
  {file:"style",message:" text-align:justify-content;"},
  {file:"style",message:" text-indent:15px;"},
  {file:"style",message:" width:45%;}"},

  {file:"style",message:"#index{overflow:auto;"},
  // {file:"style",message:"background-color:#A9FFD4;"},
  {file:"style",message:"color:#101915;"},
  {file:"style",message:'font-family: "Palatino", Times, serif;}'},

  {file:"style",message:'h1{margin:0px;'},
  {file:"style",message:'padding:10px;'},
  {file:"style",message:'background-color:darkslategrey;'},
  {file:"style",message:'color:mintcream}'},
  {file:"style",message:'h2{padding:5px;'},
  {file:"style",message:'margin:0px;'},
  {file:"style",message:'padding-left:30px;}'},
  {file:"style",message:'h1,h2{font-family:"Impact","Arial Black",sans-serif;}'},
  {file:"console",message:"Okay, so maybe colors aren't my strong suit..."},
  {file:"console",message:"I know, let's go with some high rez images..."},
  {file:"console",message:"Those are in right?"},

  {file:"index",message:"<div click='globalJavaFunction' class='background-image leaf'><div class = 'picture-button'>Leafy Green</div></div>"},
  {file:"index",message:"<div class='background-image marble'><div class = 'picture-button'>Marble Grey</div></div>"},
  {file:"index",message:"<div class='background-image twilight'><div class = 'picture-button'>Twilight Ghost</div></div>"},
  {file:"style",message:'.leaf{background-image:url(leaf.jpg);}'},
  {file:"style",message:'.marble{background-image:url(marble.jpg);}'},
  {file:"style",message:'.twilight{background-image:url(twilight.jpg);}'},
  {file:"style",message:'#index{height:100vh;'},
  {file:"style",message:'overflow:scroll;}'},
  {file:"style",message:'.background-image{'},
  {file:"style",message:'background-size:cover;'},
  {file:"style",message:'background-position:center;'},
  {file:"style",message:'position:relative;'},
  {file:"style",message:'height:45%;}'},

  {file:"style",message:'.picture-button{color:white;'},
  {file:"style",message:'display:inline-block;'},
  {file:"style",message:'position:absolute;'},
  {file:"style",message:'border:1px solid white;'},
  {file:"style",message:'border-radius:4px;'},
  {file:"style",message:'padding:15px;'},

  {file:"style",message:'margin:0;'},
  {file:"style",message:'top:50%;'},
  {file:"style",message:'left:50%;'},
  {file:"style",message:'margin-right:-50%;'},
  {file:"style",message:'transform:translate(-50%, -50%);}'},

  {file:"style",message:'.background-image{'},
  {file:"style",message:'display:inline-block;'},
  {file:"style",message:'width:calc(100% / 3)}'},

  {file:"console",message:"I suppose I should include those social links..."},

  {file:"index",message:"<div class = 'icons'> "},
  {file:"index",message:'<a href = "https://github.com/kedirech/"><i class="fa fa-github-square" aria-hidden="true"></i></a>'},
  {file:"index",message:'<a href = "https://www.facebook.com/brackcarmony"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>'},
  {file:"index",message:'<a href = "https://twitter.com/BrackCarmony"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>'},
  {file:"index",message:"</div> "},

  {file:"style",message:'.icons{'},
  {file:"style",message:'font-size:10vw;'},
  {file:"style",message:'display:flex;'},
  {file:"style",message:'width:50%;'},
  {file:"style",message:'justify-content:space-around;'},
  {file:"style",message:'}'},

  {file:"console",message:"Feel free to poke around the source code"},

]

var spd = .00010;
var lineIndex=0;
var letterIndex=0;
var target;
var cons = document.getElementById("console");
var fileType = messageArray[0].file;
var files = {
  index:"",
  console:"console -- ",
  style:"",
  javascript:""
}

function nextLetter() {

  files.console += messageArray[lineIndex].message[letterIndex]=="<"?"&lt;":messageArray[lineIndex].message[letterIndex];
  cons.innerHTML = files.console;
  console.log(cons)
  cons.scrollTop = 100000;
  if (target){
    console.log(fileType);
    console.log(target);
    files[fileType] += messageArray[lineIndex].message[letterIndex];
    console.log(files);
    target.innerHTML = files[fileType];
  }
  letterIndex++;

  if (letterIndex == messageArray[lineIndex].message.length){
    letterIndex = 0;
    lineIndex++;
    if (lineIndex == messageArray.length) return;

    fileType = messageArray[lineIndex].file;
    files.console += "<br/>" + messageArray[lineIndex].file + " -- "
    target = (messageArray[lineIndex].file ==="console"? null: document.getElementById(messageArray[lineIndex].file));
    setTimeout(nextLetter,spd*100)
  }else{
    setTimeout(nextLetter,spd)
  }
}

nextLetter();
