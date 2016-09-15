var Announcements = [
  {
    title: "A Simple Response to an Elemental Message",
    content: '<p>Final call for submissions to #ASimpleResponse ' +
    'interstellar transmission; 16 Sept 23:59 UTC.</p>' +
    '<p>' +
    '<a target="_blank" href="http://www.asimpleresponse.org/" class="btn btn-primary btn-lg active" role="button">Learn more</a>' +
    '</p>',
    publishDate: "15.09.2016",
    author: "cybersettler@babylonone.com",
    featureImageUri: "simple_response_logo.png",
    featureImageAltText: "A simple response logo"
  }
];

module.exports = {
  getAnnouncements: function() {
    return Announcements;
  }
}
