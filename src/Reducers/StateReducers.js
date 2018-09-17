import {
    PROJECTINFO,
    PRODUCTGET
} from '../Actions/types.js'; 

const INITIAL_STATE = {
  info:[],
  one:[],
  hover: false,
  data:[
    {
      id:1,
      title: "This is the Bracelet title",
      image: "https://i.etsystatic.com/6175536/r/il/1b38e9/934553572/il_570xN.934553572_ptfl.jpg",
      type: "Bracelet",
      summary:"summary",
      description: "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms.",
      price: 65,
    },
    { 
      id:2,
      title: "This is the Neckless title",
      image: "http://4.bp.blogspot.com/-eyccJTWIXgM/UVhKemcknnI/AAAAAAAAAZs/LMlW031dtzo/s1600/jewel.jpg",
      type: "Neckless",
      summary:"summary",
      description: "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms.",
      price: 35,
    },
    {
      id:3,
      title: "This is the Earrings title",
      image: "https://www.brighton.com/photos/product/giant/369560S164168/-/size-os.jpg",
      type: "Earrings",
      summary:"summary",
      description: "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms.",
      price: 85,
    },
    {
      id:4,
      title: "This is the Neckless title",
      image: "http://4.bp.blogspot.com/-eyccJTWIXgM/UVhKemcknnI/AAAAAAAAAZs/LMlW031dtzo/s1600/jewel.jpg",
      type: "Neckless",
      summary:"summary",
      description: "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms.",
      price: 35,
    },
    {
      id:5,
      title: "This is the Earrings title",
      image: "https://www.brighton.com/photos/product/giant/369560S164168/-/size-os.jpg",
      type: "Earrings",
      summary:"summary",
      description: "A bracelet is an article of jewellery that is worn around the wrist. Bracelets may serve different uses, such as being worn as an ornament. When worn as ornaments, bracelets may have a supportive function to hold other items of decoration, such as charms.",
      price: 85,
    },
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTINFO: 
      return{ ...state, info: action.payload};
    case PRODUCTGET: 
      return{ ...state, one: action.payload};
    default:
      return state;
  }
}; 
  
  
  
  
    
  