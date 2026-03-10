import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    tagline: 'Connecting Talent to Opportunity',
    description: 'We help organizations identify, attract, and onboard the right talent that aligns with their business goals and culture.',
    icon: 'users',
    features: [
      'Recruitment and talent sourcing',
      'Candidate screening and assessment',
      'Industry-specific talent placement',
      'Workforce planning support',
    ],
  },
  {
    id: 'employee-transport',
    title: 'Employee Transportation',
    tagline: 'Driving Safe and Reliable Commutes',
    description: 'We provide safe, reliable, and efficient transportation solutions that ensure employees commute comfortably and reach their workplaces on time.',
    icon: 'bus',
    features: [
      'Organized fleet and route management',
      'Safe and reliable transportation',
      'Timely pickup and drop services',
      'Employee-friendly transport coordination',
    ],
  },
  {
    id: 'employee-wellness',
    title: 'Employee Wellness & Support',
    tagline: 'Empowering Healthier Workplaces',
    description: 'Employee wellbeing plays a crucial role in productivity and workplace satisfaction. E2F supports organizations in fostering a positive and healthy work environment.',
    icon: 'heart',
    features: [
      'Employee support programs',
      'Engagement initiatives',
      'Workplace wellbeing solutions',
      'Organizational culture enhancement',
    ],
  },
];
