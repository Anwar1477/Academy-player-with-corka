let videos = [
  {
    id: 1,
    title: "Introduction to React",
    author: "Academy LMS",
    description: "Learn the basics of React in this introductory course.",
    videoLink: "https://www.youtube.com/watch?v=example1",
    thumbnail: "/src/assets/alms.jpg",
    date: "May 3, 2022",
    duration: "12:10",
    views: "200",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    author: "Academy LMS",
    description: "Dive deep into JavaScript closures, promises, and more.",
    videoLink: "https://www.youtube.com/watch?v=example2",
    thumbnail: "/src/assets/alms.jpg",
    date: "June 15, 2022",
    duration: "15:30",
    views: "350",
  },
  {
    id: 3,
    title: "CSS Grid Mastery",
    author: "Academy LMS",
    description: "Master CSS Grid for responsive layouts.",
    videoLink: "https://www.youtube.com/watch?v=example3",
    thumbnail: "/src/assets/alms.jpg",
    date: "July 10, 2022",
    duration: "10:45",
    views: "180",
  },
  {
    id: 4,
    title: "Node.js for Beginners",
    author: "Academy LMS",
    description: "Get started with server-side JavaScript using Node.js.",
    videoLink: "https://www.youtube.com/watch?v=example4",
    thumbnail: "/src/assets/alms.jpg",
    date: "August 5, 2022",
    duration: "20:00",
    views: "500",
  },
  {
    id: 5,
    title: "Understanding TypeScript",
    author: "Academy LMS",
    description: "Learn TypeScript to add types to JavaScript.",
    videoLink: "https://www.youtube.com/watch?v=example5",
    thumbnail: "/src/assets/alms.jpg",
    date: "September 1, 2022",
    duration: "13:20",
    views: "250",
  },
  {
    id: 6,
    title: "Building REST APIs",
    author: "Academy LMS",
    description: "Create robust REST APIs with Express.js.",
    videoLink: "https://www.youtube.com/watch?v=example6",
    thumbnail: "/src/assets/alms.jpg",
    date: "October 12, 2022",
    duration: "18:50",
    views: "400",
  },
];

export const getVideos = () => videos;

export const addVideo = (newVideo) => {
  const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
  videos = [...videos, { ...newVideo, id: newId }];
  return newId;
};