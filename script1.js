let contentgridelement = document.getElementById('contents');
let jsondatabase = [
  {
    "picture_url" : "ghost1.jpg",
  },
  {
    "picture_url" : "ghost2.jpg",
    },
  {
    "picture_url" : "ghost3.jpg",
  },
  {
    "picture_url" : "ghost4.jpg",
    },
  {
    "picture_url" : "ghost5.jpg",
  },
  {
    "picture_url" : "ghost6.jpg",
    },
    {
      "picture_url" : "ghost7.jpg",
    },
  {
    "picture_url" : "transp.svg",
  }]

  for (var i = 0; i < jsondatabase.length; i++) {
    element_create(jsondatabase[i]);
  }

function element_create(incoming_info) {

  let newcontentelement = document.createElement("DIV");

  // newcontentelement.style.backgroundColor = incoming_info['background_color'];
  newcontentelement.classList.add('content');

  // let newcontentheading = document.createElement("H3");
  // newcontentheading.classList.add('contenttitle');
  // newcontentheading.innerHTML = incoming_info['title'];
  // newcontentelement.appendChild(newcontentheading);
  //
  // let newcontentsubhead = document.createElement("H5");
  // newcontentsubhead.innerHTML = "Characteristics: ";
  // newcontentelement.appendChild(newcontentsubhead);

  let newimage = document.createElement("IMG");
  newimage.classList.add("image");
  newimage.src = incoming_info['picture_url'];
  newcontentelement.appendChild(newimage);

  contentgridelement.appendChild(newcontentelement);
}
