const statesData = [
  { slug: 'alabama', name: 'Alabama', summary: 'Alabama requires AEDs in schools and public facilities.' },
  { slug: 'alaska', name: 'Alaska', summary: 'Alaska encourages AED deployment in public spaces.' },
  { slug: 'arizona', name: 'Arizona', summary: 'Arizona mandates AEDs in schools and athletic facilities.' },
  { slug: 'arkansas', name: 'Arkansas', summary: 'Arkansas requires AEDs in health clubs and schools.' },
  { slug: 'california', name: 'California', summary: 'California has comprehensive AED requirements for public venues.' },
  { slug: 'colorado', name: 'Colorado', summary: 'Colorado requires AEDs in schools and fitness centers.' },
  { slug: 'connecticut', name: 'Connecticut', summary: 'Connecticut mandates AEDs in schools and health clubs.' },
  { slug: 'delaware', name: 'Delaware', summary: 'Delaware requires AEDs in public buildings.' },
  { slug: 'florida', name: 'Florida', summary: 'Florida has extensive AED laws for schools and public facilities.' },
  { slug: 'georgia', name: 'Georgia', summary: 'Georgia requires AEDs in schools and fitness centers.' },
  { slug: 'hawaii', name: 'Hawaii', summary: 'Hawaii mandates AEDs in public facilities.' },
  { slug: 'idaho', name: 'Idaho', summary: 'Idaho encourages AED placement in schools.' },
  { slug: 'illinois', name: 'Illinois', summary: 'Illinois requires AEDs in schools and health clubs.' },
  { slug: 'indiana', name: 'Indiana', summary: 'Indiana mandates AEDs in schools and public facilities.' },
  { slug: 'iowa', name: 'Iowa', summary: 'Iowa requires AEDs in schools and fitness centers.' },
  { slug: 'kansas', name: 'Kansas', summary: 'Kansas encourages AED deployment in public spaces.' },
  { slug: 'kentucky', name: 'Kentucky', summary: 'Kentucky requires AEDs in schools and athletic facilities.' },
  { slug: 'louisiana', name: 'Louisiana', summary: 'Louisiana mandates AEDs in schools and health clubs.' },
  { slug: 'maine', name: 'Maine', summary: 'Maine requires AEDs in public facilities.' },
  { slug: 'maryland', name: 'Maryland', summary: 'Maryland has comprehensive AED requirements.' },
  { slug: 'massachusetts', name: 'Massachusetts', summary: 'Massachusetts requires AEDs in schools and health clubs.' },
  { slug: 'michigan', name: 'Michigan', summary: 'Michigan mandates AEDs in schools and fitness centers.' },
  { slug: 'minnesota', name: 'Minnesota', summary: 'Minnesota requires AEDs in public facilities.' },
  { slug: 'mississippi', name: 'Mississippi', summary: 'Mississippi encourages AED placement in schools.' },
  { slug: 'missouri', name: 'Missouri', summary: 'Missouri requires AEDs in schools and health clubs.' },
  { slug: 'montana', name: 'Montana', summary: 'Montana encourages AED deployment in public spaces.' },
  { slug: 'nebraska', name: 'Nebraska', summary: 'Nebraska requires AEDs in schools.' },
  { slug: 'nevada', name: 'Nevada', summary: 'Nevada mandates AEDs in schools and public facilities.' },
  { slug: 'new-hampshire', name: 'New Hampshire', summary: 'New Hampshire requires AEDs in schools.' },
  { slug: 'new-jersey', name: 'New Jersey', summary: 'New Jersey has comprehensive AED requirements.' },
  { slug: 'new-mexico', name: 'New Mexico', summary: 'New Mexico encourages AED placement in schools.' },
  { slug: 'new-york', name: 'New York', summary: 'New York requires AEDs in schools and public facilities.' },
  { slug: 'north-carolina', name: 'North Carolina', summary: 'North Carolina mandates AEDs in schools and health clubs.' },
  { slug: 'north-dakota', name: 'North Dakota', summary: 'North Dakota encourages AED deployment.' },
  { slug: 'ohio', name: 'Ohio', summary: 'Ohio requires AEDs in schools and fitness centers.' },
  { slug: 'oklahoma', name: 'Oklahoma', summary: 'Oklahoma mandates AEDs in schools.' },
  { slug: 'oregon', name: 'Oregon', summary: 'Oregon requires AEDs in public facilities.' },
  { slug: 'pennsylvania', name: 'Pennsylvania', summary: 'Pennsylvania has comprehensive AED requirements.' },
  { slug: 'rhode-island', name: 'Rhode Island', summary: 'Rhode Island requires AEDs in schools and health clubs.' },
  { slug: 'south-carolina', name: 'South Carolina', summary: 'South Carolina mandates AEDs in schools.' },
  { slug: 'south-dakota', name: 'South Dakota', summary: 'South Dakota encourages AED placement.' },
  { slug: 'tennessee', name: 'Tennessee', summary: 'Tennessee requires AEDs in schools and public facilities.' },
  { slug: 'texas', name: 'Texas', summary: 'Texas has comprehensive AED requirements.' },
  { slug: 'utah', name: 'Utah', summary: 'Utah requires AEDs in schools and fitness centers.' },
  { slug: 'vermont', name: 'Vermont', summary: 'Vermont mandates AEDs in schools.' },
  { slug: 'virginia', name: 'Virginia', summary: 'Virginia requires AEDs in schools and public facilities.' },
  { slug: 'washington', name: 'Washington', summary: 'Washington has comprehensive AED requirements.' },
  { slug: 'west-virginia', name: 'West Virginia', summary: 'West Virginia requires AEDs in schools.' },
  { slug: 'wisconsin', name: 'Wisconsin', summary: 'Wisconsin mandates AEDs in schools and health clubs.' },
  { slug: 'wyoming', name: 'Wyoming', summary: 'Wyoming encourages AED deployment.' }
];

const stateDetails = {
  'alabama': {
    slug: 'alabama',
    name: 'Alabama',
    lawSummary: 'Alabama Code § 34-27A-1 et seq.',
    content: `Alabama requires all public and private schools to have at least one automated external defibrillator (AED) on site. The law also provides Good Samaritan protection for individuals who use an AED in an emergency situation.

Key Requirements:
• Schools must have at least one AED accessible during normal school hours
• AEDs must be maintained and tested according to manufacturer guidelines
• School personnel should be trained in CPR and AED use
• Good Samaritan immunity protects rescuers who use AEDs in good faith

Alabama also encourages, but does not mandate, AED placement in other public facilities including fitness centers, sports venues, and government buildings. The state provides civil immunity for AED owners and users who act in good faith.`
  },
  'california': {
    slug: 'california',
    name: 'California',
    lawSummary: 'California Health and Safety Code § 1797.196',
    content: `California has some of the most comprehensive AED laws in the nation. The state requires AEDs in health studios, dental offices, and other specified locations.

Key Requirements:
• Health studios with 500+ members must have AEDs
• Dental offices performing general anesthesia must have AEDs
• Public and private schools are encouraged to have AEDs
• AED owners must register devices with local EMS
• Expected AED users must complete training
• AEDs must be maintained according to manufacturer guidelines

California provides Good Samaritan protection for individuals who use AEDs in emergency situations, as well as immunity for AED owners who comply with legal requirements.`
  },
  'texas': {
    slug: 'texas',
    name: 'Texas',
    lawSummary: 'Texas Health and Safety Code Chapter 779',
    content: `Texas requires AEDs in various public settings and provides comprehensive liability protection for users and owners.

Key Requirements:
• All public and private schools must have AED implementation plans
• Youth sports organizations must have emergency action plans including AED access
• Health clubs and fitness facilities are required to have AEDs
• AED locations must be registered with the Department of State Health Services
• Personnel must be trained in CPR and AED use
• AEDs must be properly maintained and regularly inspected

Texas provides broad immunity from civil liability for persons who acquire, possess, or use AEDs in compliance with state law.`
  },
  'new-york': {
    slug: 'new-york',
    name: 'New York',
    lawSummary: 'New York Public Health Law § 3000-b',
    content: `New York requires AEDs in various public facilities and provides Good Samaritan protection for users.

Key Requirements:
• Public schools must have AEDs readily accessible
• Health clubs must have AEDs on premises
• Golf courses are required to have AEDs
• AED owners must maintain devices according to manufacturer specifications
• Training in CPR and AED use is required for expected users
• AEDs must be registered with the Department of Health

New York provides liability protection for both AED users and owners who act in good faith and in compliance with state requirements.`
  },
  'florida': {
    slug: 'florida',
    name: 'Florida',
    lawSummary: 'Florida Statutes § 768.1325',
    content: `Florida has extensive AED requirements for schools, health clubs, and other public facilities.

Key Requirements:
• All public schools must have AEDs on campus
• Health clubs and fitness facilities must have AEDs
• Athletic facilities must have emergency action plans including AED access
• AED owners must notify local EMS of device locations
• Expected users must receive training in CPR and AED operation
• Regular maintenance and testing is required

Florida provides immunity from civil liability for persons who use or attempt to use AEDs in emergency situations, as well as for owners who comply with legal requirements.`
  }
};

export const getStatesList = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(statesData);
    }, 300);
  });
};

export const getStateDetails = async (slug) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const details = stateDetails[slug];
      if (details) {
        resolve(details);
      } else {
        const state = statesData.find(s => s.slug === slug);
        if (state) {
          resolve({
            slug: state.slug,
            name: state.name,
            lawSummary: 'State AED legislation information',
            content: `${state.name} ${state.summary}

Detailed information about ${state.name}'s AED laws and requirements may be available through your local emergency medical services or state health department.

General provisions typically include:
• Requirements for AED placement in specific types of facilities
• Training requirements for expected AED users
• Maintenance and inspection protocols
• Good Samaritan protections for rescuers
• Liability immunity for facility owners who comply with regulations

For the most current and complete information, please consult with legal counsel or contact your state's Department of Health.`
          });
        } else {
          reject(new Error('State not found'));
        }
      }
    }, 300);
  });
};
