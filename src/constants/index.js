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
  appleImg,
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
  PicsFilter,
  card1, card2, 
  card3,card4,
  card5 ,
  card6,
  card8, card9,
  card10, card11,
  grid1,
  grid2,
  grid3,
  grid4,
  camera
  } from "../utils";
  
  export const navLinks = [
    {
      id: 1,
      name: 'iPhone',
      href: '/',
    },
    {
      id: 2,
      name: 'Product',
      href: '/products',
    },
    {
      id: 3,
      name: 'Store',
      href: '/store',
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

   export const Glider = [
     {
      id:1,
      img: color1 , 
      title: 'iPhone 15 Pro in all Titanium',
      color:'#C9C8C2'
     },
     {
      id:2,
      img: color2 , 
      title: 'iPhone 15 Pro in Natural Titanium',
      color:'#6f6c64'
     },
     {
      id:3,
      img: color3 , 
      title: 'iPhone 15 Pro in Blue Titanium',
      color:'#ffffff'
    },
     {
      id:4,
      img: color4 , 
      title: 'iPhone 15 Pro in Desert Titanium',
      color:'#ffe7b9'
    },
     {
      id:5,
      img: color5 , 
      title: 'iPhone 15 Pro in Black Titanium',
      color:'#8F8A81'
    }]
    

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

  export const Fill = [{
      id: 1,
      video:bgSlider,
      text1:"Awareness of your personal context enables Siri to  help you in ways that are unique to you. Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy",
      text2: 'Just hit record in the Notes or Phone app to capture audio recordings and transcripts. Apple Intelligence generates summaries of your transcripts, so you can get the most important info at a glance.',
      text3:"Priority messages in Mail elevate time-sensitive messages to the top of your inbox — like an invitation that has a deadline today or a check-in reminder for your flight this afternoon.",
      img1:grid1,
      img2:grid2,
      button: "Boost your Porductivity"
       
    },
      { 
      id: 2,
      video:bgSliders,
      text1:"help you in ways that are unique to you. Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.",
      text2: "The Image Playground app lets you create unique images in seconds based on a description, a concept, or even a person from your Photos library. Experiment with image styles like animation, illustration, and sketch.",
      text3:"With Clean Up, you can remove distracting background objects from your photos with just a tap — so you can perfect a shot while staying true to the original image.",
     button: "Express yourself visually",
      img1: grid3,
      img2: grid4
    },
    {
      id: 3,
      image:PicsFilter,
      text1:"Awareness of your personal context enables Siri to help you in ways that are unique to you. Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.",
      text2: 'Richer language understanding and an enhanced voice make communicating with Siri even more natural. For example, if you stumble over your words, Siri still knows what you’re getting at.',
      text3:"Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you step-by-step instructions in a snap.'",
       button: "A new era of siri's",
       img1: appleImg,
       img2: camera
    }]

    export const Boxes = [
      {
       image: card1,
       text:'Arcade'  
     },
      {
       image: card3,
       text:'Podcast'  
     },
     {
       image: card2,
       text:'Arcade'  
     },
      {
       image: card4,
       text:'Fitness +'  
     },
      {
       image: card6,
       text:'Entertainment'  
     },
      {
       image: card5,
       text:'Fitness +'  
     },
      {
       image: card11,
       text:'Music'  
     },
      {
       image: card8,
       text:'XCamera'  
     },
      {
       image: card9,
       text:'Explore +'  
     },
      {
       image: card10,
       text:'Gamming'  
     },
     ]

   

   