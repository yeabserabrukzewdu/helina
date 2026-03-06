import { Course, Testimonial, BlogPost } from './types';

export const COURSES: Course[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    titleAmharic: 'ዲጂታል ማርኬቲንግ',
    description: 'Expert digital marketing training in Ethiopia. Master SEO, social media marketing, Google Ads, and content strategies to grow businesses and your career.',
    price: '13,000',
    image: './3.jpg',
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Studio', 'SEO', 'Canva', 'CapCut', 'GA4'],
    features: [
      'Use AI to generate videos, images, and animations',
      'Build targeted ad funnels that find high-value customers',
      'Set up GA4 and conversion tracking to diagnose sales'
    ]
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    titleAmharic: 'ግራፊክስ ዲዛይን',
    description: 'Master the art of visual communication. Learn professional graphic design using industry-standard tools to create stunning brand identities and social media assets.',
    price: '10,000',
    image: './4.jpg',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Canva Pro'],
    features: [
      'Master typography, color theory, and layout principles',
      'Create professional logos and brand identity systems',
      'Design high-converting social media graphics and ads'
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    titleAmharic: 'ቪዲዮ ኤዲቲንግ',
    description: 'Learn professional video editing from scratch. Master the tools and techniques used by top creators to tell compelling stories through video.',
    price: '12,000',
    image: './5.jpg',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut Desktop', 'After Effects', 'Audition'],
    features: [
      'Master professional cutting and storytelling techniques',
      'Learn color grading and advanced sound design',
      'Create motion graphics and visual effects for social media'
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    titleAmharic: 'ፕሮግራሚንግ',
    description: 'Start your journey into software development. Learn the fundamentals of programming and build real-world applications using modern languages and frameworks.',
    price: '15,000',
    image: './7.jpg',
    tools: ['Python', 'JavaScript', 'VS Code', 'Git', 'HTML/CSS', 'React', 'Node.js'],
    features: [
      'Learn core programming logic and problem-solving',
      'Build responsive web applications from scratch',
      'Master version control and collaborative development'
    ]
  },
  {
    id: 'cinematography',
    title: 'Cinematography',
    titleAmharic: 'ሲኒማቶግራፊ',
    description: 'Master the art of visual storytelling through the lens. Learn camera techniques, lighting, and composition to create cinematic masterpieces.',
    price: '14,000',
    image: './6.jpg',
    tools: ['Professional Cameras', 'Lighting Kits', 'Gimbals', 'Lenses', 'External Recorders'],
    features: [
      'Master camera settings, exposure, and composition',
      'Learn professional lighting techniques for different moods',
      'Direct and shoot high-quality cinematic sequences'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Simon T.',
    role: 'Video Editor',
    content: 'I took the Video Editing class over the summer, it was great and I enjoyed the Cinematography sessions especially.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Simon',
    date: 'JUL 2025',
    rating: 5
  },
  {
    id: '2',
    name: 'Aynalem Assefa',
    role: 'Business Owner',
    content: 'I joined the Digital Marketing cohort with zero marketing experience. Within 6 weeks I built a portfolio campaign that impressed an employer.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aynalem',
    date: 'JUL 2025',
    rating: 5
  },
  {
    id: '3',
    name: 'Fraol K.',
    role: 'Graphics Designer',
    content: 'The step-by-step assignments, one-on-one feedback, and live mock portfolio reviews helped me build the confidence I needed.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fraol',
    date: 'JUN 2025',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Digital Marketing Strategy for 2026',
    excerpt: 'Learn the latest trends in digital marketing and how to stay ahead of the competition.',
    date: 'Feb 27, 2026',
    image: './2.jpg',
    category: 'Marketing'
  },
  {
    id: '2',
    title: 'The Future of Cinematography',
    excerpt: 'How new camera technologies and lighting techniques are changing the way we tell stories.',
    date: 'Jan 20, 2026',
    image: './3.jpg',
    category: 'Cinema'
  },
  
];
