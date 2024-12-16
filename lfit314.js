const showHomePage = () => {
    document.getElementById("homepage").style.display = "block";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "0.25vw solid white";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "none";
}

const showGuestBookPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "block";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "0.25vw solid white";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "none";
}

const showShopPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "block";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "0.25vw solid white";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "none";
    getShopItems();
}

const showUserRegistrationPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "block";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "0.25vw solid white";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "none";
}

const showUserLoginPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "block";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "0.25vw solid white";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "none";
}

const showEventsPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "block";
    document.getElementById("learningtereopage").style.display = "none";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "0.25vw solid white";
    document.getElementById("learningtereotab").style.borderBottom = "none";

    displayEvents();
}

const showLearningTeReoPage = () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("guestbookpage").style.display = "none";
    document.getElementById("shoppage").style.display = "none";
    document.getElementById("userregistrationpage").style.display = "none";
    document.getElementById("userloginpage").style.display = "none";
    document.getElementById("eventspage").style.display = "none";
    document.getElementById("learningtereopage").style.display = "block";

    document.getElementById("hometab").style.borderBottom = "none";
    document.getElementById("guestbooktab").style.borderBottom = "none";
    document.getElementById("shoptab").style.borderBottom = "none";
    document.getElementById("userregistrationtab").style.borderBottom = "none";
    document.getElementById("userlogintab").style.borderBottom = "none";
    document.getElementById("eventstab").style.borderBottom = "none";
    document.getElementById("learningtereotab").style.borderBottom = "0.25vw solid white";

    getMatchingPairsData();
}

showHomePage();


/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////  Home Page    //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Insert API Version text
const getApiVersion = () => {
    const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/Version',
    );
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => document.getElementById("version").innerText = 'The current API version is ' + data);
}
getApiVersion();

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////  Guest Book Page    ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Guest Book Page - Insert functionality to write a comment
const subCommentButton = document.getElementById("myCommentButton");
subCommentButton.addEventListener("click", async e => {
    e.preventDefault();
    const commentinput = {
        "comment": String(document.getElementById("gbcomment").value),
        "name": String(document.getElementById("gbname").value),
    }
    const fetchPromise = await fetch('https://cws.auckland.ac.nz/ako/api/Comment',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify(commentinput),
        },
    );
    document.getElementById("guestcomments").src = document.getElementById("guestcomments").src;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////     Shop Page       ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const getShopItems = () => {
    const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/AllItems',
        {
            headers: {
                "Accept": "Application/json",
            },
        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => displayShopItems(data));
}

const getFilteredShopItems = () => {
    let searchterm = document.getElementById("inputdata").value;
    const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/Items/' + searchterm,
        {
            headers: {
                "Accept": "Application/json",
            },
        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => displayShopItems(data));
}

const displayShopItems = (items) => {
    let htmlString = "";
    const displayItem = (item) => {
        htmlString +=
            `<div class='itema'>
        <div class='itemname'>${item.name}</div>
        <div class='itemimg'><img class='imga' src='https://cws.auckland.ac.nz/ako/api/ItemImage/${item.id}'></div>
        <div class='itemdescription'><span style="font-weight: bold;">Item ID: </span>${item.id}
        <br><br><span style="font-weight: bold;">Description: </span>${item.description}</div>
        <button class='eventbutton' onclick='purchaseItem(${item.id})'>Buy Now: $${item.price}</button>
        <br><p id="${item.id}q"></p>
        </div>`
    }

    items.forEach(displayItem);
    const shopdiv = document.getElementById("shopitems");
    shopdiv.innerHTML = htmlString;
}

function updateShop() {
    const searchText = document.getElementById('inputdata').value;
    if (searchText == '') {
        getShopItems();
    }
    else {
        getFilteredShopItems();
    }
}

async function purchaseItem(itemID) {
    if (currUserLogin == '') {
        showUserLoginPage();
        //alert('Please login before making a purchase!');
        let p = document.getElementById("loginmessage");
        p.innerHTML = "Please login before making a purchase!";
        setTimeout(function () {
            p.innerHTML = "";

        }, 2000);
    }
    else {
        //alert('Thanks USER_' + currUserLogin + ' for purchasing product ID_' + itemID)
        let q = document.getElementById(itemID + "q");
        q.innerHTML = 'Thanks USER_' + currUserLogin + ' for purchasing product ID_' + itemID;
        setTimeout(function () {
            q.innerHTML = "";

        }, 2000);
    }
}

document.getElementById('inputdata').addEventListener('input', updateShop);

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////     Register User       ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

const regUser = () => {
    const registerinput = {
        "username": String(document.getElementById("regusername").value),
        "password": String(document.getElementById("regpassword").value),
        "address": String(document.getElementById("regaddress").value)
    }

    const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/Register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify(registerinput),
        },
    );
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => {
        let x = document.getElementById("regmessage");
        x.innerHTML = data;
        setTimeout(function () {
            x.innerHTML = "";

        }, 2000);
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      Log in        /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

let currUserLogin = "";
let currUserPassword = "";

const testAuthentication = () => {
    currUserLogin = String(document.getElementById("logusername").value);
    currUserPassword = String(document.getElementById("logpassword").value);
    const credentials = `${currUserLogin}:${currUserPassword}`;
    const base64Credentials = btoa(credentials);

    const fetchPromise = fetch('https://cws.auckland.ac.nz/ako/api/TestAuth',
        {
            headers: {
                "Accept": "Application/json",
                "Authorization": `Basic ${base64Credentials}`,
            },
        }
    );
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise
        .then((data) => {
            document.getElementById("loginstring").innerHTML = currUserLogin + " (logged in)";
            document.getElementById("userlogintab").style.display = "none";
            document.getElementById("mylogoutbutton").style.display = "block";
            showHomePage()
            document.getElementById("logusername").value = "";
            document.getElementById("logpassword").value = "";
            let y = document.getElementById("logoutmessage");
            y.innerHTML = currUserLogin + " successfully logged in";
            setTimeout(function () {
                y.innerHTML = "";
            }, 2000);
        }
        )
        .catch((error) => {
            let z = document.getElementById("loginmessage");
            z.innerHTML = "Incorrect username and/or password";
            setTimeout(function () {
                z.innerHTML = "";
            }, 2000);
        });

}
const logOut = () => {
    currUserLogin = "";
    currUserPassword = "";
    document.getElementById("loginstring").innerHTML = "Guest User (not logged in)";
    document.getElementById("userlogintab").style.display = "block";
    document.getElementById("mylogoutbutton").style.display = "none";
    let x = document.getElementById("logoutmessage");
    x.innerHTML = "Logged out successfully";
    setTimeout(function () {
        x.innerHTML = "";
    }, 2000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      Events        /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

async function getEventCount() {
    const fetchResponse = await fetch('https://cws.auckland.ac.nz/ako/api/EventCount',
        {
            headers: {
                "Accept": "application/json",
            },
        }
    );
    const data = await fetchResponse.json();
    return data;
}

async function getEvent(eventId) {
    const fetchResponse = await fetch('https://cws.auckland.ac.nz/ako/api/Event/' + eventId,
        {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
        }
    );
    const data = await fetchResponse.text();
    return data;
}

async function displayEvents() {
    let htmlEventString = "";
    let numEvents = await getEventCount();
    for (let i = 0; i < numEvents; i++) {
        let event = await getEvent(i);
        event = event.split("\n")
        for (let j = 0; j < event.length; j++) {
            event[j] = event[j].split(":");
        }

        const startDate = event[6][1];
        const sYear = parseInt(startDate.substring(0, 4), 10);
        const sMonth = parseInt(startDate.substring(4, 6), 10) - 1;
        const sDay = parseInt(startDate.substring(6, 8), 10);
        const sHours = parseInt(startDate.substring(9, 11), 10);
        const sMinutes = parseInt(startDate.substring(11, 13), 10);
        const sSeconds = parseInt(startDate.substring(13, 15), 10);
        const startDateUTC = new Date(Date.UTC(sYear, sMonth, sDay, sHours, sMinutes, sSeconds));
        const startDateFormatted = startDateUTC.toLocaleString();

        const endDate = event[7][1];
        const eYear = parseInt(endDate.substring(0, 4), 10);
        const eMonth = parseInt(endDate.substring(4, 6), 10) - 1;
        const eDay = parseInt(endDate.substring(6, 8), 10);
        const eHours = parseInt(endDate.substring(9, 11), 10);
        const eMinutes = parseInt(endDate.substring(11, 13), 10);
        const eSeconds = parseInt(endDate.substring(13, 15), 10);
        const endDateUTC = new Date(Date.UTC(eYear, eMonth, eDay, eHours, eMinutes, eSeconds));
        const endDateFormatted = endDateUTC.toLocaleString();

        htmlEventString +=
            `<div class='eventitem'>
        <div class='eventlocation'><span style="font-weight: bold; font-size: 24px;">${event[10][1]}</span>
        <br><br>Location <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg> ${event[11][1]}
        <br><br>Starts: ${startDateFormatted}
        <br>Ends: ${endDateFormatted}
        <br><br>Manager: ${event[9][1]}
        <br><br>Event ID: ${i}
        </div>
        <br>
        <button class='eventbutton' onclick='downloadEvent(${i});'>Download</button>
        </div>`
    }
    const eventdiv = document.getElementById("eventitems");
    eventdiv.innerHTML = htmlEventString;
}

function downloadEvent(eventId) {
    window.location.href = "https://cws.auckland.ac.nz/ako/api/Event/" + eventId;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////   Matching Pairs       ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
let score = 0;
async function getMatchingPairsData() {
    const fetchResponse = await fetch('https://cws.auckland.ac.nz/ako/api/MatchingPair',
        {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
        }
    );
    const data = await fetchResponse.json();
    const dataTypeArray = data.type.split(":");
    const col1 = dataTypeArray[0]
    const col3 = dataTypeArray[1]
    const matchedPairs = data.pairs.split("|");
    const numPairs = matchedPairs.length;


    for (let i = 0; i < numPairs; i++) {
        matchedPairs[i] = matchedPairs[i].split("@");
    }

    const shuffledPairs = shuffleArray(matchedPairs);

    let htmlPairsString = "";

    for (let i = 0; i < numPairs; i++) {
        htmlPairsString += "<tr>"
        if (col1 == "string") {
            htmlPairsString += `<td><p data-draggable-id="${matchedPairs[i][0]}">${matchedPairs[i][0]}</p></td>`;
        }
        else if (col1 == "image") {
            htmlPairsString += `<td><img draggable="false" data-draggable-id="${matchedPairs[i][0]}" class="pairsimg" src="${matchedPairs[i][0]}"></img></td>`;
        }
        else {
            htmlPairsString += `<td><audio draggable="false" data-draggable-id="${matchedPairs[i][0]}" controls src="${matchedPairs[i][0]}"></audio></td>`;
        }

        htmlPairsString += `<td id="${matchedPairs[i][0]}d" ondrop="drop(event)" ondragover="dragOver(event)";></td>`;

        if (col3 == "string") {
            htmlPairsString += `<td><p id="${shuffledPairs[i][0]}" ondragstart="dragStart(event)" class="pairsp" draggable="true">${shuffledPairs[i][1]}</p></td>`;
        }
        else if (col3 == "image") {
            htmlPairsString += `<td><img id="${shuffledPairs[i][0]}" ondragstart="dragStart(event)" class="pairsimg" draggable="true" src="${shuffledPairs[i][1]}"></img></td>`;
        }
        else {
            htmlPairsString += `<td><audio id="${shuffledPairs[i][0]}" ondragstart="dragStart(event)" draggable="true" controls src="${shuffledPairs[i][1]}"></audio></td>`;
        }
        htmlPairsString += "</tr>"
    }

    const pairstable = document.getElementById("pairstable");
    pairstable.innerHTML = htmlPairsString;

    let demoString = "";
    demoString += '<tr><td><p data-draggable-id="a">kiwi</p></td><td id="bd" ondrop="demoDrop(event)" ondragover="dragOver(event)" ;></td><td><p id="a" ondragstart="dragStart(event)" class="pairsp" draggable="true">kākāriki</p></td></tr>';
    demoString += '<tr><td><p data-draggable-id="green">green</p></td><td id="ad" ondrop="demoDrop(event)" ondragover="dragOver(event)" ;></td>'
    demoString += '<td><img id="b" ondragstart="dragStart(event)" class="pairsimg" draggable="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDQwMCA0MDAiPgogICA8cGF0aCBkPSJNMTM0LjI5NiA4MC4wNTggQyA2MS4xOTggODguMjA1LDIzLjg3MCAxMjcuNTY0LDI5LjM4NyAxOTAuNjc2IEMgMzIuNDk5IDIyNi4yNzYsMzkuNDE1IDIzOS4zMjcsNjYuMTI3IDI2MC4wMDcgQyA5NC42ODIgMjgyLjExMywxMDguMjEyIDMxMC4zMTcsOTYuMzMzIDMyMi45NzUgQyA5Mi4xMjkgMzI3LjQ1Niw5Mi4yNTYgMzI3LjU2NSwxMDIuNTU0IDMyOC4zMDEgQyAxMDkuNjgxIDMyOC44MTEsMTEzLjk1NCAzMzAuMDY4LDEyMS4zNzYgMzMzLjgzOSBMIDEzMC45NzcgMzM4LjcxNiAxMzAuMDQ0IDMzMi40OTYgTCAxMjkuMTExIDMyNi4yNzYgMTM4LjIyMiAzMjcuMTc1IEMgMTQzLjIzMyAzMjcuNjcwLDE0OS40MzMgMzI4LjQwMCwxNTIuMDAwIDMyOC43OTggTCAxNTYuNjY3IDMyOS41MjEgMTUyLjQ5MSAzMjUuNTg3IEMgMTQ4LjM2OCAzMjEuNzAyLDE0NC42ODIgMzIwLjIwNiwxMjUuNjAxIDMxNC42NzEgQyAxMTIuMTY0IDMxMC43NzMsMTEwLjMzNyAzMDcuODM1LDExMC45NzYgMjkxLjE1MyBDIDExMS42ODQgMjcyLjY3OCwxMjAuMDA4IDI2Mi43ODUsMTM0LjkxNiAyNjIuNjk2IEMgMTQzLjgxNyAyNjIuNjQzLDE1Ni41NTkgMjk5LjQyMCwxNTAuMTA4IDMwNi41NDcgQyAxNDcuNTM2IDMwOS4zOTAsMTUwLjA0MyAzMTAuNjE0LDE1OC41MDkgMzEwLjY0OCBDIDE2My43NjUgMzEwLjY3MCwxNzAuNzQ3IDMxNC42MjMsMTc0LjU2NiAzMTkuNzM5IEwgMTc3LjI0OSAzMjMuMzMzIDE3Ny4yOTEgMzE3LjAwMCBDIDE3Ny4zMTQgMzEzLjUxNywxNzcuODI2IDMxMC42NjcsMTc4LjQyOSAzMTAuNjY3IEMgMTgxLjcyOSAzMTAuNjY3LDE5Mi4yODIgMzE1LjI4OSwxOTUuMjM5IDMxOC4wMzAgQyAxOTkuMjM1IDMyMS43MzMsMTk5Ljc2OCAzMTkuODgzLDE5Ni43NzIgMzEyLjcxMiBDIDE5NC4yNDkgMzA2LjY3NiwxODYuNjQ1IDMwMS44NjgsMTc1LjMwMCAyOTkuMTM3IEMgMTcwLjE4NSAyOTcuOTA2LDE2NS44MTQgMjk2Ljc2MCwxNjUuNTg3IDI5Ni41OTEgQyAxNjUuMzU5IDI5Ni40MjIsMTY0LjAwMyAyODguODcwLDE2Mi41NzQgMjc5LjgwOSBDIDE2MS4xNDQgMjcwLjc0NywxNTkuNjQ1IDI2MS43NDEsMTU5LjI0MyAyNTkuNzk0IEMgMTU4LjU1MiAyNTYuNDU1LDE1OC45MDEgMjU2LjE3MSwxNjUuNDExIDI1NC43NzUgQyAyMDEuNzA4IDI0Ni45OTAsMjQxLjA4NCAyMjAuNjM2LDI1Ni4wNTcgMTk0LjEwNSBDIDI2MS4wMjkgMTg1LjI5NSwyNTkuNzg4IDE4NS41NDksMjY5LjI1OCAxOTEuMzk1IEMgMjgxLjEyOSAxOTguNzIyLDI5NC41NDggMjAyLjgzNiwzMDkuMjczIDIwMy42NjMgTCAzMjIuMDAwIDIwNC4zNzggMzI4LjAwMCAyMTEuNTM3IEMgMzQyLjg3MSAyMjkuMjc4LDM1My45MjUgMjUyLjg3NywzNjMuNDc2IDI4Ny4yNjkgQyAzNjguMzI3IDMwNC43MzUsMzY4LjY5NyAzMDUuNTQ5LDM2OS41MjggMzAwLjYwMiBDIDM3My4xOTkgMjc4Ljc2MiwzNTkuNDcwIDIzNC42MzEsMzQwLjA2MiAyMDUuODg0IEwgMzMzLjY4MiAxOTYuNDM1IDMzMy4wMDcgMTc3LjIxNyBDIDMzMS4zOTggMTMxLjQzOSwzMTcuMTUyIDExNi42MzcsMjc3LjMzMyAxMTkuMzczIEMgMjUxLjM4MiAxMjEuMTU3LDI1MC4zMzYgMTIwLjkyMSwyMzcuMjIwIDExMC4zMjggQyAyMDcuMzU1IDg2LjIwOSwxNzIuMTExIDc1Ljg0NCwxMzQuMjk2IDgwLjA1OCIgLz4KPC9zdmc+"></img></td>';
    demoString += '</tr>';

    const demtable = document.getElementById("demotable");
    demtable.innerHTML = demoString;

    const currScore = document.getElementById("attempts");
    currScore.innerHTML = "Your current score is 0 / " + numPairs;
    score = 0;
    return data;
}

function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {

    const data = event.dataTransfer.getData("text/plain");
    const locationData = event.target.id;

    if (data === locationData.slice(0, -1)) {
        event.target.appendChild(document.getElementById(data));
        document.getElementById(locationData).style.backgroundColor = "green";
        score += 1;

        const table = document.getElementById("pairstable");
        const numRows = table.rows.length;
        const currScore = document.getElementById("attempts");
        currScore.innerHTML = "Your current score is " + score + " / " + numRows;
    }

}


function demoDrop(event) {

    const data = event.dataTransfer.getData("text/plain");
    const locationData = event.target.id;

    if (data === locationData.slice(0, -1)) {
        event.target.appendChild(document.getElementById(data));
        document.getElementById(locationData).style.backgroundColor = "green";
    }

}