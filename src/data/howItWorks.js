// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

import easyRegistration from '../assets/HowItWorksImage/Easy-Registration.png';
import dataCollection from '../assets/HowItWorksImage/Real-Time-Data-Collection-purple.png';
import instantAttendance from '../assets/HowItWorksImage/Instant-Attendance.png';

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

export default howItWorks;
