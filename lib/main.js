var pageMod = require('sdk/page-mod');

pageMod.PageMod(
{
    include: /https?:\/\/www\.google(?:\.\w*){1,2}\/(?:(?:search)|(?:\?gws_rd=ssl)).*/,//['https://www.google.com/search*', 'https://www.google.com/?gws_rd=ssl*'],
    contentScript:
        'unsafeWindow.rwt = "slorgs";'
});

