var pics = new Array(
  'images/backimg1.jpg'
);
cur = -1;
function BgButton() {
  max=0;  
  cur++;
  if (cur>max) cur=0;
  document.getElementById('menu').src=pics[cur];
  menu.classList.remove("off");
  menu1.classList.add("off");
  menu2.classList.add("off");
}

var pics1 = new Array(
  'images/backimg2.jpg'
);
cur = -1;
function BgButton1() {
  max=0;  
  cur++;
  if (cur>max) cur=0;
  document.getElementById('menu1').src=pics1[cur];
  menu1.classList.remove("off");
  menu.classList.add("off");
  menu2.classList.add("off");
}

var pics2 = new Array(
  'images/backimg3.jpg'
);
cur = -1;
function BgButton2() {
  max=0;  
  cur++;
  if (cur>max) cur=0;
  document.getElementById('menu2').src=pics2[cur];
  menu2.classList.remove("off");
  menu.classList.add("off");
  menu1.classList.add("off");
}