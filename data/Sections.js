var sections = {
  home:{
    title:"Home",
    path:"/",
    headerImageUri:"default_header_image.png"
  },
  about:{
    title: "About",
    path: "/section/about.html",
    headerImageUri: "default_header_image.png",
    type: "page"
  },
  blog:{
    title:"Blog",
    path:"/section/blog.html",
    headerImageUri:"default_header_image.png",
    type: "postList"
  },
  vr:{
    title:"VR",
    path:"/section/vr.html",
    headerImageUri:"default_header_image.png"
  },
  reviews:{
    title:"Reviews",
    path:"/section/reviews.html",
    headerImageUri:"default_header_image.png"
  }
}

function getSectionsById(sId){
  return sections[sId];
}

function getAllSections(){
  return sections;
}

module.exports = { getAll:getAllSections, getById:getSectionsById };
