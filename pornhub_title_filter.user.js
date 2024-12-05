// ==UserScript==
// @name     pornhub title filter
// @version  1
// @grant    none
// @namespace   https://www.pornhub.com/*
// ==/UserScript==

re = /step|hermanastra/i;

// filters homepage
matchs = document.querySelectorAll(".thumbnailTitle");
matchs.forEach(e => {
  if(e.innerText.match(re)){
		e.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
  }
});

// filters other pages, eg a category page
matchs = document.querySelectorAll(".gtm-event-thumb-click");
matchs.forEach(e => {
  if(e.innerText.match(re)){
		e.parentElement.parentElement.parentElement.parentElement.remove()
  }
});
