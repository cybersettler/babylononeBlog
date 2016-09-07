var Announcements = [
  {
    title: "Upcoming event: Citizens' Debate on Space for Europe",
    content: '<p>The event will take place on Sepetember 10 ' +
    'throughout the European Space Agency member countries. ' +
    'European citizens that went through a selection process' +
    'will discuss about space matters in different sessions.' +
    '<a target="_blank" href="http://citizensdebate.space/">' +
    "Citizens' Debate</a> is part of an effort from ESA to " +
    'involve european citizens in the space industry.' +
    '</p>',
    publishDate: "07.09.2016",
    author: "cybersettler@babylonone.com",
    featureImageUri: "esa-logo.png",
    featureImageAltText: "ESA logo"
  }
];

module.exports = {
  getAnnouncements: function() {
    return Announcements;
  }
}
