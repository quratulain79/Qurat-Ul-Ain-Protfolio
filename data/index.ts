export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I’m Qurat Ul Ain, a CS Graduate from COMSATS University Islamabad, Abbottabad Campus(SP22–FA25).",
    description: "Expert in AI/ML, Flutter, React.js, Next.js & Game Dev. Building intelligent, scalable solutions.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones & open to global AI collaborations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-5 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Final Year Project",
    des: "Title: Lungs Cancer Detection & Segmentation Based On Quantitative Analysis",
    img: "/welcome-wide.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/quratulain79/Lungs_Cancer_Detection_-_Segmentation_Fyp",
  },
  {
    id: 2,
    title: "Parallel Text Matching - A Hybrid Approach",
    des: "High-performance text pattern matching tool built using C++, CUDA, and OpenMP for parallel processing.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/quratulain79/PDC_Project",
  },
  {
    id: 3,
    title: "Unsplash Clone - Photo Gallery",
    des: "A responsive photo gallery application built using the Unsplash API to browse and search for high-resolution images.",
    img: "/aaa.png", // Make sure file name matches public folder
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/quratulain79/UNSPLASH_Clone_Final/",
  },

];

// data/index.ts file mein


export const testimonials = [
  {
    quote:
      "Collaborating with Qurat Ul Ain was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Her enthusiasm for every facet of development truly stands out.",
    name: "Lecturer: MS. Bushra Mushtaq",
    title: "FYP Supervisor",
    // Yahan se 'img' wali line bilkul hata di hai
  },
];
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Expert (Student)",
    desc: "Developed a Lung Cancer Detection model using Deep Learning and integrated it with a mobile app.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Flutter Developer",
    desc: "Designed and developed cross-platform mobile applications for various semester projects.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "HPC Specialist",
    desc: "Worked on optimizing algorithms using CUDA, MPI, and OpenMP for high-performance computing tasks.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Game Developer Intern",
    desc: "Developed immersive game mechanics and level designs during my internship at Elite Tech Solution.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    // CHANGE: Added your GitHub link
    link: "https://github.com/quratulain79",
  },
  {
    id: 2,
    img: "/link.svg",
    // CHANGE: Added your LinkedIn link
    link: "https://www.linkedin.com/in/quratulain79",
  },
  // Twitter hata diya hai kyunke link nahi tha, Email button alag se hai
];