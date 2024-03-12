// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./ProjectCarousel.module.css";

// export const ProjectCarousel = () => {
//   render() {
//     const projectCar = {
//       "No Man's Land": {
//         title: "no man's land",
//         desc:
//           "A third-person survival-mode game where you battle against time and space to return to Earth.",
//         techStack: "C# (UNITY)",
//         link: "",
//         open: "",
//         image: "/pics/me2jpg"
//       },
//       "Truth": {
//         title: "truth",
//         desc:
//           "A three.js simulation of the planet system revolving around a monolith.",
//         techStack: "JAVASCRIPT (THREE.JS)",
//         link: "https://github.com/gazijarin/truth",
//         open: "https://gazijarin.github.io/Truth/",
//         image: "/assets/truth.png"
//       },
//       "Tall Tales": {
//         title: "tall tales",
//         desc:
//           "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
//         techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
//         link: "https://github.com/gazijarin/TallTales",
//         open: "https://talltales.herokuapp.com/",
//         image: "/assets/talltales.png"
//       },
//       "Portfolio": {
//         title: "portfolio.js",
//         desc:
//           "A small JS library that helps with clear and succinct data presentation.",
//         techStack: "NODE.JS (EXPRESS.JS)",
//         link: "https://github.com/gazijarin/Portfolio.js",
//         open: "https://afternoon-ocean-92382.herokuapp.com/",
//         image: "/assets/portfolio.png"
//       }
//     };

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     };

//     return (
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img
//               src={image}
//               alt={`Project ${index + 1}`}
//               className={styles.projectImage}
//             />
//           </div>
//         ))}
//       </Slider>
//     );
//   };
// };
