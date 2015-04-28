var pageMod = require('sdk/page-mod');

pageMod.PageMod(
{
    include: /https?:\/\/(?:(?:www)|(?:encrypted))\.google(?:\.\w*){1,2}\/(?:(?:search)|(?:\?gws_rd=ssl)|(?:#q=)).*/,
    contentScript:
        'unsafeWindow.rwt = "slorgs";'
});

