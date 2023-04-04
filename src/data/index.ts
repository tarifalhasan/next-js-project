type Team = {
  name: string;
  job: string;
  img: string;
};

type Events = {
  name: string;
  date: string;
  des: string;
  img: string;
};

export const teamMembers: Team[] = [
  {
    name: 'עמיתי בן-שושן',
    job: 'ועד מנהל',
    img: '/image/team/2.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/1.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/3.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/4.png',
  },
  {
    name: 'אור שוורץ',
    job: 'ועד מנהל',
    img: '/image/team/5.png',
  },
];
export const EventsData: Events[] = [
  {
    name: 'כנס בוגרי מצו”ב 2023',
    date: '26 פברואר, 2023',
    des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
    img: '/image/event1.png',
  },
  {
    name: 'כנס בוגרי מצו”ב 2023',
    date: '26 פברואר, 2023',
    des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
    img: '/image/event2.png',
  },
];

export const communityData: any[] = [
  '/image/community/1.png',
  '/image/community/2.png',
  '/image/community/3.png',
  ,
  '/image/community/4.png',
  ,
  '/image/community/5.png',
];
