katoss
======


Katoss allows you to download TV Show episode torrent files from different torrent provider platforms along with matched subtitles from several databases.

It may be linked to a [Sick Beard](https://github.com/midgetspy/Sick-Beard) / [SickRage](https://github.com/SickRage/SickRage) manager API to search 'Wanted' episodes.


KATOSS was originally an acronym for [KickAss Torrents](https://kat.cr) + [OpenSubtitles](http://http://www.opensubtitles.org) Search.
Today, it also supports [ExtraTorrent](http://extratorrent.cc), [isoHunt torrents](https://isohunt.to), [Rarbg torrents](https://rarbg.to) and [Addic7ed](http://www.addic7ed.com) subtitles providers.


Requirements
------------

Katoss needs [Node.js](https://nodejs.org) to run.

To be able to download subtitles from [OpenSubtitles](http://www.opensubtitles.org) database,
you need to register as a user on [www.opensubtitles.org](http://www.opensubtitles.org) and request
a personal user agent string following these directions:
[How to request a new user agent](http://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst).


Installation
------------

### Method 1

The easiest way to install katoss is by downloading the latest release archive from
<https://github.com/same31/katoss/releases/latest>.


### Method 2 for developers

1. Clone this repository: `git clone https://github.com/same31/katoss.git`
2. Type `npm install` to install the dependencies.
3. Rename (or copy) the _katoss/sampleConfig.json_ configuration file to _katoss/config.json_
and edit it to configure katoss.


Configuration
-------------

See the _katoss/sampleConfig.json_ for a sample configuration file.

+ **subtitlesProviders**: _(optional)_ The list of supported subtitles databases, ordered by preference. Valid values are _opensubtitles_ and _addic7ed_.
The default value is _opensubtitles_.
+ **torrentProviders**: _(optional)_ The list of supported torrent platforms, ordered by preference. Valid values are ~~_kickass_~~, _extratorrent_, _isohunt_, and _rarbg_.
The default value is _extratorrent_.
+ **openSubtitlesUserAgent**: _(optional)_ Your personal Open Subtitles user agent string, required if _opensubtitles_ is in your list of subtitles providers,
see [How to request a new user agent](http://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst).
+ **outputPath**: _(optional)_ The path where to downloads torrent and subtitles files, default is directory from where the script is launched.
+ **qualityOrder**: The list of allowed qualities to download, ordered by preference.
Valid values are _2160p_, _1080p_, _720p_, _480p_ and _unknown_.
+ **distributionOrder**: The list of allowed distribution releases to download, ordered by preference.
Valid values are _BluRay_, _WEB-DL_, _HDTV_ and _unknown_.
+ **priority**: _(optional)_ Torrent results will be ordered by this priority list. Valid values are _quality_, _language_, _distribution_ and _HEVC_.
Use the last option to include x265 HEVC releases.
The default priority list is _quality_, _language_, _distribution_. That means release quality will prevail over preferred subtitles language found which will also
prevails over the preferred release distribution and x265 HEVC releases will be ignored.
+ **ignoredWords**: _(optional)_ Torrent releases containing a word in this list will be ignored.
Note: To ignore x265 HEVC releases, you have to exclude _HEVC_ option from _priority_ config key.
+ **languages**: Subtitles language(s) to search (3 characters code), ordered by preference. Example: `["fre", "eng"]`.
+ **showLanguages**: _(optional)_ Subtitles languages to search by show, will override the _languages_ key.
+ **sickBeard**: _(optional)_ Configuration used when connecting to a Sick Beard API.
    - **apiKey**: Your Sick Beard API key.
    - **protocol**: _(optional)_ The protocol used to connect to the Sick Beard server, default is _http_.
    - **host**: _(optional)_ The host used to connect to the Sick Beard server, default is _127.0.0.1_.
    - **port**: _(optional)_ The port used to connect to the Sick Beard server, default is _80_.
+ **kodi**: _(optional)_ Configuration used when connecting to a KODI server.
    - **protocol**: _(optional)_ The protocol used to connect to the KODI server, default is _http_.
    - **host**: _(optional)_ The host used to connect to the KODI server, default is _127.0.0.1_.
    - **port**: _(optional)_ The port used to connect to the KODI server, default is _8080_.


Usage
-----

Search can be performed by providing a JSON search file or using a Sick Beard API.


### Search with a JSON file

1. Rename (or copy) the file _utils/sampleSearch.json_ to _utils/search.json_.
2. Edit the _Sample TV Show title_ by the desired TV show title.
3. Under the _seasons_ key, write a season number followed by the list of episodes to search and download.
4. Repeat for each desired season and TV show.
5. Run `node utils/searchJSONFile.js` to search and download torrent and subtitles files.

### Search using a Sick Beard API

1. Fill in the _sickBeard_ part into the configuration file.
2. In the Sick Beard admin page, go to _Post-processing_ and enter
`/<path to node bin>/node /<path to katoss>/utils/postProcessSickBeard.js` into the _Extra scripts_ field.
3. Run `node utils/searchSickBeard.js` to search and download the episodes marked as _Wanted_.

#### Search in order to replace low quality episodes

Run `node utils/searchSickBeard.js --replace-low-quality` to search and download the episodes marked as _Downloaded_ and
which quality does not match the first of the _qualityOrder_ in the configuration file.

Note: It will not search for 2160p releases when using this option as it would search for nearly your entire library.


About
-----

### Torrent providers

~~[Kickass Torrents](https://kat.cr)~~

[ExtraTorrent](http://extratorrent.cc)

[![ExtraTorrent logo](http://images4et.com/images/logo.gif "ExtraTorrent")](http://extratorrent.cc)

[isoHunt torrents](https://isohunt.to)

[![isoHunt logo](https://static.isohunt.to/img/logo_square.jpg "isoHunt torrents")](https://isohunt.to)

[Rarbg torrents](https://rarbg.to)

[![Rarbg logo](https://dyncdn.me/static/20/img/logo_dark_nodomain2_optimized.png "Rarbg torrents")](https://rarbg.to)


### Subtitles providers

[Open Subtitles](http://www.opensubtitles.org)

[![Open Subtitles logo](http://static.opensubtitles.org/gfx/logo-transparent.png "Open Subtitles")](http://www.opensubtitles.org)

[Addic7ed](http://www.addic7ed.com)


License
-------

MIT. Feel free to modify and distribute.
