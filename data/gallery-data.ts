export interface GalleryImage {
  id: string;
  title: string;
  category: "All" | "Classroom" | "Activities" | "Creativity" | "Play" | "Celebrations";
  src: string;
  alt: string;
  aspect: "square" | "wide" | "tall";
}

export const GALLERY_DATA: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Joyful Early Literacy & Storytime in Library",
    category: "Classroom",
    src: "/images/reading-library.jpg",
    alt: "Cute Indian primary school children smiling and reading colorful storybooks together in modern school library",
    aspect: "wide",
  },
  {
    id: "gal-2",
    title: "Vibrant Painting & Art Discovery Studio",
    category: "Creativity",
    src: "/images/art-creative.jpg",
    alt: "Smiling Indian school students drawing and painting with watercolors in a brightly lit art room",
    aspect: "square",
  },
  {
    id: "gal-3",
    title: "Outdoor Track Sprint & Agility Races",
    category: "Play",
    src: "/images/sports-activity.jpg",
    alt: "Cute Indian school children running happily in athletic PE uniforms across lush green turf field in Noida",
    aspect: "wide",
  },
  {
    id: "gal-4",
    title: "Hands-on Mathematics & Abacus Exploration",
    category: "Classroom",
    src: "/images/math-abacus.jpg",
    alt: "Adorable Indian boy and girl learning foundational arithmetic and geometry using colorful abacus counters",
    aspect: "tall",
  },
  {
    id: "gal-5",
    title: "Music, Singing & Rhythm Percussion Circle",
    category: "Activities",
    src: "/images/music-class.jpg",
    alt: "Laughing Indian school children playing xylophones and drums in cheerful music room",
    aspect: "square",
  },
  {
    id: "gal-6",
    title: "School Annual Day & Cultural Celebrations",
    category: "Celebrations",
    src: "/images/festive-celebration.jpg",
    alt: "Cute Indian primary students in traditional festive attire celebrating annual day with garlands and lanterns",
    aspect: "wide",
  },
  {
    id: "gal-7",
    title: "STEM Explorers & Plant Science Discovery",
    category: "Activities",
    src: "/images/science-stem.jpg",
    alt: "Curious Indian students examining botanical flowers and leaves with magnifying glasses in science lab",
    aspect: "square",
  },
  {
    id: "gal-8",
    title: "Sensory Play & Building Blocks Workshop",
    category: "Creativity",
    src: "/images/toddler-play.jpg",
    alt: "Cute young Indian toddler children stacking colorful educational blocks in cheerful play area",
    aspect: "tall",
  },
  {
    id: "gal-9",
    title: "Wholesome Nutrition & Shared Tiffin Time",
    category: "Celebrations",
    src: "/images/healthy-tiffin.jpg",
    alt: "Cute Indian school boy and girl sharing nutritious food from stainless steel tiffin boxes in cafeteria",
    aspect: "wide",
  },
];
