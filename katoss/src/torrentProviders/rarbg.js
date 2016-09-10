var utils = require('../../src/utils'),
    rarbg = require('../../../utils/rarbgto-api.min');

function searchEpisode (show, season, episode) {
    console.log('here');
    return rarbg.search(utils.formatShowTitle(show) + ' S' + season + 'E' + episode, {
        category: 'tv',
        order:    'seeders',
        by:       'DESC',
        page:     1
    });
}

function extractTorrentFilenameAndUrl (torrentInfo) {
    return torrentInfo;
}

module.exports = {
    searchEpisode: searchEpisode,
    extractTorrentFilenameAndUrl: extractTorrentFilenameAndUrl
};
