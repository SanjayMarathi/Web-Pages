function createCard(
  title,
  channelName,
  views,
  uploadedTime,
  duration,
  thumbnail
) {
  let element = document.getElementsByClassName("container")[0];
  let newDiv = document.createElement("div");
  newDiv.className = "box";
  element.appendChild(newDiv);

  newDiv.style.height = "20vh";
  newDiv.style.width = "80vw";
  newDiv.style.backgroundColor = "#363534";
  newDiv.style.border = "2px solid black";
  newDiv.style.position = "relative";
  newDiv.style.display = "flex";

  let thumbnailDiv = document.createElement("div");
  thumbnailDiv.className = "thumbNail";
  newDiv.appendChild(thumbnailDiv);
  thumbnailDiv.style.height = "20vh";
  thumbnailDiv.style.width = "30vw";
  thumbnailDiv.style.backgroundImage = `url('${thumbnail}`;
  thumbnailDiv.style.backgroundRepeat = "no-repeat";
  thumbnailDiv.style.backgroundPosition = "center";
  thumbnailDiv.style.backgroundSize = "cover";

  let contentDiv = document.createElement("div");
  contentDiv.className = "mainContent";
  newDiv.appendChild(contentDiv);

  let titleDiv = document.createElement("div");
  titleDiv.className = "titlePart";
  let infoDiv = document.createElement("div");
  infoDiv.className = "information";

  contentDiv.appendChild(titleDiv);
  contentDiv.appendChild(infoDiv);

  contentDiv.style.display = "flex";
  contentDiv.style.flexDirection = "column";
  contentDiv.style.justifyContent = "center";
  contentDiv.style.alignItems = "center";

  titleDiv.style.height = "15vh";
  titleDiv.style.width = "50vw";
  titleDiv.textContent = `${title}`;
  titleDiv.style.color = "white";
  titleDiv.style.padding = "5px";
  titleDiv.style.fontSize = "25px";

  infoDiv.style.height = "15vh";
  infoDiv.style.width = "50vw";
  infoDiv.style.fontSize = "18px";
  let chaName = document.createElement("div");
  let totVi = document.createElement("div");
  let upTime = document.createElement("div");
  chaName.className = "chanName";
  totVi.className = "totViews";
  upTime.className = "upTime";

  infoDiv.appendChild(chaName);
  infoDiv.appendChild(totVi);
  infoDiv.appendChild(upTime);

  function viewsConverter() {
    if (views < 1000000) {
      views /= 1000;
      views = Math.floor(views);
      views = `${views}k views`;
    } else {
      views /= 1000000;
      views = Math.floor(views);
      views = `${views}M views`;
    }
  }

  function timeConverter() {
    if (uploadedTime <= 30) {
      uploadedTime = `${uploadedTime} days ago.`;
    } else if (uploadedTime <= 365) {
      uploadedTime /= 30;
      uploadedTime = Math.floor(uploadedTime);
      uploadedTime = `${uploadedTime} month ago.`;
    } else {
      uploadedTime /= 365;
      uploadedTime = Math.floor(uploadedTime);
      uploadedTime = `${uploadedTime} year ago.`;
    }
  }
  viewsConverter();
  timeConverter();
  chaName.textContent = `${channelName} `;
  totVi.textContent = views;
  upTime.textContent = uploadedTime;

  chaName.style.margin = "5px";
  totVi.style.margin = "5px";
  upTime.style.margin = "5px";

  infoDiv.style.display = "flex";
  infoDiv.style.color = "white";
  infoDiv.style.display = "flex";

  let durationDiv = document.createElement("div");
  durationDiv.className = "duration";
  durationDiv.textContent = duration;
  thumbnailDiv.appendChild(durationDiv);

  thumbnailDiv.style.position = "relative"; 
  durationDiv.style.position = "absolute";
  durationDiv.style.bottom = "5px";
  durationDiv.style.right = "5px";
  durationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  durationDiv.style.color = "white";
  durationDiv.style.padding = "3px 6px";
  durationDiv.style.fontSize = "14px";
  durationDiv.style.borderRadius = "5px";
  durationDiv.style.fontWeight = "bold";
}
let element = document.getElementsByClassName("container")[0];
element.style.display = "flex";
element.style.flexDirection = "column";
element.style.justifyContent = "center";
element.style.alignItems = "center";
element.style.position = "relative";

createCard(
  "Introduction Web Dev Course, Lets build the dynamic car builder || #Tutorial 23",
  "Codesh",
  5600000,
  945,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA"
);

createCard(
  "How virat ruled the world, Lets build the dynamic car builder || #Tutorial 23",
  "Codesh",
  560544,
  945,
  "31:22",
  "https://i.ytimg.com/vi/bBGpJzmK1UM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBZoH9riAtXqlfqT3aFHzrwWKk3hw"
);
