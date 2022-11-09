const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth; // change to .sol if use solana

// General metadata for Ethereum
const namePrefix = "Best Collection";
const description = "The Nft Collection";
const baseUri =
  "https://5mikjzrs5iolgscx44x5dpdjj7fib5mhgmxmsvkthqtqn5lgtjrq.arweave.net/6xCk5jLqHLNIV-cv0bxpT8qA9YczLslVUzwnBvVmmmM";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Flag" },
      { name: "Skin" },
      { name: "Hair" },
      { name: "FacialHair" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Jersey" },
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
