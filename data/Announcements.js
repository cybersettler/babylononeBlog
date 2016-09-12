var Announcements = [
  {
    title: "Ongoing event: Citizens' Debate on Space for Europe",
    content: '<p>The European Space Agency (ESA) is organizing the ' +
    '2nd consultation meeting of EO Open Science in ESRIN (Frascati, Italy) ' +
    'on 12–14 September 2016 to explore new challenges and opportunities ' +
    'for EO research created by the rapid advances in Information and ' +
    'Communications Technologies (ICT).</p>' +
    '<p>' +
    '<a target="_blank" href="http://eoopenscience.esa.int/" class="btn btn-primary btn-lg active" role="button">Learn more</a>' +
    '</p>',
    publishDate: "12.09.2016",
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
