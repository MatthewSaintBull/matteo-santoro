// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const jobs = {
  jobs: [
    {
      companyName: 'SAVI',
      companyLogo: '/images/savi_logo.jpg',
      role: 'Software Engineer',
      description: `As a member of the international team, using nodeJS, aws, vueJS and reactJS I usually develop and mantain with the other colleagues, the
    tool related to the offers, coupons and cashbacks, implementing tests and checking code coverage of the platform`,
      technologyStack: [
        'ReactJS',
        'VueJS',
        'NodeJS',
        'Selenium',
        'Docker'
      ],
      workingDateRange: 'jun 2022 - current'
    },
    {
      companyName: 'SHOPFULLY',
      companyLogo: '/images/shopfully_logo.jpg',
      role: 'Full Stack Developer',
      description: `As a member of the 'Platform Team', using Nodejs, php and ReactJS, I developed internal projects that aim to enhance the experience for our 
      colleagues, such as the Campaign Manager; A tool used by the marketing team to create and handle the campaigns in Doveconviene`,
      technologyStack: [
        'ReactJS',
        'NodeJS',
        'AWS',
        'Selenium',
        'PHP'
      ],
      workingDateRange: 'jun 2021 - jun 2022'
    },
    {
      companyName: 'YOOX Net-A-Porter',
      companyLogo: '/images/yoox_logo.jpg',
      role: 'AWS Developer',
      description: `My Role in Yoox Net-A-Porter was to setup and create all the Special Campaigns during the year, such as Christmas campaign or Black Friday.
      Using Jquery, ReactJS and NodeJS, I had to improve and refactor the content manager software, taking advantage of my skills and ceritifcation as an AWS Developer`,
      technologyStack: [
        'ReactJS',
        'NodeJS',
        'AWS',
        'JQuery',
        'Tailwind',
        'Javascript (Vanilla)'
      ],
      workingDateRange: 'sep 2019 - jun 2021'
    },
    {
      companyName: 'FINCONS Group',
      companyLogo: '/images/fincons_logo.jpg',
      role: 'Developer',
      description: `As a Junior Developer Consultant I worked on projects for global important companies using JAVA + AWS. There I’ve obtained the AWS Developer Associate 
      certification and I’ve started my career as Cloud Developer. 
      `,
      technologyStack: [
        'JAVA',
        'Apache Camel',
        'AWS',
        'Selenium',
        'PHP'
      ],
      workingDateRange: 'mar 2018 - aug 2019'
    },
  ]
}

export default function handler(req, res) {
  res.status(200).json(jobs)
}
