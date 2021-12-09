console.log("hello babs");

// //toggle images
// function viewSources() {
//   var imgCaptions = document.getElementById("content");
//   if (imgCaptions.style.display === "none") {
//     imgCaptions.style.display = "block";
//   } else {
//     imgCaptions.style.display = "none";
//   }
// }

// //toggle readings
// function viewSources2() {
//   var articles = document.getElementById("content2");
//   if (articles.style.display === "none") {
//     articles.style.display = "block";
//   } else {
//     articles.style.display = "none";
//   }
// }

//show article popups
let btn01 = document.getElementById("btn01");
let popUp = document.querySelector(".popUp");
let close01 = document.getElementById("close01");

//terms
let terms = document.getElementById("terms");

btn01.addEventListener("click", function() {
	if (terms. style.display === "none") {
		terms.style.display = "block";
		terms.classList.add("popUp")
		btn01.style.color = "#7d4bc1";
		btn01.style.textDecoration = "underline";

		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";


		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";

	} else {
		terms.style.display = "none";
		btn01.style.color = "black";
		btn01.style.textDecoration = "none";
	}
});

//close popup
close01.addEventListener("click", function() {
	terms.style.display = "none";
	btn01.style.color = "black";
	btn01.style.textDecoration = "none";
})

//it's not in your head (hAndS)
let btn02 = document.getElementById("btn02");
let hAndS = document.getElementById("hAndS");
let close02 = document.getElementById("close02");

btn02.addEventListener("click", function() {
	if (hAndS.style.display === "none") {
		hAndS.style.display = "block";
		hAndS.classList.add("popUp");
		btn02.style.color = "#7d4bc1";
		btn02.style.textDecoration = "underline";

		terms.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";

	} else {
		hAndS.style.display = "none";
		btn02.style.color = "black";
		btn02.style.textDecoration = "none";
	}
})

close02.addEventListener("click", function() {
	hAndS.style.display = "none";
	btn02.style.color = "black";
	btn02.style.textDecoration = "none";
})

//what is gender fluid clothing (whatIs)
let btn03 = document.getElementById("btn03");
let whatIs = document.getElementById("whatIs");
let close03 = document.getElementById("close03");

btn03.addEventListener("click", function() {
	if (whatIs.style.display === "none") {
		whatIs.style.display = "block";
		whatIs.classList.add("popUp");
		btn03.style.color = "#7d4bc1";
		btn03.style.textDecoration = "underline";

		terms.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		whatIs.style.display = "none";
		btn03.style.color = "black";
		btn03.style.textDecoration = "none";
	}
})

close03.addEventListener("click", function() {
	whatIs.style.display = "none";
	btn03.style.color = "black";
	btn03.style.textDecoration = "none";
})

//gender fluidity finally enters the mainstream (mainstream)
let btn04 = document.getElementById("btn04");
let mainstream = document.getElementById("mainstream");
let close04 = document.getElementById("close04");

let mainstreamImgs = document.querySelector(".mainstreamImgs");
let showMainstreamImgs = document.querySelector(".showMainstreamImgs");

btn04.addEventListener("click", function() {
	if (mainstream.style.display === "none") {
		mainstream.style.display = "block";
		mainstream.classList.add("popUp");
		showMainstreamImgs.style.display = "block";
		btn04.style.color = "#7d4bc1";
		btn04.style.textDecoration = "underline";

		terms.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		mainstream.style.display = "none";
		showMainstreamImgs.style.display = "none";
		btn04.style.color = "black";
		btn04.style.textDecoration = "none";
	}
})

close04.addEventListener("click", function() {
	mainstream.style.display = "none";
	showMainstreamImgs.style.display = "none";
	btn04.style.color = "black";
	btn04.style.textDecoration = "none";
})

//how gender fluidity influences the fashion industry (influences)
let btn05 = document.getElementById("btn05");
let influences = document.getElementById("influences");
let close05 = document.getElementById("close05");

btn05.addEventListener("click", function() {
	if (influences.style.display === "none") {
		influences.style.display = "block";
		influences.classList.add("popUp");
		btn05.style.color = "#7d4bc1";
		btn05.style.textDecoration = "underline";

		terms.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		influences.style.display = "none;"
		btn05.style.color = "black";
		btn05.style.textDecoration = "none";
	}
})

close05.addEventListener("click", function() {
	influences.style.display = "none";
	btn05.style.color = "black";
	btn05.style.textDecoration = "none";
})

//gender fluidity on the runways (runways)
let btn06 = document.getElementById("btn06");
let runways = document.getElementById("runways");
let close06 = document.getElementById("close06");

let runwayImgs = document.querySelector(".runwayImgs");
let showRunwayImgs = document.querySelector(".showRunwayImgs");

btn06.addEventListener("click", function() {
	if (runways.style.display === "none") {
		runways.style.display = "block";
		runways.classList.add("popUp");
		showRunwayImgs.style.display = "block";
		btn06.style.color = "#7d4bc1";
		btn06.style.textDecoration = "underline";

		terms.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		runways.style.display = "none";
		showRunwayImgs.style.display = "none";
		btn06.style.color = "black";
		btn06.style.textDecoration = "none";
	}
})

close06.addEventListener("click", function() {
	runways.style.display = "none";
	showRunwayImgs.style.display = "none";
	btn06.style.color = "black";
	btn06.style.textDecoration = "none";
})

//the meaning of gender fluid fashion (meaning)
let btn07 = document.getElementById("btn07");
let meaning = document.getElementById("meaning");
let close07 = document.getElementById("close07");

let meaningImgs = document.querySelector(".meaningImgs");
let showMeaningImgs = document.querySelector(".showMeaningImgs");

btn07.addEventListener("click", function() {
	if (meaning.style.display === "none") {
		meaning.style.display = "block";
		meaning.classList.add("popUp");
		showMeaningImgs.style.display = "block";
		btn07.style.color = "#7d4bc1";
		btn07.style.textDecoration = "underline";

		terms.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		meaning.style.display = "none";
		showMeaningImgs.style.display = "none";
		btn07.style.color = "black";
		btn07.style.textDecoration = "none";
	}
})

close07.addEventListener("click", function() {
	meaning.style.display = "none";
	showMeaningImgs.style.display = "none";
	btn07.style.color = "black";
	btn07.style.textDecoration = "none";
})

//the need for gender fluidity in fashion beyond pride (beyond)
let btn08 = document.getElementById("btn08");
let beyond = document.getElementById("beyond");
let close08 = document.getElementById("close08");

let beyondImgs = document.querySelector(".beyondImgs");
let showBeyondImgs = document.querySelector(".showBeyondImgs");

btn08.addEventListener("click", function() {
	if (beyond.style.display === "none") {
		beyond.style.display = "block";
		beyond.classList.add("popUp");
		showBeyondImgs.style.display = "block";
		btn08.style.color = "#7d4bc1";
		btn08.style.textDecoration = "underline";

		terms.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";
	} else {
		beyond.style.display = "none";
		showBeyondImgs.style.display = "none";
		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	}
})

close08.addEventListener("click", function() {
	beyond.style.display = "none";
	showBeyondImgs.style.display = "none";
	btn08.style.color = "black";
	btn08.style.textDecoration = "none";
})

//click anywhere outside the popup to close it --- figure out how to make this work!! 
// window.onclick = function(event) {
//   if (event.target == popUp) {
//     popUp.style.display = "none";

//     console.log("is this thing on??");
//   }
// dude this just isn't working and idk why MEEP.

// view in purple
let purpleBtn = document.querySelector(".purple");
let whiteBtn = document.querySelector(".white");
let gender = document.getElementById("gender");
let scrollTxt = document.getElementById("scrollText");
let menu = document.querySelector(".menu");

purpleBtn.addEventListener("click", function() {
	document.body.style.backgroundColor = "#d8b9fb";
	scrollTxt.style.color = "white";
	// nav.style.color = "white";
	// menu.style.color = "white";

	whiteBtn.style.display = "block";
	purpleBtn.style.display = "none";

	document.body.style.transition = "all 2s"
})

whiteBtn.addEventListener("click", function() {
	document.body.style.backgroundColor = "white";
	scrollTxt.style.color = "#d8b9fb";
	// nav.style.color = "black";
	// menu.style.color = "black";

	whiteBtn.style.display = "none";
	purpleBtn.style.display = "block";


	document.body.style.transition = "all 2s"
})

// light purple: #d8b9fb
// dark purple: #7d4bc1

//hover to see images(in css)—-> click to make them stay 

//mainstream
showMainstreamImgs.addEventListener("click", function() {
	if (mainstreamImgs.style.display === "none") {
		mainstreamImgs.style.display = "block";
		showMainstreamImgs.style.color = "#7d4bc1";
	} else {
		mainstreamImgs.style.display = "none";
		runwayImgs.style.display = "none";
		meaningImgs.style.display = "none";
		beyondImgs.style.display = "none";
		showMainstreamImgs.style.color = "black";
	}
})

//runways
showRunwayImgs.addEventListener("click", function() {
	if (runwayImgs.style.display === "none") {
		runwayImgs.style.display = "block";
		showRunwayImgs.style.color = "#7d4bc1"
	} else {
		runwayImgs.style.display = "none";
		mainstreamImgs.style.display = "none";
		meaningImgs.style.display = "none";
		beyondImgs.style.display = "none";
		showRunwayImgs.style.color = "black";
	}
})

//meaning
showMeaningImgs.addEventListener("click", function() {
	if (meaningImgs.style.display === "none") {
		meaningImgs.style.display = "block";
		showMeaningImgs.style.color = "#7d4bc1";
	} else {
		meaningImgs.style.display = "none";
		mainstreamImgs.style.display = "none";
		runwayImgs.style.display = "none";
		beyondImgs.style.display = "none";
		showMeaningImgs.style.color = "black";
	}
})

//beyond
showBeyondImgs.addEventListener("click", function() {
	if (beyondImgs.style.display === "none") {
		beyondImgs.style.display = "block";
		showBeyondImgs.style.color = "#7d4bc1";
	} else {
		beyondImgs.style.display = "none";
		mainstreamImgs.style.display = "none";
		runwayImgs.style.display = "none";
		meaningImgs.style.display = "none";
		showBeyondImgs.style.color = "black";
	}
})

// toggle references 
let refBtn = document.getElementById("refBtn");
let references = document.getElementById("references");
let close09 = document.getElementById("close09");

refBtn.addEventListener("click", function() {
	if (references.style.display ==="none") {
		references.style.display = "block";
		references.classList.add("popUp");
		refBtn.style.color = "#7d4bc1";
		refBtn.style.textDecoration = "underline";

		term.style.display = "none";
		hAndS.style.display = "none";
		whatIs.style.display = "none";
		mainstream.style.display = "none";
		influences.style.display = "none";
		runways.style.display = "none";
		meaning.style.display = "none";
		beyond.style.display = "none";

		showMainstreamImgs.style.display = "none";
		showRunwayImgs.style.display = "none";
		showMeaningImgs.style.display = "none";
		showBeyondImgs.style.display = "none";

		btn01.style.color = "black";
		btn01.style.textDecoration = "none";

		btn02.style.color = "black";
		btn02.style.textDecoration = "none";

		btn03.style.color = "black";
		btn03.style.textDecoration = "none";

		btn04.style.color = "black";
		btn04.style.textDecoration = "none";

		btn05.style.color = "black";
		btn05.style.textDecoration = "none";

		btn06.style.color = "black";
		btn06.style.textDecoration = "none";

		btn07.style.color = "black";
		btn07.style.textDecoration = "none";

		btn08.style.color = "black";
		btn08.style.textDecoration = "none";
	} else {
		references.style.display = "none";
		refBtn.style.color = "black";
		refBtn.style.textDecoration = "none";
	}
});

close09.addEventListener("click", function() {
	references.style.display = "none";
	btn09.style.color = "black";
	btn09.style.textDecoration = "none";
})
