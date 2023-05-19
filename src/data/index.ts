type Team = {
  name: string;
  job: string;
  img: string;
};

type Events = {
  name: string;
  date: string;
  des: string;
  img: any;
};
type TeamMeb = {
  name: string;

  bio: string;
  image: any;
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

import teamMeb1 from '../image/1.png';
import teamMeb2 from '../image/2.png';
import teamMeb3 from '../image/3.png';

export const teamMobileData: TeamMeb[] = [
  {
    name: 'מתן דוברושין',
    bio: 'מנכ”ל העמותה',
    image: teamMeb1,
  },
  {
    name: 'אסף נקש',
    bio: 'יו”ר העמותה',
    image: teamMeb2,
  },
  {
    name: 'דני ברן',
    bio: 'נשיא העמותה',
    image: teamMeb3,
  },
];

import img1 from '../image/event1.png';
import img2 from '../image/event2.png';

export const EventsData: Events[] = [
  {
    name: 'כנס בוגרי מצו”ב 2023',
    date: '26 פברואר, 2023',
    des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
    img: img1,
  },
  {
    name: 'כנס בוגרי מצו”ב 2023',
    date: '26 פברואר, 2023',
    des: 'האירוע השנתי של בוגרי יחידת מצו”ב לשנת 2023. על הפרק הרצאות מבוגרי היחידההאירוע בחסות GotFriends ובנק לאומי',
    img: img2,
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
