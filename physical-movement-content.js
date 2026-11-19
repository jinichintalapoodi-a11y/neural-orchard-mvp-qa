// Door order is left, right for each row. Only approved catalog entries are shown.
export const categories = [
  {
    id: 'strength', name: 'Strength for Tomorrow',
    description: 'Build strength for everyday activities such as getting up from a chair and carrying groceries.',
    safety: 'Choose a comfortable range and manageable resistance. Build up gradually. A seated option can help if standing is difficult.',
  },
  {
    id: 'balance', name: 'Balance Before You Need It',
    description: 'Practice steady standing and controlled weight shifts.',
    safety: 'Use a fixed countertop or railing for support. If you’ve had recent falls or feel unsteady even with support, ask a healthcare professional about suitable exercises.',
  },
  {
    id: 'coordination', name: 'Eyes, Head & Body',
    description: 'Explore how the eyes, head, and body work together during everyday movement.',
    safety: 'This collection is for general coordination. If head or eye movement brings on dizziness, stop and seek professional assessment before continuing. Clinical vestibular rehabilitation is tailored to the diagnosis.',
    creator: {
      name: 'Eligned Movement',
      channel: 'https://www.youtube.com/@elignedmovement',
    },
  },
  {
    id: 'space', name: 'Move Through Space',
    description: 'Practice stepping in different directions and moving through clear spaces with control.',
    safety: 'Clear the floor and use stable support within reach. Start with slow, small steps and choose a supported or seated option if turning feels unsafe.',
  },
  {
    id: 'aerobic', name: 'Heart & Brain Movement',
    description: 'Explore walking and other ways to build aerobic endurance.',
    safety: 'Start at a pace you can sustain comfortably. At moderate intensity, you can usually talk but would have trouble singing.',
  },
  {
    id: 'mobility', name: 'Flow & Restore',
    description: 'Explore gentle mobility, stretching, breathing, and recovery.',
    safety: 'Move within a comfortable range. Use a stable chair for seated options and stop if a movement causes pain or dizziness.',
  },
];

// Founder selection adds a candidate to the registry. Publication requires a recorded review.
export const exerciseCatalog = [
  {
    categoryId: 'coordination',
    label: 'Cerebellar Movement',
    chooserSummary: 'Practice balance and coordination.',
    why: 'Steadier steps matter on curbs and uneven paths. Regular balance and functional exercise programs reduce falls in older adults. This video’s effect on falls is unknown.',
    whySources: [
      { label: 'Cochrane review on falls', url: 'https://doi.org/10.1002/14651858.CD012424.pub2' },
    ],
    title: 'CEREBELLUM UPGRAGE',
    creator: 'Eligned Movement',
    url: 'https://www.youtube.com/watch?v=U1HsnRQyJ2U',
    description: 'A guided movement session with a focus on coordination.',
    reviewStatus: 'pending',
    review: null,
  },
  {
    categoryId: 'coordination',
    label: 'Neuro-Lymph Movement',
    chooserSummary: 'Loosen up with varied movements.',
    why: 'Choose this for a movement break after sitting. Lymphatic massage is a different technique. This routine has no demonstrated benefit for facial puffiness, lymph drainage, or younger-looking skin.',
    whySources: [
      { label: 'Cleveland Clinic on lymphatic massage', url: 'https://health.clevelandclinic.org/lymphatic-drainage-self-massage' },
      { label: 'CDC on moving more', url: 'https://www.cdc.gov/physical-activity-basics/benefits/index.html' },
    ],
    title: 'NEURO-LYMPH 2.0',
    creator: 'Eligned Movement',
    url: 'https://www.youtube.com/watch?v=lZSN2UET1GQ',
    description: 'A guided session for exploring a variety of movements.',
    reviewStatus: 'pending',
    review: null,
  },
  {
    categoryId: 'coordination',
    label: 'Movement for Hormonal Transitions',
    chooserSummary: 'Take a movement break on any cycle day.',
    why: 'Regular exercise may ease period cramps. No specific cycle day has been shown to make this session more helpful. Choose a day and pace that feel right for you.',
    whySources: [
      { label: 'Cochrane review on period cramps', url: 'https://www.cochrane.org/evidence/CD004142_exercise-dysmenorrhoea' },
      { label: 'Review of cycle phase and exercise', url: 'https://pubmed.ncbi.nlm.nih.gov/32661839/' },
    ],
    title: 'Neuro-movement for hormonal brains',
    creator: 'Eligned Movement',
    url: 'https://www.youtube.com/watch?v=BnnBt67tuqE',
    description: 'A guided movement session created with midlife in mind.',
    reviewStatus: 'pending',
    review: null,
  },
  {
    categoryId: 'coordination',
    label: 'Morning Brain & Body Wake-Up',
    chooserSummary: 'Ease into your morning with movement.',
    why: 'Choose this to get moving after waking up. A single bout of exercise can have a small short-term benefit for thinking in young adults. That research did not test this video or morning timing.',
    whySources: [
      { label: 'Review of exercise and short-term thinking', url: 'https://pubmed.ncbi.nlm.nih.gov/39242965/' },
    ],
    title: 'TURN YOUR BRAIN ON',
    creator: 'Eligned Movement',
    url: 'https://www.youtube.com/watch?v=Pju2LEAOG9w',
    description: 'A morning movement session that uses a ball.',
    reviewStatus: 'pending',
    review: null,
  },
];

export function approvedExercises(categoryId) {
  return exerciseCatalog.filter(({ categoryId: entryCategory, reviewStatus, review }) =>
    entryCategory === categoryId &&
    reviewStatus === 'approved' &&
    review?.reviewer?.trim() &&
    review.date?.trim() &&
    Array.isArray(review.limitations)
  );
}
