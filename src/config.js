const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_Mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth; // change to .sol if use solana

// General metadata for Ethereum
const namePrefix = "BSport - Mexico";
const description =
  "BasementSports is a collection of 32,000 unique BSport NFTs - living on the Polygon Blockchain.";
const baseUri = "######";

// If you have selected Solana then the collection starts from 0 automatically

const JERSY_NUMBERS_FOR_20_EACH = [7, 11, 18, 20, 22];
const JERSY_NUMBERS_FOR_30_EACH = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
const JERSY_NUMBERS_FOR_40_EACH = [
  13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30,
];

const layerConfigurations = [
  //  +++++++++++++ 20 Each Start +++++++++++++
  //  +++++++++++++ 20 Each Start +++++++++++++
  //  +++++++++++++ 20 Each Start +++++++++++++
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_20_EACH[0]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_20_EACH[1]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_20_EACH[2]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_20_EACH[3]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_20_EACH[4]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },

  //  +++++++++++++ 30 Each Start +++++++++++++
  //  +++++++++++++ 30 Each Start +++++++++++++
  //  +++++++++++++ 30 Each Start +++++++++++++
  {
    growEditionSizeTo: 130,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[0]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 160,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[1]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[2]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 220,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[3]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[4]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[5]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 310,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[6]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 340,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[7]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[8]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_30_EACH[9]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },

  //  +++++++++++++ 40 Each Start +++++++++++++
  //  +++++++++++++ 40 Each Start +++++++++++++
  //  +++++++++++++ 40 Each Start +++++++++++++
  {
    growEditionSizeTo: 440,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[0]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 480,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[1]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 520,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[2]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 560,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[3]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 600,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[4]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[5]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 680,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[6]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 720,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[7]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 760,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[8]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 800,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[9]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 840,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[10]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 880,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[11]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 920,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[12]}`,
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
  {
    growEditionSizeTo: 960,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[13]}`,
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
      { name: "Hair" },
      { name: "Mouth" },
      { name: "Eyebrows" },
      { name: "Jersey" },
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
        name: `JerseyNumber_${JERSY_NUMBERS_FOR_40_EACH[14]}`,
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
  width: 400,
  height: 400,
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
