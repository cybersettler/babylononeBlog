var Announcements = [
  {
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
    featureImageUri: "Rosetta_s_last_week_at_the_comet_node_full_image_2.jpg",
    featureImageAltText: "Rosetta logo"
  }
];

module.exports = {
  getAnnouncements: function() {
    return Announcements;
  }
}
