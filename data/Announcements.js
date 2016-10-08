var Announcements = [
  {
    title: "The space bridge challenge",
    content: '<p>We have started a new series of posts ' +
    'about the problem of building permanent habitats in space ' +
    'where humans can feel comfortable.' +
    '</p>',
    link: 'post/double_harp_space_station.html',
    publishDate: "08.10.2016",
    author: "cybersettler@babylonone.com",
    featureImageUri: "ada_bridge_640.jpg",
    featureImageAltText: "Ada bridge in Serbia"
  }
];

module.exports = {
  getAnnouncements: function() {
    return Announcements;
  }
}
