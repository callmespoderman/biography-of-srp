import { SlideData } from '../types/presentation';

export const FULL_SPEECH_RAW = `Title: The Biography of a Place I Belong - Serampore

[Smile and look at the audience]

Good morning respected teachers and my dear friends.

Today, I am very happy to talk about the "Biography of a Place I Belong." That place is Serampore, a beautiful town in West Bengal. It is not just where my house is; it is a place with a wonderful story.

[Pause]

If Serampore were a person, its life story would be amazing. It sits quietly next to the grand Hooghly River. Many years ago, before India was free, Serampore was ruled by people from Denmark. Back then, they built beautiful buildings and quiet, wide roads. You can still see these old places today, like the famous St. Olav’s Church. Walking there makes you feel like you have traveled back in time.

[Pause]

My town is also a very important place for education. It is home to Serampore College. This college is more than two hundred years old and is one of the oldest in all of Asia! Also, the very first printing press in India was started right here in Serampore. Because of this, my town helped spread books and knowledge to the whole country long ago.

[Pause]

But Serampore is not just history in a textbook. It is full of life and joy today. We have the famous Mahesh Rath Yatra, which is a very old and grand chariot festival. During this time, the whole town is filled with lights, music, street food, and thousands of happy faces.

[Smile]

For me, the most special part of Serampore is the side of the river, which we call the ghat. In the evenings, you will find families and friends sitting by the water. We drink hot tea, feel the cool wind on our faces, and watch the small boats go by. It is so peaceful. Whenever I am stressed, sitting by the river makes me forget all my worries.

[Pause]

To end my speech, I want to say that Serampore is a perfect mix of the old and the new. It holds a great history, but it also gives me a warm and safe feeling every single day. That is the true biography of my town. It is a place I am proud to call my own.

Thank you everyone for listening to my story.`;

export const SLIDES: SlideData[] = [
  {
    id: 'slide-prologue',
    slideNumber: 1,
    chapter: 'Prologue',
    era: 'Hooghly River Valley, West Bengal',
    title: 'The Biography of a Place I Belong',
    subtitle: 'Serampore — Where Centuries of Memory Flow by the River',
    tagline: 'It is not just where my house is; it is a place with a wonderful story.',
    speechText: `[Smile and look at the audience]

Good morning respected teachers and my dear friends.

Today, I am very happy to talk about the "Biography of a Place I Belong." That place is Serampore, a beautiful town in West Bengal. It is not just where my house is; it is a place with a wonderful story.`,
    keyPoints: [
      'Welcome to teachers & friends with confident warmth',
      'Introducing the biographical metaphor: a town as a living person',
      'The sacred Hooghly River as the continuous heartbeat of Serampore',
    ],
    historicalHighlights: [
      {
        yearOrFact: 'Geographic Heart',
        description: 'Nestled on the western bank of the sacred Hooghly River in West Bengal',
      },
      {
        yearOrFact: 'Human Connection',
        description: 'Beyond bricks and stone—a place imbued with belonging, warmth and identity',
      },
      {
        yearOrFact: 'Living Legacy',
        description: 'A continuous chronicle spanning ancient festivals, Danish governors, and educational pioneers',
      },
    ],
    quoteSnippet: 'It is not just where my house is; it is a place with a wonderful story.',
    accentColor: '#D97706',
    bgGradient: 'from-stone-900 via-amber-950/40 to-stone-950',
    artId: 'cover',
    photoUrl: '/photos/slide1_serampore_river.jpg',
    photoCaption: 'The sacred Hooghly River quietly flowing alongside Serampore, West Bengal',
    photoCredit: 'Real Photography · River Hooghly at Serampore',
    stageCues: ['Smile warmly', 'Make gentle eye contact across the room', 'Take a composed opening stance'],
  },
  {
    id: 'slide-danish',
    slideNumber: 2,
    chapter: 'Chapter I: Colonial Echoes',
    era: '1755 – 1845 · Frederiksnagore',
    title: 'A Person with an Amazing Life Story',
    subtitle: 'Danish Architecture, Grand Avenues & St. Olav’s Church',
    tagline: 'Walking there makes you feel like you have traveled back in time.',
    speechText: `[Pause]

If Serampore were a person, its life story would be amazing. It sits quietly next to the grand Hooghly River. Many years ago, before India was free, Serampore was ruled by people from Denmark. Back then, they built beautiful buildings and quiet, wide roads. You can still see these old places today, like the famous St. Olav’s Church. Walking there makes you feel like you have traveled back in time.`,
    keyPoints: [
      'Personifying the town as a seasoned storyteller',
      'Unique Danish East India history (Frederiksnagore, 1755–1845)',
      'St. Olav’s Church (1806) and the feeling of time travel',
    ],
    historicalHighlights: [
      {
        yearOrFact: '1755 AD',
        description: 'Danish settlement founded and named Frederiksnagore after King Frederick V',
      },
      {
        yearOrFact: '1806 AD',
        description: 'St. Olav’s Church erected with iconic bell tower and royal monogram',
      },
      {
        yearOrFact: 'Architectural Charm',
        description: 'Wide shaded avenues, classical porticos, and the restored Danish Tavern',
      },
    ],
    quoteSnippet: 'Walking there makes you feel like you have traveled back in time.',
    accentColor: '#B45309',
    bgGradient: 'from-stone-900 via-stone-900 to-amber-950/30',
    artId: 'danish',
    photoUrl: '/photos/slide2_danish_church.jpg',
    photoCaption: 'Historic St. Olav’s Church (1806) with restored Danish neoclassical portico',
    photoCredit: 'UNESCO Asia-Pacific Heritage Award Recipient · Serampore',
    stageCues: ['Brief 2-second pause after opening slide', 'Gesture outward when describing the grand river', 'Speak with quiet wonder about traveling back in time'],
  },
  {
    id: 'slide-college',
    slideNumber: 3,
    chapter: 'Chapter II: The Enlightenment',
    era: '1800 – 1818 · Pioneer Press & Academia',
    title: 'The Cradle of Education & Printing',
    subtitle: 'Serampore College & Asia’s Historic Movable Type Awakening',
    tagline: 'My town helped spread books and knowledge to the whole country long ago.',
    speechText: `[Pause]

My town is also a very important place for education. It is home to Serampore College. This college is more than two hundred years old and is one of the oldest in all of Asia! Also, the very first printing press in India was started right here in Serampore. Because of this, my town helped spread books and knowledge to the whole country long ago.`,
    keyPoints: [
      'Serampore College founded in 1818 — over 200 years of academic distinction',
      'One of Asia’s oldest degree-granting universities',
      'Serampore Mission Press revolutionized vernacular printing in India',
    ],
    historicalHighlights: [
      {
        yearOrFact: '1800 AD',
        description: 'The historic press casts metal movable type fonts in Bengali and Asian languages',
      },
      {
        yearOrFact: '1818 AD',
        description: 'William Carey, Joshua Marshman, and William Ward establish Serampore College',
      },
      {
        yearOrFact: '1827 Royal Charter',
        description: 'King Frederick VI of Denmark grants Royal Charter conferring university degrees',
      },
    ],
    quoteSnippet: 'My town helped spread books and knowledge to the whole country long ago.',
    accentColor: '#0284C7',
    bgGradient: 'from-stone-900 via-sky-950/30 to-stone-950',
    artId: 'college',
    photoUrl: '/photos/slide3_serampore_college.jpg',
    photoCaption: 'Serampore College main campus building (est. 1818) with its iconic Ionic colonnade',
    photoCredit: 'Real Photography · Serampore College, West Bengal',
    stageCues: ['Pause before introducing education', 'Clear vocal emphasis on "more than two hundred years old"', 'Show genuine pride when speaking of spreading knowledge'],
  },
  {
    id: 'slide-festival',
    slideNumber: 4,
    chapter: 'Chapter III: Living Celebration',
    era: '1396 CE – Present · Over 625 Years',
    title: 'Full of Life: The Mahesh Rath Yatra',
    subtitle: 'India’s Second Oldest Chariot Festival, Lights & Joyful Crowds',
    tagline: 'Serampore is not just history in a textbook. It is full of life and joy today.',
    speechText: `[Pause]

But Serampore is not just history in a textbook. It is full of life and joy today. We have the famous Mahesh Rath Yatra, which is a very old and grand chariot festival. During this time, the whole town is filled with lights, music, street food, and thousands of happy faces.`,
    keyPoints: [
      'Transition from solemn history to pulsating modern life',
      'Mahesh Rath Yatra celebrated continuously since 1396 CE',
      'Sensory vibrancy: glittering illumination, music, street culinary delights',
    ],
    historicalHighlights: [
      {
        yearOrFact: '1396 CE',
        description: 'Second oldest and largest Rath Yatra in the entire world, next only to Puri',
      },
      {
        yearOrFact: 'Towering Chariot',
        description: 'Legendary multi-tiered wooden Ratha pulled by thousands of devoted hands',
      },
      {
        yearOrFact: 'The Historic Mela',
        description: 'A month-long cultural fair with sweet jilipi, earthen crafts, and festive joy',
      },
    ],
    quoteSnippet: 'The whole town is filled with lights, music, street food, and thousands of happy faces.',
    accentColor: '#EA580C',
    bgGradient: 'from-stone-900 via-orange-950/40 to-stone-950',
    artId: 'festival',
    photoUrl: '/photos/slide4_mahesh_rath.jpg',
    photoCaption: 'The towering sacred chariot of Mahesh Rath Yatra surrounded by festive crowds',
    photoCredit: 'Documentary Photo · Mahesh Rath Yatra, Serampore',
    stageCues: ['Pause to let the mood shift to vibrancy', 'Warm smile and higher vocal energy', 'Engage listeners with the sensory joy of street food and lights'],
  },
  {
    id: 'slide-ghat',
    slideNumber: 5,
    chapter: 'Chapter IV: Soul & Solace',
    era: 'Twilight by the Hooghly',
    title: 'Evenings by the River Ghat',
    subtitle: 'Steaming Tea, Cool River Winds & Drifting Wooden Dinghies',
    tagline: 'Whenever I am stressed, sitting by the river makes me forget all my worries.',
    speechText: `[Smile]

For me, the most special part of Serampore is the side of the river, which we call the ghat. In the evenings, you will find families and friends sitting by the water. We drink hot tea, feel the cool wind on our faces, and watch the small boats go by. It is so peaceful. Whenever I am stressed, sitting by the river makes me forget all my worries.`,
    keyPoints: [
      'The intimate personal sanctuary: the river ghat',
      'The quintessential Bengali evening: earthen cups of hot chai by the water',
      'Gentle therapeutic peace that washes away all daily stress',
    ],
    historicalHighlights: [
      {
        yearOrFact: 'The Riverfront Ghats',
        description: 'Ancient stone steps meeting the holy Hooghly, washed by gentle river tides',
      },
      {
        yearOrFact: 'Evening Cha Culture',
        description: 'Sharing hot cardamom chai in terracotta bhaanr (cups) with family and friends',
      },
      {
        yearOrFact: 'Quiet Solace',
        description: 'Gentle breezes and silhouetted dinghies provide calm mindfulness',
      },
    ],
    quoteSnippet: 'Whenever I am stressed, sitting by the river makes me forget all my worries.',
    accentColor: '#0D9488',
    bgGradient: 'from-stone-900 via-teal-950/30 to-stone-950',
    artId: 'ghat',
    photoUrl: '/photos/slide5_hooghly_sunset_ghat.jpg',
    photoCaption: 'Golden twilight reflections across the tranquil Hooghly River at the ghat',
    photoCredit: 'Documentary Photo · Sunset by the Hooghly, Bengal',
    stageCues: ['Soft, heartfelt smile before speaking', 'Lower vocal pace to reflect the quiet serenity of the river', 'Breathe gently and let the emotion of comfort resonate'],
  },
  {
    id: 'slide-epilogue',
    slideNumber: 6,
    chapter: 'Epilogue: Belonging',
    era: 'Past, Present & Future',
    title: 'A Perfect Mix of Old and New',
    subtitle: 'The True Biography — A Place I Am Proud to Call My Own',
    tagline: 'It holds a great history, but it also gives me a warm and safe feeling every single day.',
    speechText: `[Pause]

To end my speech, I want to say that Serampore is a perfect mix of the old and the new. It holds a great history, but it also gives me a warm and safe feeling every single day. That is the true biography of my town. It is a place I am proud to call my own.

Thank you everyone for listening to my story.`,
    keyPoints: [
      'Synthesis: Harmony between monumental history and everyday intimacy',
      'Final resolution of the biography metaphor: identity, warmth, security',
      'Heartfelt gratitude and confident closing to the audience',
    ],
    historicalHighlights: [
      {
        yearOrFact: 'Duality',
        description: 'Centuries-old heritage seamlessly interwoven into modern Bengali life',
      },
      {
        yearOrFact: 'Home & Belonging',
        description: 'More than a coordinate on a map—a sanctuary of memory and growth',
      },
      {
        yearOrFact: 'Pride of Origin',
        description: 'Carrying the living story of Serampore wherever future journeys lead',
      },
    ],
    quoteSnippet: 'It holds a great history, but it also gives me a warm and safe feeling every single day.',
    accentColor: '#F59E0B',
    bgGradient: 'from-stone-900 via-amber-950/50 to-stone-950',
    artId: 'epilogue',
    photoUrl: '/photos/slide6_serampore_heritage.jpg',
    photoCaption: 'Historic Serampore architectural heritage preserving centuries of memory',
    photoCredit: 'Architectural Heritage Photo · Serampore, West Bengal',
    stageCues: ['Meaningful pause before the closing synthesis', 'Speak with conviction: "a place I am proud to call my own"', 'Broad, appreciative smile for "Thank you everyone for listening"'],
  },
];
