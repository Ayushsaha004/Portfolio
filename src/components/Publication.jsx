import React from 'react';
// import { BookOpen } from 'lucide-react'; // Uncomment if lucide-react is installed

// Fallback icon if lucide-react is not installed
const BookOpen = (props) => (
  <span role="img" aria-label="book" className={props.className} style={{fontSize: '1.5rem'}}>
    
  </span>
);

const publications = [
  {
    title: 'Skin Lesion Classification using a Feature Fusion-aided Dual-branch Deep Learning Model',
    conference: 'International Conference on Computer , Graphics and Image Processing',
    year: '2025',
    link: 'https://icvgip.in/2025/#cfp',
  },
  {
    title: 'Sign Language Recognition using a Deep Learning Model with LSTM and CNN',
    conference: 'Journal of Materials Science',
    year: '2025',
    link: 'https://link.springer.com/chapter/xxxxxx',
  },
];

const Publication = () => (
  <section id="publication" className="w-full px-[12%] py-10 scroll-mt-20 transition-colors max-w-7xl mx-auto">
    <h2 className="text-center text-5xl font-Ovo mb-8 text-white flex items-center justify-center gap-3">
      <BookOpen className="w-7 h-7 text-white" />
      My Publications
    </h2>
    <p className="max-w-3xl mx-auto mb-10 text-center text-gray-700 dark:text-white/80 font-Ovo text-base sm:text-lg">
      I actively contribute to the field of artificial intelligence through research and publication. My work focuses on deep learning applications in healthcare and accessibility, with a strong emphasis on practical impact and innovation. Below are some of my recent publications in international journals and conferences.
    </p>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {publications.map((pub, idx) => (
        <li
          key={idx}
          className="border-[0.5px] border-gray-400 rounded-xl px-10 py-4 flex flex-col justify-center min-h-[120px] h-auto cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white bg-transparent"
        >
          <BookOpen className="w-7 h-7 mb-2 text-white" />
          <h3 className="mb-2 font-semibold text-gray-700 dark:text-white font-Ovo text-base sm:text-lg whitespace-normal">
            {pub.title}
          </h3>
          <p className="text-gray-600 text-sm dark:text-white/80 font-Ovo mb-2">
            {pub.conference} • {pub.year}
          </p>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-300 text-sm font-Ovo font-medium hover:underline"
          >
            View Publication →
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Publication;
