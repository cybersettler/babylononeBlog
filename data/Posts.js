var posts = {
  "starship_environment":{
    id: "starship_environment",
    title:"Starship environment", // the title tag should be 60 characters or less
    description:"What sort of environment a starship shpuld provide to support a human society.", // meta description must be limited to 160 characters or less
    author:"cybersettler@babylonone.com",
    publishDate:"18.11.2014",
    featureImageUri:"stanford_torus_feature_160x125.jpg",
    fetaureImageAltText:"Stanford torus",
    headerImageUri:"garden_in_loire_valley.jpg",
    section:"blog"
  },
  "propulsion_to_reach_the_stars":{
    id: "propulsion_to_reach_the_stars",
    title:"Propulsion system to reach the stars", // the title tag should be 60 characters or less
    description:"Which propulsion system is optimal to travel to other stellar systems.", // meta description must be limited to 160 characters or less
    author:"cybersettler@babylonone.com",
    publishDate:"15.11.2014",
    featureImageUri:"orion_feature_160x128.jpg",
    fetaureImageAltText:"Project Orion",
    headerImageUri:"STS-130_launch.jpg",
    section:"blog"
  },
  "comet_67P_CG_3D_model":{
    id: "comet_67P_CG_3D_model",
    title:"Comet 67P/C-G 3D model", // the title tag should be 60 characters or less
    description:"A 3D representation of the comet 67P/C-G with threejs.", // meta description must be limited to 160 characters or less
    author:"cybersettler@babylonone.com",
    publishDate:"11.11.2014",
    featureImageUri:"comet_67p_feature_160x120.png",
    fetaureImageAltText:"Comet 67P/C-G",
    headerImageUri:"67p_touchdown_closeup.png",
    section:"blog"
  },
  "voyage_to_alpha_centauri":{
    id: "voyage_to_alpha_centauri",
    title:"Voyage to Alpha Centauri", // the title tag should be 60 characters or less
    description:"A voyage to Alpha Centauri as a first implementation of the Babylon One videogame.", // meta description must be limited to 160 characters or less
    author:"cybersettler@babylonone.com",
    publishDate:"10.11.2014",
    featureImageUri:"alpha_centauri_feature_160x100.jpg",
    featureImageAltText:"Artist rendering of Alpha Centauri",
    headerImageUri:"colosimo-130704-011.jpg",
    section:"blog"
  }
}

function filterPostsBy(key, value) {
  var result = [];
  for (var p in posts) {
    if (posts.hasOwnProperty(p) && posts[p][key] === value) {
      result.push(posts[p]);
    }
  }
  return result.sort(sortPostsByDate);
}

function sortPostsByDate(a, b) {
  var timeA = parseDate(a);
  var timeB = parseDate(b);
  return timeB - timeA;
}

function parseDate(dateString) {
  var timeSplit = dateString.publishDate.split(".");
  return Date.parse(timeSplit[2] + "-" + timeSplit[1] + "-" + timeSplit[0]);
}

module.exports = {
  getPosts: function(){
    return posts;
  },
  getPostById: function(sId){
    return posts[sId];
  },
  getPostsBySection: function(section) {
    return filterPostsBy("section", section)
  }
};
