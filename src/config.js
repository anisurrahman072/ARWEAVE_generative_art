const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_Mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth; // change to .sol if use solana

// General metadata for Ethereum
const namePrefix = "Philippines - Soccer Player";
const description =
  "BasementSports is a collection of 32,000 unique BSport NFTs - living on the Polygon Blockchain.";
const baseUri = "######";

// If you have selected Solana then the collection starts from 0 automatically

const JERSY_NUMBERS_FOR_10_EACH = [3, 5, 8, 9, 10, 16, 18, 19, 20, 21];
const JERSY_NUMBERS_FOR_45_EACH = [
  ...[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ].filter((item) => !JERSY_NUMBERS_FOR_10_EACH.includes(item)),
];

const layerConfigurations = [
  //  +++++++++++++ 10 Each Start +++++++++++++
  //  +++++++++++++ 10 Each Start +++++++++++++
  //  +++++++++++++ 10 Each Start +++++++++++++
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[0]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[1]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[2]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[3]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[4]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[5]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 70,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[6]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[7]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[8]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_10_EACH[9]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },

  //  +++++++++++++ 45 Each Start +++++++++++++
  //  +++++++++++++ 45 Each Start +++++++++++++
  //  +++++++++++++ 45 Each Start +++++++++++++
  {
    growEditionSizeTo: 145,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[0]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 190,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[1]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 235,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[2]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 280,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[3]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 325,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[4]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 370,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[5]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 415,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[6]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 460,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[7]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 505,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[8]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 550,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[9]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 595,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[10]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 640,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[11]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 685,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[12]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 730,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[13]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 775,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[14]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 820,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[15]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 865,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[16]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 910,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[17]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 955,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[18]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
      { name: "Hair" },
      { name: "Band" },
      {
        name: "Dominant Leg",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: "Position",
        options: {
          bypassDNA: true,
        },
      },
      {
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_45_EACH[19]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
];

const shuffleLayerConfigurations = false;

// Image Format
const format = {
  width: 1000,
  height: 1000,
  smoothing: true,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000; // change this value

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
};
