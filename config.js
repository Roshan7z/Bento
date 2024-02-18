// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Roshan',
  imageBackground: true,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '62b85223be8bc5db2fe3fe1ce5a1639e',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi
  defaultLatitude: '18.525009',
  defaultLongitude: '73.823029',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://accounts.google.com/b/0/AddMailService',
    },
    {
      id: '3',
      name: 'Movies',
      icon: 'film',
      link: 'https://movies4discord.xyz/',
    },
    {
      id: '4',
      name: 'Anime',
      icon: 'play',
      link: 'https://aniwatch.to/home',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'WhatsApp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'play',
  secondListIcon: 'briefcase',

  // Links
  lists: {
    firstList: [
      {
        name: 'AniList',
        link: 'https://anilist.co/user/Sulffur/',
      },
      {
        name: 'Movies and Shows',
        link: 'https://www.justchill.tv/home',
      },
    ],
    secondList: [
      {
        name: 'Python',
        link: 'https://replit.com/@NotRoshan/IP-assignment#main.py',
      },
      {
        name: 'Time Table',
        link: 'http://time-table.sicsr.ac.in/',
      },
      {
        name: 'SICSR Mail',
        link: 'https://mail.google.com/mail/u/2/#inbox',
      },
    ],
  },
};
