var pageMod = require('sdk/page-mod');

pageMod.PageMod(
{
    include: ['https://www.google.com/search*', 'https://www.google.com/?gws_rd=ssl*'],
    contentScript:
        //'window.alert("wow");'
        'unsafeWindow.rwt = "slorgs";'
});

