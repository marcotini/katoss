var Katoss     = require('./Katoss'),
    config     = require('./config.json'),
    utils      = require('./src/utils'),
    mkdirp     = require('mkdirp'),
    outputPath = config.outputPath || '.';

module.exports = function search (searchJSON, notifyManager) {
    mkdirp(outputPath, err => {
        if (err) {
            return console.log('Cannot create directory ' + outputPath, err);
        }

        var show,
            season,
            episodeList,
            currentQualityList,
            showInfo,
            languages,
            showLanguages = config.showLanguages || {},
            queue         = utils.queue;

        for (show in searchJSON) {
            if (!searchJSON.hasOwnProperty(show)) {
                continue;
            }
            showInfo  = searchJSON[show];
            languages = showLanguages[show] || config.languages;

            for (season in showInfo.seasons) {
                if (!showInfo.seasons.hasOwnProperty(season)) {
                    continue;
                }

                episodeList        = showInfo.seasons[season];
                currentQualityList = showInfo.currentQualities && showInfo.currentQualities[season];
                episodeList.forEach((episode, index) => {
                    var currentQuality = currentQualityList && currentQualityList[index],
                        search         = new Katoss(showInfo.tvdbid, show, season, episode, languages, currentQuality, notifyManager);

                    queue.push(cb => search.run(cb));
                });
            }
        }

        console.log('Queue started');
        queue.start();
    });
};
