import easyRegistration from '../assets/HowItWorksImage/Easy-Registration.png';
import dataCollection from '../assets/HowItWorksImage/Real-Time-Data-Collection-purple.png';
import instantAttendance from '../assets/HowItWorksImage/Instant-Attendance.png';
import {
  faPeopleGroup,
  faUserTie,
  faUser,
  faChurch,
  faCubes,
  faChartSimple,
  faLayerGroup,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const ADMIN = {
  username: 'eyezyc',
  password: 23432,
};

const howItWorks = [
  {
    id: 1,
    heading: 'Easy Registration',
    text: 'Members can register through a shared form link or be added manually by an admin. No stress, no confusion — just straightforward data entry.',
    image: easyRegistration,
  },
  {
    id: 2,
    heading: 'Real-Time Data Collection',
    text: 'Once submitted, all member details are automatically recorded and displayed in the admin dashboard — no spreadsheets or manual input required',
    image: dataCollection,
  },
  {
    id: 3,
    heading: 'Instant Attendance Insights',
    text: 'View attendance numbers by department, gender, location, or custom categories. Get accurate data at a glance.',
    image: instantAttendance,
  },
];

const dashboardData = [
  { id: 1, icon: faPeopleGroup, number: 0.0, name: 'Total' },
  { id: 2, icon: faUserTie, number: 0.0, name: 'Boys' },
  { id: 3, icon: faUser, number: 0.0, name: 'Girls' },
  { id: 4, icon: faChurch, number: 0.0, name: 'Zones' },
];

const dashboardNav = [
  {
    id: 1,
    icon: faCubes,
    iconName: 'Dashboard',
  },
  {
    id: 2,
    icon: faPeopleGroup,
    iconName: 'Attendance',
  },

  {
    id: 3,
    icon: faChartSimple,
    iconName: 'Leaders',
  },
  {
    id: 4,
    icon: faLayerGroup,
    iconName: 'Report',
  },
];

const statsCards = [
  {
    id: 1,
    icon: faUsers,
    number: 0.0,
    message: 'Total',
    tint: '#fd5200',
    shade: '#ffeee6',
  },
  {
    id: 2,
    icon: faUserTie,
    number: 0.0,
    message: 'Men',
    tint: '#89043d',
    shade: '#f3e6ec',
  },
  {
    id: 1,
    icon: faUser,
    number: 0.0,
    message: 'Women',
    tint: '#543412',
    shade: '#eeebe7',
  },
  {
    id: 1,
    icon: faChurch,
    number: 0.0,
    message: 'Zones',
    tint: '#34d1bf',
    shade: '#ebfaf9',
  },
];

const tableData = [
  'Fullname',
  'Gender',
  'Kingschat Username',
  'Zone',
  'Email',
  'Phone Number',
];

const persons = [
  {
    name: 'Isaac Peter',
    gender: 'Male',
    kc: 'eyezyc',
    email: 'chydexxzy2002@gmail.com',
    role: 'Admin',
    zone: 'CELVZ',
    number: 8064962125,
  },
  {
    name: 'Isaac Peter',
    gender: 'Male',
    kc: 'eyezyc',
    email: 'chydexxzy2002@gmail.com',
    role: 'Admin',
    zone: 'CELVZ',
    number: 8064962125,
  },
  {
    name: 'Isaac Peter',
    gender: 'Male',
    kc: 'eyezyc',
    email: 'chydexxzy2002@gmail.com',
    role: 'Admin',
    zone: 'CELVZ',
    number: 8064962125,
  },
];

export {
  howItWorks,
  dashboardData,
  dashboardNav,
  statsCards,
  tableData,
  persons,
  ADMIN,
};
