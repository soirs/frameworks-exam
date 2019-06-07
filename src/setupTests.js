import React from 'react';
// react-testing-library renders your components to document.body, // this will ensure they're removed after each test.
import '@testing-library/react';
// this adds jest-dom's custom matchers

import 'jest-dom/extend-expect';

// some global test data for all your tests
global.TestData = [
  {
    _id: '5cf88435e374ef1306219d8e',
    author: 'Danske Bank',
    title: 'Visionær leder til IT og Digitalisering i Albertslund Kommune',
    category: 'Frontend',
    location: 'Midtjylland',
    description:
      'Albertslund Kommune søger en visionær leder med organisatorisk forståelse og digitale ambitioner. Du skal videreføre vores cloud-baserede digitaliseringsstrategi, styrke vores it-drift, markere enheden på tværs af organisationen og fastholde fokus på den digitale udvikling.\nVi søger en ambitiøs leder, som:\n\nKan sætte strategisk retning og sikre en stabil it-driftsunderstøttelse i organisationen både på det administrative og pædagogiske område.\nHar gennemslagskraft og kan formidle komplekse problemstillinger på alle organisatoriske niveauer\nHar fokus på faglig kvalitet, forretningsunderstøttelse og et godt arbejdsmiljø gennem tillidsfulde samarbejdsrelationer med øje på opgaven.\n \nDu har en relevant akademisk baggrund og nogle års erfaring med ledelse i en politisk styret organisation.\n\nVi stiller store krav og har høje forventninger til dig – til gengæld tilbyder vi et spændende job i en ambitiøs kommune for børnene, det grønne og fællesskabet. Vi har en dynamisk arbejdsplads med en flad ledelsesstruktur.',
    views: 1,
    createdAt: '2019-06-06T03:10:45.215Z',
    __v: 0,
  },
  {
    _id: '5cf8845ce374ef1306219d8f',
    author: 'Danske Bank',
    title: 'Web developer',
    category: 'Frontend',
    location: 'Nordjylland',
    description:
      'Nordija is looking for a software developer with iOS and web development experience to join our Device Team in our offices in Kgs. Lyngby.',
    views: 1,
    createdAt: '2019-06-06T03:11:24.491Z',
    __v: 0,
  },
  {
    _id: '5cf88473e374ef1306219d90',
    author: 'Danske Bank',
    title: 'Innovativ frontend udvikler ',
    category: 'Frontend',
    location: 'Sjælland',
    description:
      'Er du en kreativ ildsjæl der brænder for design og user experience? ',
    views: 1,
    createdAt: '2019-06-06T03:11:47.778Z',
    __v: 0,
  },
  {
    _id: '5cf88484e374ef1306219d91',
    author: 'Danske Bank',
    title: 'Front end web developer- Internship ',
    category: 'Frontend',
    location: 'Syddanmark',
    description:
      'We are focusing on developing smarter sensor solutions with smartphone integration. ',
    views: 1,
    createdAt: '2019-06-06T03:12:04.013Z',
    __v: 0,
  },
  {
    _id: '5cf8849ae374ef1306219d92',
    author: 'Danske Bank',
    title: 'Web developer ',
    category: 'Frontend',
    location: 'Hovedstaden',
    description:
      'We are looking for a highly-motivated midweight, full-stack web developer to join Impactr team. ',
    views: 1,
    createdAt: '2019-06-06T03:12:26.052Z',
    __v: 0,
  },
  {
    _id: '5cf884afe374ef1306219d93',
    author: 'Danske Bank',
    title: 'Web developer ',
    category: 'Frontend',
    location: 'Nordjylland',
    description:
      'We are looking for a highly-motivated midweight, full-stack web developer to join Impactr team. \nWe are looking for a highly-motivated midweight, full-stack web developer to join Impactr team. ',
    views: 1,
    createdAt: '2019-06-06T03:12:47.486Z',
    __v: 0,
  },
  {
    _id: '5cf88ad326026a00170a34bc',
    author: 'Danske Bank',
    title: 'Doctor',
    category: 'Healthcare',
    location: 'Hovedstaden',
    description:
      'Are you a doctor from abroad seeking job as a doctor in Denmark? Are you a doctor from outside the European Union or a non-Nordic country, you can find ',
    views: 1,
    createdAt: '2019-06-06T03:39:00.003Z',
    __v: 0,
  },
  {
    _id: '5cfa41af83854d36ae1aacf5',
    author: 'Danske Bank',
    title: 'Lawyer',
    category: 'Law',
    location: 'Hovedstaden',
    description: 'Job 123',
    views: 1,
    createdAt: '2019-06-07T10:51:27.880Z',
    __v: 0,
  },
  {
    _id: '5cfa4e532cd3e30197b7027f',
    author: 'Danske Bank',
    title: 'Web developer ',
    category: 'Frontend',
    location: 'Syddanmark',
    description:
      'We are looking for a highly-motivated midweight, full-stack web developer to join Impactr team. ',
    views: 1,
    createdAt: '2019-06-06T03:12:26.052Z',
    __v: 0,
  },
  {
    _id: '5cfa4e5a2cd3e30197b70280',
    author: 'Danske Bank',
    title: 'Innovativ frontend udvikler ',
    category: 'Frontend',
    location: 'Midtjylland',
    description:
      'Er du en kreativ ildsjæl der brænder for design og user experience? ',
    views: 1,
    createdAt: '2019-06-06T03:11:47.778Z',
    __v: 0,
  },
];
