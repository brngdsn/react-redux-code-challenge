const SITES = [
    {
        "id": 1,
        "url": "google.com"
    },
    {
        "id": 2,
        "url": "youtube.com"
    },
    {
        "id": 3,
        "url": "facedasdasdadsbook.com"
    },
    {
        "id": 4,
        "url": "baidu.com"
    },
    {
        "id": 5,
        "url": "wikipedia.org"
    },
    {
        "id": 6,
        "url": "yahoo.com"
    },
    {
        "id": 7,
        "url": "google.co.in"
    },
    {
        "id": 8,
        "url": "reddit.com"
    },
    {
        "id": 9,
        "url": "qq.com"
    },
    {
        "id": 10,
        "url": "taobao.com"
    },
    {
        "id": 11,
        "url": "amazon.com"
    },
    {
        "id": 12,
        "url": "tmall.com"
    },
    {
        "id": 13,
        "url": "twitter.com"
    },
    {
        "id": 14,
        "url": "google.co.jp"
    },
    {
        "id": 15,
        "url": "vk.com"
    },
    {
        "id": 16,
        "url": "live.com"
    },
    {
        "id": 17,
        "url": "sohu.com"
    },
    {
        "id": 18,
        "url": "insdtaadsdasdsagram.com"
    },
    {
        "id": 19,
        "url": "jd.com"
    },
    {
        "id": 20,
        "url": "sina.com.cn"
    },
    {
        "id": 21,
        "url": "weibo.com"
    },
    {
        "id": 22,
        "url": "360.cn"
    },
    {
        "id": 23,
        "url": "google.de"
    },
    {
        "id": 24,
        "url": "google.co.uk"
    },
    {
        "id": 25,
        "url": "googsasdasdle.com.br"
    },
    {
        "id": 26,
        "url": "list.tmall.com"
    },
    {
        "id": 27,
        "url": "google.fr"
    },
    {
        "id": 28,
        "url": "linkedin.com"
    },
    {
        "id": 29,
        "url": "google.ru"
    },
    {
        "id": 30,
        "url": "yandex.ru"
    },
    {
        "id": 31,
        "url": "google.it"
    },
    {
        "id": 32,
        "url": "netflix.com"
    },
    {
        "id": 33,
        "url": "google.com.hk"
    },
    {
        "id": 34,
        "url": "google.es"
    },
    {
        "id": 35,
        "url": "yahoo.co.jp"
    },
    {
        "id": 36,
        "url": "google.com.mx"
    },
    {
        "id": 38,
        "url": "google.ca"
    },
    {
        "id": 39,
        "url": "bing.com"
    },
    {
        "id": 40,
        "url": "twitch.tv"
    },
    {
        "id": 41,
        "url": "t.co"
    },
    {
        "id": 42,
        "url": "xvideos.com"
    },
    {
        "id": 43,
        "url": "ebay.com"
    },
    {
        "id": 44,
        "url": "alipay.com"
    },
    {
        "id": 45,
        "url": "imgur.com"
    },
    {
        "id": 46,
        "url": "msn.com"
    },
    {
        "id": 47,
        "url": "ok.ru"
    },
    {
        "id": 48,
        "url": "wordpress.com"
    },
    {
        "id": 49,
        "url": "office.com"
    },
    {
        "id": 50,
        "url": "microsoft.com"
    },
    {
        "id": 51,
        "url": "mail.ru"
    },
    {
        "id": 52,
        "url": "aliexpress.com"
    },
    {
        "id": 53,
        "url": "livejasmin.com"
    },
    {
        "id": 54,
        "url": "hao123.com"
    },
    {
        "id": 55,
        "url": "tumblr.com"
    },
    {
        "id": 56,
        "url": "microsoftonline.com"
    },
    {
        "id": 57,
        "url": "imdb.com"
    },
    {
        "id": 58,
        "url": "blogspot.com"
    },
    {
        "id": 59,
        "url": "apple.com"
    },
    {
        "id": 60,
        "url": "csdn.net"
    },
    {
        "id": 61,
        "url": "google.com.au"
    },
    {
        "id": 62,
        "url": "stackoverflow.com"
    },
    {
        "id": 63,
        "url": "google.com.tr"
    },
    {
        "id": 64,
        "url": "wikia.com"
    },
    {
        "id": 65,
        "url": "amazon.co.jp"
    },
    {
        "id": 66,
        "url": "google.com.tw"
    },
    {
        "id": 67,
        "url": "paypal.com"
    },
    {
        "id": 68,
        "url": "github.com"
    },
    {
        "id": 69,
        "url": "whatsapp.com"
    },
    {
        "id": 70,
        "url": "detail.tmall.com"
    },
    {
        "id": 71,
        "url": "google.co.id"
    },
    {
        "id": 72,
        "url": "popads.net"
    },
    {
        "id": 73,
        "url": "google.pl"
    },
    {
        "id": 74,
        "url": "xhamster.com"
    },
    {
        "id": 75,
        "url": "pinterest.com"
    },
    {
        "id": 76,
        "url": "espn.com"
    },
    {
        "id": 77,
        "url": "adobe.com"
    },
    {
        "id": 78,
        "url": "amazon.in"
    },
    {
        "id": 79,
        "url": "coccoc.com"
    },
    {
        "id": 80,
        "url": "deloton.com"
    },
    {
        "id": 81,
        "url": "google.com.ar"
    },
    {
        "id": 82,
        "url": "diply.com"
    },
    {
        "id": 83,
        "url": "googleusercontent.com"
    },
    {
        "id": 84,
        "url": "dropbox.com"
    },
    {
        "id": 85,
        "url": "mozilla.org"
    },
    {
        "id": 86,
        "url": "amazon.de"
    },
    {
        "id": 87,
        "url": "bongacams.com"
    },
    {
        "id": 88,
        "url": "google.com.ua"
    },
    {
        "id": 89,
        "url": "tianya.cn"
    },
    {
        "id": 90,
        "url": "so.com"
    },
    {
        "id": 91,
        "url": "txxx.com"
    },
    {
        "id": 92,
        "url": "nicovideo.jp"
    },
    {
        "id": 93,
        "url": "xnxx.com"
    },
    {
        "id": 94,
        "url": "savefrom.net"
    },
    {
        "id": 95,
        "url": "google.com.pk"
    },
    {
        "id": 96,
        "url": "amazon.co.uk"
    },
    {
        "id": 97,
        "url": "uptodown.com"
    },
    {
        "id": 98,
        "url": "pixnet.net"
    },
    {
        "id": 99,
        "url": "bbc.com"
    },
    {
        "id": 100,
        "url": "bbc.co.uk"
    },
    {
        "id": 101,
        "url": "soso.com"
    },
    {
        "id": 102,
        "url": "google.com.eg"
    },
    {
        "id": 103,
        "url": "cnn.com"
    },
    {
        "id": 104,
        "url": "thepiratebay.org"
    },
    {
        "id": 105,
        "url": "craigslist.org"
    },
    {
        "id": 106,
        "url": "google.com.sa"
    },
    {
        "id": 107,
        "url": "hicpm5.com"
    },
    {
        "id": 108,
        "url": "google.co.th"
    },
    {
        "id": 109,
        "url": "rakuten.co.jp"
    },
    {
        "id": 110,
        "url": "ask.com"
    },
    {
        "id": 111,
        "url": "amazonaws.com"
    },
    {
        "id": 112,
        "url": "soundcloud.com"
    },
    {
        "id": 113,
        "url": "nytimes.com"
    },
    {
        "id": 114,
        "url": "google.nl"
    },
    {
        "id": 115,
        "url": "google.co.ve"
    },
    {
        "id": 116,
        "url": "tribunnews.com"
    },
    {
        "id": 117,
        "url": "google.co.za"
    },
    {
        "id": 118,
        "url": "onlinesbi.com"
    },
    {
        "id": 119,
        "url": "naver.com"
    },
    {
        "id": 120,
        "url": "booking.com"
    },
    {
        "id": 121,
        "url": "salesforce.com"
    },
    {
        "id": 122,
        "url": "thestartmagazine.com"
    },
    {
        "id": 123,
        "url": "xinhuanet.com"
    },
    {
        "id": 124,
        "url": "stackexchange.com"
    },
    {
        "id": 125,
        "url": "gmw.cn"
    },
    {
        "id": 126,
        "url": "detik.com"
    },
    {
        "id": 127,
        "url": "theguardian.com"
    },
    {
        "id": 128,
        "url": "dailymotion.com"
    }
];

const LIST_SITES = `LIST_SITES`;

const listSites = (sites) => ({type: LIST_SITES, sites});

let initial = {
  sites: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case LIST_SITES:
      return Object.assign({}, state, {sites: action.sites});
    default:
      return state;
  }
};

export default reducer;

export const fetchSites = () => dispatch => {
  dispatch(listSites(SITES));
};