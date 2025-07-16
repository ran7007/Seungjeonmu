// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     // 섹션 고정 스크롤 (스냅)
//     let sections = gsap.utils.toArray(".snap-section");
//     sections.forEach(section => {
//         ScrollTrigger.create({
//             trigger: section,
//             start: "top top",
//             pin: true,
//             pinSpacing: false
//         });
//     });

//     ScrollTrigger.create({

//         snap: {
//             snapTo: 1 / (sections.length - 1),
//             duration: { min: 0.5, max: 1 },
//             ease: "power3.inOut"
//         }
//     });

//     // sec2 스크롤 효과
//     gsap.fromTo("#sec2 .sec2_text > dl > *",
//         { opacity: 0, y: 30 },
//         {
//             opacity: 1, y: 0,
//             stagger: 0.2,
//             ease: "power8.out",
//             scrollTrigger: {
//                 trigger: "#sec2",
//                 start: "top 10%",
//                 toggleActions: "play reverse play reverse"
//             }
//         }
//     );
// });
