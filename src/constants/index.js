import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    firstSlide,
    secondSlide,
    thirdSlide,
     fourthSlide,
     bgSlider,
     bgSliders,
     bgSlide,
    whiteImg,
    yellowImg,
    color1,
    color2,
    color3,
    color4,
    color5,
    display1,
    display2,
    display3,
    display4,
    firstCarousel,
    secondCarousel,
    thirdCarousel,
    framer



  } from "../utils";
  
  export const navLists = [
                        { label:"Store", href: '/' },
                     {label: "Products",href: '/products'},
                     {label: "iPhone",href: '/'},
                      {label: "Support",href: '/'}];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  export const hightlistsSlides = [
    {
      id: 1,
      textLists: [
        "The first iPhone built for ",
        "Apple intelligence. Personal,",
        "private, powerful.",
      ],
      video: firstSlide,
      videoDuration: 2,
    },
    {
      id: 2,
      textLists: ["So fast. So fluid.", "Get a feel for the all-new" , "Camera Control."],
      video: secondSlide,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "4k 120 fps Dolby Vision.",
        "4 studio-quality mics.",
        "A Pro Studio in your pocket.",
      ],
      video: thirdSlide,
      videoDuration: 4,
    },
    {
      id: 4,
      textLists: ["All-new A18 Pro chip powers", "unrivaled intelligence. And", "unprecedented performance."],
      video: fourthSlide,
      videoDuration: 3.63,
    },
  ];
  
   export const Glider = [
    {images: [color1 , color2,  color3, color4, color5 ], description: ["testing1","testing2", "testing3", "testing4", "testing5"]}
   ]
    

  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];

  export const Dispaly = [
    {
      id:1,
      img: display1,
      text:'iPhone 16 Pro Max has our largest iPhone display ever.'
    },
    {
      id:2,
      img: display2,
      text:'The thinnest borders on any Apple Product'
    },
    {
      id:3,
      img: display3,
      text:'Premium Grade 5 titanium is exceptionally durable'
    },
    {
      id:4,
      img: display4,
      text:'Four Striking colors, from Black Titanuim to new Desert Titanium'
    }
  ]

  export const Fill = [
    {
      id: 1,
      img:bgSlider,
      text:"Just hit record in the Notes or Phone app to capture audio recordings and transcripts. Apple Intelligence generates summaries of your transcripts, so you can get the most important info at a glance.",
      description: 'Boost your productivity',
      // headText:"With all-new superpowers, Siri will be able to assit you like never before.",
      headText:"Explore new tools that help you write, focus, and communicate.",
      descriptions:'Priority messages in Mail elevate time-sensitive messages to the top of your inbox — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.'
    },
    {
      id: 2,
      img:display3,
      text:"The Image Playground app lets you create unique images in seconds based on a description, a concept, or even a person from your Photos library. Experiment with image styles like animation, illustration, and sketch.",
      description: "Express yourself visually",
      headText:"Create fun,  original Images that are truly personal to you.",
      descriptions: "With Clean Up, you can remove distracting background objects from your photos with just a tap — so you can perfect a shot while staying true to the original image."
    },
    {
      id: 3,
      img:bgSliders,
      text:"Richer language understanding and an enhanced voice make communicating with Siri even more natural. For example, if you stumble over your words, Siri still knows what you’re getting at.",
      description: "A new era for Siri's ",
      headText:"With all-new superpowers, Siri will be able to assit you like never before.",
      descriptions: "Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you step-by-step instructions in a snap.'",
    },
  ]

  export const Apple = [{
        bgImg: framer,
        headText:"iPhone 16 Pro",
        subText: "Hello,Apple Intelligence "
     }, 
  {

   }]

   