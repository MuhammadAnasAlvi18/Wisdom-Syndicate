const div = document.getElementById("active");
const navbaar = document.getElementById("navbaar");
const sidebar = document.getElementById("sidebar");
const popup = document.getElementById("popup");
const background = document.getElementById("active");
const membersection = document.getElementById("membersection");
const popupclose = document.getElementById("popupclose");
const closeBtn = document.getElementById("closeBtn");
const popuph2 = document.getElementById("popuph2");
const popupp = document.getElementById("popup-p");
const popupinputdiv = document.getElementById("popupinputdiv");
const searchDiv = document.getElementById("searchDiv");
let memberName = document.getElementById("memberName")
let memberImg = document.getElementById("memberImg");
const blogSearch = document.getElementById("blogSearch");
const card = document.getElementsByClassName("blogDiv")


AOS.init();

var isTrue = false;

function showNav() {
    if (!isTrue) {
        navbaar.style.bottom = "20%";
        navbaar.style.top = "80px"
        isTrue = true;
        sidebar.style.width = "378px"
    }
    else if (isTrue === true) {
        navbaar.style.bottom = "100%"
        navbaar.style.top = "-100%"
        navbaar.style.left = '0'
        isTrue = false;
        sidebar.style.width = "0"
    }

}


function showSearchbar() {
    searchDiv.style.bottom = "0";

    navbaar.style.bottom = "100%"
    navbaar.style.top = "-100%"
    navbaar.style.left = '0'
    isTrue = false;
    sidebar.style.width = "0"

}

function closeSearchbar() {
    searchDiv.style.bottom = "100%";
}

function hidePopup() {
    popup.style.width = "0";
    popup.style.height = "0";
    background.style.filter = "brightness(100%)";
    searchDiv.style.filter = "brightness(100%)";
    membersection.style.background = "#fff";
    popupclose.style.width = "0";
    popupclose.style.height = "0";
    closeBtn.style.display = "none";
    popuph2.style.opacity = "0";
    popupp.style.opacity = "0";
    popupinputdiv.style.display = "none";
}


function showPopup() {

    setTimeout(() => {
        popup.style.width = "50%";
        popup.style.height = "408px";
        background.style.filter = "brightness(30%)";
        searchDiv.style.filter = "brightness(30%)";
        membersection.style.background = "rgba(0,0,0,0.3)";
        popupclose.style.width = "60px";
        popupclose.style.height = "60px";
        closeBtn.style.display = "block";
        popuph2.style.opacity = "1";
        popupp.style.opacity = "1";
        popupinputdiv.style.display = "block";
    }, 15000)

}



function getMember(e) {
    const imgUrl = e.childNodes[1].src;
    const memberName = e.childNodes[3].innerHTML;
    const obj = {
        imageUrl: imgUrl,
        name: memberName
    }
    localStorage.setItem("memberDetail", JSON.stringify(obj))
    setTimeout(() => { window.location = "/pages/memberDetails.html" }, 1000)
}

function getMembeInfo() {
    const memberObj = localStorage.getItem("memberDetail");
    const parsememberObj = JSON.parse(memberObj);
    const memberObject = parsememberObj;
    localStorage.removeItem("memberDetail");
    memberName.innerHTML = memberObject.name
    memberImg.style.marginBottom = "60px"
    memberImg.src = memberObject.imageUrl;

}

function searchBlogsFunc() {

    const filter = blogSearch.value.toUpperCase();

    for (i = 0; i < card.length; i++) {
        h3 = card[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}