const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_Mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth; // change to .sol if use solana

// General metadata for Ethereum
const namePrefix = "BSport - Qatar";
const description =
  "BasementSports is a collection of 32,000 unique BSport NFTs - living on the Polygon Blockchain.";
const baseUri = "######";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
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
        name: "JerseyNumber_1",
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
        name: "JerseyNumber_3",
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
        name: "JerseyNumber_10",
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
        name: "JerseyNumber_11",
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
        name: "JerseyNumber_19",
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
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
        name: "JerseyNumber_2",
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
        name: "JerseyNumber_4",
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
        name: "JerseyNumber_5",
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
        name: "JerseyNumber_6",
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
        name: "JerseyNumber_7",
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },

  // ################
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
        name: "JerseyNumber_8",
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
        name: "JerseyNumber_9",
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
        name: "JerseyNumber_12",
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
        name: "JerseyNumber_13",
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
        name: "JerseyNumber_14",
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },
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
        name: "JerseyNumber_15",
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
        name: "JerseyNumber_16",
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
        name: "JerseyNumber_17",
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
        name: "JerseyNumber_18",
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
        name: "JerseyNumber_20",
        options: {
          displayName: "Jersey Number",
          bypassDNA: true,
        },
      },
    ],
  },

  // ++++++++++++++
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
        name: "JerseyNumber_21",
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
        name: "JerseyNumber_22",
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
        name: "JerseyNumber_23",
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
        name: "JerseyNumber_24",
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
        name: "JerseyNumber_25",
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
        name: "JerseyNumber_26",
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
        name: "JerseyNumber_27",
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
        name: "JerseyNumber_28",
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
        name: "JerseyNumber_29",
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
        name: "JerseyNumber_30",
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
