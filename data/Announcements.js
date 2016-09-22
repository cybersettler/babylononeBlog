var Announcements = [
  {
    title: "NASA to Announce 'Surprising' Europa Discovery Monday",
    content: "<p>JNASA will announce new findings about Jupiter's " +
    'ocean-harboring moon Europa during a news conference at 2 p.m. ' +
    'EDT (1800 GMT) on Monday (Sept. 26).</p>',
    link: 'http://www.space.com/34131-jupiter-moon-europa-hubble-telescope-announcement.html',
    publishDate: "22.09.2016",
    author: "cybersettler@babylonone.com",
    featureImageUri: "europa-jupiter-moon-caltech.jpg",
    featureImageAltText: "jupiters moon Europa"
  },{
    title: "Rosetta’s descent towards region of active pits",
    content: '<p>The final flyover will be complete on 24 September. ' +
    'Then a short series of manoeuvres needed to line Rosetta up with the ' +
    'target impact site will be executed over the following days as it ' +
    'transfers from flying elliptical orbits around the comet onto a ' +
    'trajectory that will eventually take it to the comet’s surface on ' +
    '30 September.</p>',
    link: 'http://www.esa.int/Our_Activities/Space_Science/Rosetta/' +
    'Rosetta_s_descent_towards_region_of_active_pits',
    publishDate: "17.09.2016",
    author: "cybersettler@babylonone.com",
    featureImageUri: "Rosetta_logo_rnb_small.jpg",
    featureImageAltText: "Rosetta logo"
  }
];

module.exports = {
  getAnnouncements: function() {
    return Announcements;
  }
}
