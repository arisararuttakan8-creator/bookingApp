// seedData.js
// วิธีใช้: node seedData.js
// ต้องรัน api server อยู่ก่อนค่ะ หรือเรียก API โดยตรงค่ะ

import axios from "axios"

const BASE_URL = "http://localhost:8800/api"; // เปลี่ยนตาม port ค่ะ

// ==============================
// HOTEL DATA — 15 รายการ
// ==============================
const hotels = [
  // BERLIN — 4 รายการ
  {
    name: "Hotel Adlon Berlin",
    type: "hotel",
    city: "berlin",
    address: "Unter den Linden 77, Berlin",
    distance: "500",
    photos: ["/images/berlin.jpg"],
    title: "Luxury Stay in the Heart of Berlin",
    desc: "Experience the finest hospitality in Berlin's most iconic hotel, steps away from the Brandenburg Gate.",
    rating: 5,
    rooms: [],
    cheapestPrice: 250,
    featured: true,
  },
  {
    name: "Mitte Boutique Hotel",
    type: "hotel",
    city: "berlin",
    address: "Rosenthaler Str. 40, Berlin",
    distance: "800",
    photos: ["/images/berlin.jpg"],
    title: "Charming Hotel in Berlin Mitte",
    desc: "A cozy boutique hotel located in the vibrant Mitte district, close to galleries and restaurants.",
    rating: 4,
    rooms: [],
    cheapestPrice: 120,
    featured: false,
  },
  {
    name: "Berlin City Apartment",
    type: "apartment",
    city: "berlin",
    address: "Prenzlauer Allee 36, Berlin",
    distance: "1200",
    photos: ["/images/berlin.jpg"],
    title: "Modern Apartment in Prenzlauer Berg",
    desc: "Spacious apartment with full kitchen, perfect for longer stays in trendy Prenzlauer Berg.",
    rating: 4,
    rooms: [],
    cheapestPrice: 95,
    featured: false,
  },
  {
    name: "Spree River Cabin",
    type: "cabin",
    city: "berlin",
    address: "Am Spreeufer 12, Berlin",
    distance: "2000",
    photos: ["/images/berlin.jpg"],
    title: "Unique Cabin by the Spree River",
    desc: "A one-of-a-kind cabin experience on the banks of the Spree River with stunning water views.",
    rating: 4,
    rooms: [],
    cheapestPrice: 110,
    featured: true,
  },

  // MADRID — 5 รายการ
  {
    name: "Gran Via Palace Hotel",
    type: "hotel",
    city: "madrid",
    address: "Gran Via 25, Madrid",
    distance: "300",
    photos: ["/images/madrid.jpg"],
    title: "Classic Hotel on Madrid's Gran Via",
    desc: "Elegant hotel on the famous Gran Via boulevard, surrounded by shopping and entertainment.",
    rating: 5,
    rooms: [],
    cheapestPrice: 200,
    featured: true,
  },
  {
    name: "Retiro Park Hotel",
    type: "hotel",
    city: "madrid",
    address: "Calle Alfonso XII 14, Madrid",
    distance: "600",
    photos: ["/images/madrid.jpg"],
    title: "Peaceful Hotel Near Retiro Park",
    desc: "Serene hotel located near the beautiful Retiro Park, perfect for nature lovers.",
    rating: 4,
    rooms: [],
    cheapestPrice: 150,
    featured: false,
  },
  {
    name: "Malasana Art Apartment",
    type: "apartment",
    city: "madrid",
    address: "Calle del Pez 18, Madrid",
    distance: "900",
    photos: ["/images/madrid.jpg"],
    title: "Artistic Apartment in Malasana",
    desc: "Stylish apartment in Madrid's coolest neighborhood, filled with local art and culture.",
    rating: 4,
    rooms: [],
    cheapestPrice: 85,
    featured: false,
  },
  {
    name: "Sierra Madrid Villa",
    type: "villa",
    city: "madrid",
    address: "Carretera de La Coruña km 15, Madrid",
    distance: "15000",
    photos: ["/images/madrid.jpg"],
    title: "Stunning Villa in the Madrid Mountains",
    desc: "Luxurious villa with private pool and mountain views, a perfect escape from the city.",
    rating: 5,
    rooms: [],
    cheapestPrice: 350,
    featured: true,
  },
  {
    name: "Sol Central Resort",
    type: "resort",
    city: "madrid",
    address: "Puerta del Sol 1, Madrid",
    distance: "100",
    photos: ["/images/madrid.jpg"],
    title: "Premium Resort at Puerta del Sol",
    desc: "All-inclusive resort experience in the heart of Madrid, steps from the city's most famous square.",
    rating: 5,
    rooms: [],
    cheapestPrice: 280,
    featured: true,
  },

  // LONDON — 6 รายการ
  {
    name: "Thames View Hotel",
    type: "hotel",
    city: "london",
    address: "Victoria Embankment, London",
    distance: "400",
    photos: ["/images/london.jpg"],
    title: "Elegant Hotel with Thames Views",
    desc: "Sophisticated hotel offering breathtaking views of the Thames and iconic London landmarks.",
    rating: 5,
    rooms: [],
    cheapestPrice: 300,
    featured: true,
  },
  {
    name: "Covent Garden Boutique",
    type: "hotel",
    city: "london",
    address: "Long Acre 42, Covent Garden, London",
    distance: "700",
    photos: ["/images/london.jpg"],
    title: "Boutique Hotel in Covent Garden",
    desc: "Charming boutique hotel in the heart of Covent Garden, surrounded by theatres and restaurants.",
    rating: 4,
    rooms: [],
    cheapestPrice: 180,
    featured: false,
  },
  {
    name: "Shoreditch Loft Apartment",
    type: "apartment",
    city: "london",
    address: "Brick Lane 55, Shoreditch, London",
    distance: "1500",
    photos: ["/images/london.jpg"],
    title: "Trendy Loft in Shoreditch",
    desc: "Industrial-chic loft apartment in London's most creative neighborhood.",
    rating: 4,
    rooms: [],
    cheapestPrice: 130,
    featured: false,
  },
  {
    name: "Kensington Garden Resort",
    type: "resort",
    city: "london",
    address: "Kensington High Street 101, London",
    distance: "1000",
    photos: ["/images/london.jpg"],
    title: "Luxury Resort Near Kensington Palace",
    desc: "World-class resort with spa and wellness facilities, adjacent to the beautiful Kensington Gardens.",
    rating: 5,
    rooms: [],
    cheapestPrice: 400,
    featured: true,
  },
  {
    name: "Cotswolds London Villa",
    type: "villa",
    city: "london",
    address: "Richmond Park Road, London",
    distance: "12000",
    photos: ["/images/london.jpg"],
    title: "Country Villa Near Richmond Park",
    desc: "Beautiful country-style villa with garden and private parking, near Richmond Park.",
    rating: 4,
    rooms: [],
    cheapestPrice: 320,
    featured: false,
  },
  {
    name: "East London Cabin",
    type: "cabin",
    city: "london",
    address: "Victoria Park Road 8, East London",
    distance: "3000",
    photos: ["/images/london.jpg"],
    title: "Cozy Cabin by Victoria Park",
    desc: "Unique wooden cabin experience in East London, perfect for a quirky city getaway.",
    rating: 4,
    rooms: [],
    cheapestPrice: 90,
    featured: false,
  },
];

// ==============================
// ROOM TEMPLATES
// ==============================
const roomTemplates = [
  {
    title: "Standard Room",
    price: 80,
    maxPeople: 2,
    desc: "Comfortable standard room with all essential amenities.",
    roomNumbers: [
      { number: 101, unavailableDates: [] },
      { number: 102, unavailableDates: [] },
      { number: 103, unavailableDates: [] },
    ],
  },
  {
    title: "Deluxe Room",
    price: 150,
    maxPeople: 2,
    desc: "Spacious deluxe room with premium furnishings and city view.",
    roomNumbers: [
      { number: 201, unavailableDates: [] },
      { number: 202, unavailableDates: [] },
    ],
  },
  {
    title: "Suite",
    price: 300,
    maxPeople: 4,
    desc: "Luxurious suite with separate living area and panoramic views.",
    roomNumbers: [
      { number: 301, unavailableDates: [] },
      { number: 302, unavailableDates: [] },
    ],
  },
];

// สร้าง unavailableDates จริงๆ ค่ะ
function generateUnavailableDates(startOffset, days) {
  const dates = [];
  const start = new Date();
  start.setDate(start.getDate() + startOffset);
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    dates.push(d);
  }
  return dates;
}

// assign unavailableDates ให้ดูเหมือนจริงค่ะ
function getRoomsForHotel(hotelIndex) {
  return roomTemplates.map((room, roomIndex) => {
    const rooms = { ...room };
    rooms.roomNumbers = room.roomNumbers.map((r, i) => {
      // กระจาย unavailableDates ให้ต่างกันแต่ละห้องค่ะ
      let unavailableDates = [];
      if ((hotelIndex + roomIndex + i) % 3 === 0) {
        unavailableDates = generateUnavailableDates(2, 3); // จองอยู่ 3 วันข้างหน้าค่ะ
      } else if ((hotelIndex + roomIndex + i) % 3 === 1) {
        unavailableDates = generateUnavailableDates(7, 5); // จองอีก 1 อาทิตย์ค่ะ
      }
      return { ...r, unavailableDates };
    });
    return rooms;
  });
}

// ==============================
// MAIN SEED FUNCTION
// ==============================
async function seed() {
  console.log("🌱 Starting seed...\n");

  for (let i = 0; i < hotels.length; i++) {
    const hotel = hotels[i];

    try {
      // 1. สร้าง hotel ค่ะ
      console.log(`Creating hotel: ${hotel.name}...`);
      const hotelRes = await axios.post(`${BASE_URL}/hotels`, hotel);
      const hotelId = hotelRes.data._id;
      console.log(`✅ Hotel created: ${hotel.name} (${hotelId})\n`);

      // 2. สร้าง rooms สำหรับ hotel นี้ค่ะ
      const rooms = getRoomsForHotel(i);
      for (const room of rooms) {
        console.log(`  Creating room: ${room.title}...`);
        const roomRes = await axios.post(
          `${BASE_URL}/rooms/${hotelId}`,
          room
        );
        console.log(`  ✅ Room created: ${room.title} (${roomRes.data._id})`);
      }
      console.log("");
    } catch (err) {
      console.error(`❌ Error creating ${hotel.name}:`, err.response?.data || err.message);
    }
  }

  console.log("🎉 Seed complete!");
}

seed();
