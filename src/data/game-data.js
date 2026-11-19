// =============================================================================
// GAMEBENCH: central game data. Everything on the game pages comes from here.
//
// ADDING SCREENSHOTS
//   1. Drop files into public/assets/<game-id>/screenshots/
//      named screenshot-01.jpg, screenshot-02.jpg, ...
//   2. In that game's entry below, change the number in shots("<id>", N)
//      to match how many files you added. (Or write the paths out by hand.)
//   No component needs to change.
//
// If an image uses another format, override the path in the entry, e.g.
//   cover: "./assets/gta-5/game-cover/game.png"
// =============================================================================
import { ph } from "./placeholder.js";

const shots = (id, count = 3, ext = "jpg") =>
  Array.from(
    { length: count },
    (_, i) => `./assets/${id}/screenshots/screenshot-${String(i + 1).padStart(2, "0")}.${ext}`
  );

const game = (id, title, data) => ({
  id,
  title,
  cover: `./assets/${id}/game-cover/game.jpg`,
  mainImage: `./assets/${id}/main-image/game.jpg`,
  screenshots: shots(id, 3),
  experience: ph(`your personal experience with ${title}`),
  ...data,
});

const fill = (what) => ph(`${what} (not verified yet, check the official requirements)`);

export const games = [
  game("gta-vice-city", "GTA Vice City", {
    description:
      "An open-world action-adventure set in 1986 in Vice City, a neon-soaked city inspired by Miami. Players follow Tommy Vercetti, a criminal sent to the city after his release from prison, as he builds his own criminal empire.",
    developer: "Rockstar North",
    genre: "Action-adventure",
    releaseDate: "October 29, 2002 (PC: May 12, 2003)",
    minimumRequirements: {
      cpu: "Intel Pentium III or AMD Athlon, 800 MHz",
      ram: "128 MB",
      videoCard: "32 MB video card (GeForce 2 or better)",
      diskSpace: "915 MB",
    },
  }),
  game("gta-san-andreas", "GTA San Andreas", {
    description:
      "Set in the early 1990s state of San Andreas, the game follows Carl \"CJ\" Johnson, who returns to Los Santos after his mother's death and is pulled back into gang life. The open world spans three cities and the countryside between them.",
    developer: "Rockstar North",
    genre: "Action-adventure",
    releaseDate: "October 26, 2004 (PC: June 7, 2005)",
    minimumRequirements: {
      cpu: "Intel Pentium III or AMD Athlon, 1 GHz",
      ram: "256 MB",
      videoCard: "64 MB video card (GeForce 3 or better)",
      diskSpace: "3.6 GB",
    },
  }),
  game("gta-5", "GTA 5", {
    description:
      "Set in the fictional state of San Andreas, centred on the city of Los Santos. Three protagonists, Michael, Franklin and Trevor, plan and carry out heists, and the player can switch between them at almost any time in a large open world.",
    developer: "Rockstar North",
    genre: "Action-adventure",
    releaseDate: "September 17, 2013 (PC: April 14, 2015)",
    minimumRequirements: {
      cpu: "Intel Core 2 Quad Q6600 @ 2.40 GHz / AMD Phenom 9850 Quad-Core @ 2.5 GHz",
      ram: "4 GB",
      videoCard: "NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DirectX 10, 10.1, 11)",
      diskSpace: "72 GB",
    },
  }),
  game("far-cry-3", "Far Cry 3", {
    description:
      "Jason Brody is stranded on the tropical Rook Islands after a holiday goes wrong, and must fight to rescue his friends from pirates led by the unforgettable Vaas. An open-world first-person shooter built around exploration and survival.",
    developer: "Ubisoft Montreal",
    genre: "Action-adventure, first-person shooter",
    releaseDate: "November 29, 2012",
    minimumRequirements: {
      cpu: "Intel Core 2 Duo E6700 @ 2.6 GHz / AMD Athlon 64 X2 6000+ @ 3.0 GHz",
      ram: "4 GB",
      videoCard: "NVIDIA GeForce GTS 450 / AMD Radeon HD 5670 (512 MB)",
      diskSpace: "15 GB",
    },
  }),
  game("far-cry-4", "Far Cry 4", {
    description:
      "Ajay Ghale travels to Kyrat, a fictional country in the Himalayas, to scatter his mother's ashes and is caught up in a civil war against the tyrannical king Pagan Min. Features open-world exploration, vehicles and elephant riding.",
    developer: "Ubisoft Montreal",
    genre: "Action-adventure, first-person shooter",
    releaseDate: "November 18, 2014",
    minimumRequirements: {
      cpu: "Intel Core i5-750 @ 2.67 GHz / AMD Phenom II X4 955 @ 3.2 GHz",
      ram: "4 GB",
      videoCard: "NVIDIA GeForce GTX 460 / AMD Radeon HD 5850 (1 GB)",
      diskSpace: "30 GB",
    },
  }),
  game("far-cry-5", "Far Cry 5", {
    description:
      "Set in Hope County, Montana, a rookie deputy stands against Eden's Gate, a doomsday cult led by Joseph Seed. Players can tackle the open world in any order and recruit allies along the way.",
    developer: "Ubisoft Montreal, Ubisoft Toronto",
    genre: "Action-adventure, first-person shooter",
    releaseDate: "March 27, 2018",
    minimumRequirements: {
      cpu: "Intel Core i5-2400 @ 3.1 GHz / AMD FX-6300 @ 3.5 GHz",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 670 (2 GB) / AMD Radeon R9 270 (2 GB)",
      diskSpace: "40 GB",
    },
  }),
  game("far-cry-primal", "Far Cry Primal", {
    description:
      "Set in 10,000 BCE in the Stone Age land of Oros. Takkar, a hunter of the Wenja tribe, survives among mammoths and sabre-toothed cats by taming beasts, crafting weapons and rebuilding his people's village.",
    developer: "Ubisoft Montreal",
    genre: "Action-adventure, first-person",
    releaseDate: "February 23, 2016",
    minimumRequirements: {
      cpu: "Intel Core i3-550 @ 3.2 GHz / AMD Phenom II X4 955 @ 3.2 GHz",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 460 (1 GB) / AMD Radeon HD 5850 (1 GB)",
      diskSpace: "20 GB",
    },
  }),
  game("far-cry-new-dawn", "Far Cry New Dawn", {
    description:
      "A direct sequel to Far Cry 5, set seventeen years after a nuclear catastrophe. Hope County has been transformed into a vibrant, overgrown wilderness where players take on the Highwaymen and build up the Prosperity settlement.",
    developer: "Ubisoft Montreal",
    genre: "Action-adventure, first-person shooter",
    releaseDate: "February 15, 2019",
    minimumRequirements: {
      cpu: "Intel Core i5-2400 @ 3.1 GHz / AMD FX-6300 @ 3.5 GHz",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 670 (2 GB) / AMD Radeon R9 270 (2 GB)",
      diskSpace: "40 GB",
    },
  }),
  game("just-cause-3", "Just Cause 3", {
    description:
      "Rico Rodriguez returns to Medici, his Mediterranean homeland, to overthrow the dictator General Di Ravello. A grappling hook, wingsuit and parachute make explosive, sky-high chaos the heart of the open-world action.",
    developer: "Avalanche Studios",
    genre: "Action-adventure, open world",
    releaseDate: "December 1, 2015",
    minimumRequirements: {
      cpu: "Intel Core i5-2500K @ 3.3 GHz / AMD Phenom II X6 1075T @ 3.0 GHz",
      ram: "6 GB",
      videoCard: "NVIDIA GeForce GTX 670 (2 GB) / AMD Radeon HD 7870 (2 GB)",
      diskSpace: "54 GB",
    },
  }),
  game("just-cause-2", "Just Cause 2", {
    description:
      "Rico Rodriguez is sent to Panau, a large tropical island nation in Southeast Asia, to take down the dictator Baby Panay. The game rewards creative destruction with its grappling hook and parachute across a huge open world.",
    developer: "Avalanche Studios",
    genre: "Action-adventure, open world",
    releaseDate: "March 23, 2010",
    minimumRequirements: {
      cpu: "Dual-core 3.0 GHz processor",
      ram: "2 GB",
      videoCard: fill("minimum video card"),
      diskSpace: "10 GB",
    },
  }),
  game("tomb-raider-2013", "Tomb Raider 2013", {
    description:
      "A reboot that tells the origin story of Lara Croft. Shipwrecked on the mysterious island of Yamatai, a young Lara must survive the elements and hostile islanders while uncovering the island's secrets.",
    developer: "Crystal Dynamics",
    genre: "Action-adventure",
    releaseDate: "March 5, 2013",
    minimumRequirements: {
      cpu: "AMD Dual Core Athlon 64 X2 2.1 GHz (4050e) / Intel Core 2 Duo 2.1 GHz (E4600)",
      ram: fill("minimum RAM"),
      videoCard: "DirectX 10 capable: NVIDIA GeForce 8600 / AMD Radeon HD 2600",
      diskSpace: "12 GB",
    },
  }),
  game("rise-of-the-tomb-raider", "Rise of the Tomb Raider", {
    description:
      "Lara Croft travels from Syria to the frozen wilds of Siberia in search of the legendary Divine Source of immortality, racing against the paramilitary organisation Trinity. Combines exploration, survival and tomb puzzles.",
    developer: "Crystal Dynamics",
    genre: "Action-adventure",
    releaseDate: "November 10, 2015 (PC: January 28, 2016)",
    minimumRequirements: {
      cpu: "Intel Core i3-2100 / AMD FX-4100",
      ram: "6 GB",
      videoCard: "NVIDIA GeForce GTX 650 (2 GB) / AMD Radeon HD 7770 (2 GB)",
      diskSpace: "25 GB",
    },
  }),
  game("alien-isolation", "Alien Isolation", {
    description:
      "Set fifteen years after the original Alien film. Amanda Ripley, daughter of Ellen Ripley, searches the failing Sevastopol space station while being hunted by a single, relentless Xenomorph. A slow-burn survival horror built on stealth.",
    developer: "Creative Assembly",
    genre: "Survival horror, stealth",
    releaseDate: "October 7, 2014",
    minimumRequirements: {
      cpu: "Intel Core 2 Duo E6600 / AMD Phenom X3 8750",
      ram: "4 GB",
      videoCard: fill("minimum video card"),
      diskSpace: "35 GB",
    },
  }),
  game("stray", "Stray", {
    description:
      "A third-person adventure in which you play as a stray cat finding its way through a neon-lit, decaying cybercity inhabited by robots, accompanied by a small drone companion called B-12.",
    developer: "BlueTwelve Studio",
    genre: "Adventure",
    releaseDate: "July 19, 2022",
    minimumRequirements: {
      cpu: "Intel Core i5-2550K / AMD FX-8350",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 650 Ti (2 GB) / AMD Radeon R7 360 (2 GB)",
      diskSpace: "10 GB",
    },
  }),
  game("fifa-17", "FIFA 17", {
    description:
      "The 2016 entry in EA's football series and the first to use the Frostbite engine. It introduced \"The Journey\", a story mode following young footballer Alex Hunter, alongside Ultimate Team and the usual club and national competitions.",
    developer: "EA Vancouver",
    genre: "Sports, football simulation",
    releaseDate: "September 27, 2016",
    minimumRequirements: {
      cpu: "Intel Core i3-2100 @ 3.1 GHz / AMD Phenom II X4 965 @ 3.4 GHz",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 460 (1 GB) / AMD Radeon R7 260",
      diskSpace: "50 GB",
    },
  }),
  game("pes-2013", "PES 2013 (Pro Evolution Soccer 2013)", {
    description:
      "The 2013 edition of Konami's long-running football simulation series. It focused on more natural ball control through features like Active First Touch, and added the PlayerID system to give players individual styles.",
    developer: "Konami (PES Productions)",
    genre: "Sports, football simulation",
    releaseDate: "September 20, 2012",
    minimumRequirements: {
      cpu: fill("minimum CPU"),
      ram: fill("minimum RAM"),
      videoCard: fill("minimum video card"),
      diskSpace: fill("minimum disk space"),
    },
  }),
  game("a-way-out", "A Way Out", {
    description:
      "A cinematic action-adventure designed purely for two players. As prisoners Vincent and Leo, you plan a prison break and then go on the run together, playing in local split-screen or online co-op.",
    developer: "Hazelight Studios",
    genre: "Action-adventure, co-op",
    releaseDate: "March 23, 2018",
    minimumRequirements: {
      cpu: "Intel Core i3-2100T @ 2.5 GHz / AMD FX 6100",
      ram: "8 GB",
      videoCard: "NVIDIA GeForce GTX 650 Ti (2 GB) / AMD Radeon HD 7750 (2 GB)",
      diskSpace: "25 GB",
    },
  }),
  game("contraband-police", "Contraband Police", {
    description:
      "A first-person simulation set in 1981 in which you work as a border inspector, checking vehicles and documents at a checkpoint, hunting for smuggled goods, and getting drawn into the criminal world around the border.",
    developer: "Crazy Rocks Studio (published by PlayWay)",
    genre: "Simulation, first-person",
    releaseDate: "March 8, 2023",
    minimumRequirements: {
      cpu: fill("minimum CPU"),
      ram: "12 GB",
      videoCard: fill("minimum video card"),
      diskSpace: "12 GB",
    },
  }),
  game("kena-bridge-of-spirits", "Kena: Bridge of Spirits", {
    description:
      "A story-driven action-adventure in which Kena, a young Spirit Guide, travels to an abandoned village to uncover its past. She is helped by the Rot, small spirit companions, in a mix of exploration, puzzles and fast-paced combat.",
    developer: "Ember Lab",
    genre: "Action-adventure",
    releaseDate: "September 21, 2021",
    minimumRequirements: {
      cpu: "AMD FX-6100 / Intel Core i3-3220 or equivalent",
      ram: "12 GB",
      videoCard: "AMD Radeon R7 360 (2 GB) / NVIDIA GeForce GTX 650 Ti (2 GB) or equivalent",
      diskSpace: "25 GB",
    },
  }),
];

export const getGame = (id) => games.find((g) => g.id === id);
