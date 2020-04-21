// const container = document;

// var divLeft = document.createElement("div");
// var divRight = document.createElement("div");

// divLeft.appendChild();

// header;
// span1;
// span2;
// span3;

// div1;
// h1;
// p;

// div2;
// h2;
// p;
// p;
// span;
// span;

// div3;
// h2;
// p;
// p;
// span;
// span;

// let p = document.createElement("p");
// document.body.appendChild(p);

const container = document.getElementById("container");
container.style.width = "60%";
container.style.margin = "0px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignContent = "center";

document.body.style.fontFamily = "sans-serif";

// HEADER //
const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#65a6f3";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
topNav.style.justifyContent = "flex-end";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);

// Jumbotron //

const jumbotron = document.createElement("div");
jumbotron.style.color = "rgb(90,90,90)";
jumbotron.style.backgroundColor = "rgb(222,222,222)";
jumbotron.style.display = "flex";
jumbotron.style.flexDirection = "column";
jumbotron.style.justifyContent = "space-between";
jumbotron.style.padding = "0 20px";

const heading2 = document.createElement("h1");
heading2.textContent = "Curse of the Current Reviews";
heading2.style.paddingRight = "15px";
jumbotron.appendChild(heading2);

const p1 = document.createElement("p");
p1.textContent =
  "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage.Their choice is dependent on three important factors price, screenshot and reviews.";
p1.style.paddingRight = "15px";
p1.style.fontSize = "90%";
p1.style.fontWeight = "500";
p1.style.color = "rgb(50,50,50)";

jumbotron.appendChild(p1);

container.appendChild(jumbotron);

// SECTION 1 //

const sub1 = document.createElement("div");
sub1.style.display = "flex";
sub1.style.flexDirection = "column";
sub1.style.justifyContent = "";
sub1.style.padding = "0";

const sub1Heading = document.createElement("h1");
sub1Heading.style.color = "rgb(0,100,190)";
sub1Heading.textContent = "Hello WatchKit";
sub1Heading.style.paddingRight = "15px";
sub1Heading.style.paddingLeft = "10px";
sub1Heading.style.fontWeight = "200";
sub1Heading.style.paddingTop = "3px";
sub1Heading.style.marginBottom = "3px";
sub1.appendChild(sub1Heading);

const sub1P = document.createElement("p");
sub1P.textContent =
  "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.The WatchKit framework enable the developers to create Apple Watch applications.In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
sub1P.style.paddingRight = "15px";
sub1P.style.fontSize = "90%";
sub1P.style.fontWeight = "500";
sub1P.style.paddingLeft = "8px";
sub1P.style.paddingTop = "5px";
sub1P.style.paddingBottom = "5px";
sub1P.style.margin = "0";
sub1P.style.color = "rgb(50,50,50)";
sub1.appendChild(sub1P);

const sub1sub1 = document.createElement("div");
sub1sub1.style.backgroundColor = "rgb(242,144,24)";
sub1sub1.style.paddingRight = "15px";
sub1sub1.style.margin = "0";
sub1.appendChild(sub1sub1);

const sub1sub1P = document.createElement("p");
sub1sub1P.textContent = "12 comments     124 likes";
sub1sub1P.style.color = "white";
sub1sub1P.style.fontWeight = "600";
sub1sub1P.style.paddingLeft = "3px";
sub1sub1P.style.margin = "5px";

sub1sub1.appendChild(sub1sub1P);

container.appendChild(sub1);

// SECTION 2 //

const sub2 = document.createElement("div");
sub2.style.display = "flex";
sub2.style.flexDirection = "column";
sub2.style.justifyContent = "";
sub2.style.padding = "0";

const sub2Heading = document.createElement("h1");
sub2Heading.style.color = "rgb(0,100,190)";
sub2Heading.textContent = "Introduction to Swift";
sub2Heading.style.paddingRight = "15px";
sub2Heading.style.paddingLeft = "10px";
sub2Heading.style.fontWeight = "200";
sub2Heading.style.paddingTop = "3px";
sub2Heading.style.marginBottom = "3px";
sub2.appendChild(sub2Heading);

const sub2P = document.createElement("p");
sub2P.textContent =
  "Swift is a modern programming language developed by Apple to create the next generation of iOS and QSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
sub2P.style.paddingRight = "15px";
sub2P.style.fontSize = "90%";
sub2P.style.fontWeight = "500";
sub2P.style.paddingLeft = "8px";
sub2P.style.paddingTop = "5px";
sub2P.style.paddingBottom = "5px";
sub2P.style.margin = "0";
sub2P.style.color = "rgb(50,50,50)";
sub2.appendChild(sub2P);

const sub2sub2 = document.createElement("div");
sub2sub2.style.backgroundColor = "rgb(242,144,24)";
sub2sub2.style.paddingRight = "15px";
sub2sub2.style.margin = "0";
sub2.appendChild(sub2sub2);

const sub2sub2P = document.createElement("p");
sub2sub2P.textContent = "15 comments     45 likes";
sub2sub2P.style.color = "white";
sub2sub2P.style.fontWeight = "600";
sub2sub2P.style.paddingLeft = "3px";
sub2sub2P.style.margin = "5px";

sub2sub2.appendChild(sub2sub2P);

container.appendChild(sub2);

/* 
High On Coding
Home
Categories

Curse of the Current Reviews

When you want to buy any application from the Apple iTunes store you have more choices than you can handle.Most of the
users scroll past the application description completely avoiding it like ads displayed on the right column of your
webpage.Their choice is dependent on three important factors price, screenshot and reviews.

Hello WatchKit
Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.The
WatchKit framework enable the developers to create Apple Watch applications.In this article we are going to focus on
the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.
12 comments
124 likes

Introduction to Swift
15 comments
45 likes

*/
