// Function to get the correct file extension
const getFileExtension = (name) => {
  if (name.includes('.jpeg')) return 'jpeg';
  if (name.includes('.jpg')) return 'jpg';
  if (name.includes('.png')) return 'png';
  if (name.includes('.webp')) return 'webp';
  // Default to jpeg if no extension in name
  return 'jpeg';
};

// Function to get all images from a specific category
export const getImagesByCategory = (category) => {
  // List of image names for each category
  const southGraniteImages = [
    { name: '1.-ABSOLUTE-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '2.-NOVA-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '3.-BLACK-GALAXY-GRANITE-300x300', ext: 'jpeg' },
    { name: '4.-TAN-BROWN-GRANITE-300x300', ext: 'jpg' },
    { name: '5.-THUNDER-WHITE-GRANITE-300x300', ext: 'jpg' },
    { name: '6.-STEEL-GREY-GRANITE-300x300', ext: 'jpg' },
    { name: '7.-VISCON-WHITE-GRANITE-300x300', ext: 'jpg' },
    { name: '8.-IMPALA-BLACK-GRANITE-300x300', ext: 'jpg' },
    { name: '9.-SAPPHIRE-BLUE-GRANITE-300x300', ext: 'jpeg' },
    { name: '10.-Indian-Red-Granite-South-India-300x300', ext: 'webp' },
    { name: '11.-MULTI-COLOR-GRANITE-300x300', ext: 'png' },
    { name: '12.-CHAMRAJNAGAR-BLACK-GRANITE-1-300x300', ext: 'jpeg' },
    { name: '13.-COLONIAL-WHITE-GRANITE-300x300', ext: 'jpeg' },
    { name: '14.-HASSAN-GREEN-GRANITE-300x300', ext: 'jpg' },
    { name: '15.-LAVENDER-BLUE-GRANITE-300x300', ext: 'jpg' },
    { name: '16.-VIZAG-BLUE-GRANITE-300x300', ext: 'jpeg' },
    { name: '17.-IVORY-BROWN-GRANITE-300x300', ext: 'jpg' },
    { name: '18.-G18-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '19.-G20-BLACK-GRANITE-300x300', ext: 'jpg' },
    { name: '20.-HIMALAYAN-BLUE-GRANITE-300x300', ext: 'jpg' },
    { name: '21.-Cera-Grey-Granite-South-India-300x300', ext: 'jpg' },
    { name: '22.-BLACK-FOREST-GRANITE-Custom-300x300', ext: 'jpeg' },
    { name: '23.-INDIAN-AURORA-GRANITE-300x300', ext: 'jpg' },
    { name: '24.-MOON-WHITE-GRANITE-300x300', ext: 'jpg' },
    { name: '25.-PARADISO-CLASSIC-GRANITE-300x300', ext: 'jpg' },
    { name: '26.-KHAMMAM-BLACK-GRANITE-300x300', ext: 'jpg' },
    { name: '27.-PREMIUM-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '28.-BASH-PARADISO-GRANITE-300x300', ext: 'jpg' },
    { name: '29.-CATS-EYE-GRANITE-300x300', ext: 'jpg' },
    { name: '30.-COFFEE-BROWN-GRANITE-300x300', ext: 'jpg' },
    { name: '31.-BLACK-PEARL-GRANITE-300x300', ext: 'jpg' },
    { name: '32.-VOLGA-BLUE-GRANITE-300x300', ext: 'jpeg' },
    { name: '34.-KUPPAM-GREEN-GRANITE-300x300', ext: 'jpeg' },
    { name: '35.-INDIAN-MAHAGONY-GRANITE-300x300', ext: 'jpeg' },
    { name: '36.-RAW-SILK-GRANITE-300x300', ext: 'jpg' },
    { name: '37.-SADARAHALLI-GREY-GRANITE-300x300', ext: 'jpeg' },
    { name: '38.-SAPPHIRE-BROWN-GRANITE-300x300', ext: 'jpg' },
    { name: '39.-FUSION-GOLD-GRANITE-300x300', ext: 'jpg' },
    { name: '40.-COLOMBO-JUPRANA-GRANITE-300x300', ext: 'jpg' },
    { name: 'Astoria-300x300', ext: 'jpg' },
    { name: 'Blue-pearl-300x300', ext: 'png' },
    { name: 'Kashmir-White-Granite-300x300', ext: 'jpg' },
    { name: 'Ruby-Red-Granite-300x300', ext: 'png' }
  ];

  const graniteImages = [
    { name: '1.-RAJASTHAN-BLACK-GRANITE-1-1-300x300', ext: 'jpeg' },
    { name: '2.-ALASKA-WHITE-GRANITE-1-300x300', ext: 'jpg' },
    { name: '3.-P-WHITE-GRANITE-1-300x300', ext: 'jpg' },
    { name: '4.-IMPERIAL-RED-GRANITE-1-300x300', ext: 'jpeg' },
    { name: '5.-FISH-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '6.-TITANIUM-GOLD-GRANITE-1-300x300', ext: 'jpg' },
    { name: '7.-BLACK-MARCINO-GRANITE-300x300', ext: 'jpeg' },
    { name: '8.-NEW-IMPERIAL-RED-GRANITE-300x300', ext: 'jpeg' },
    { name: '9.-ALASKA-GOLD-GRANITE-North-India-300x300', ext: 'jpg' },
    { name: '10.-AZUL-WHITE-GRANITE-300x300', ext: 'jpeg' },
    { name: '11.-Tiger-Skin-Granite-North-India-300x300', ext: 'jpg' },
    { name: '12.-BLUE-DUNES-GRANITE-1-300x300', ext: 'jpg' },
    { name: '13.-ROSY-PINK-GRANITE-300x300', ext: 'jpg' },
    { name: '14.-THUNDER-BLACK-GRANITE-300x300', ext: 'jpeg' },
    { name: '16.-BIANCO-WHITE-GRANITE-300x300', ext: 'jpeg' },
    { name: '17.-CRYSTAL-YELLOW-GRANITE-300x300', ext: 'jpg' },
    { name: '18.-CHIMA-PINK-GRANITE-300x300', ext: 'jpg' },
    { name: '19.-Koliwada-Blue-Granite-North-India-300x300', ext: 'jpg' },
    { name: '20.-ALASKA-RED-GRANITE-300x300', ext: 'jpg' },
    { name: '21.-DESERT-BROWN-GRANITE-300x300', ext: 'jpeg' },
    { name: '23.-CRYSTAL-BLUE-GRANITE-300x300', ext: 'jpg' },
    { name: '24.-LAKHA-RED-GRANITE-300x300', ext: 'jpg' },
    { name: '25.-CRYSTAL-BROWN-GRANITE-300x300', ext: 'jpeg' },
    { name: '26.-MONTE-CRISTO-GRANITE-300x300', ext: 'jpg' },
    { name: '27.-JHANSI-RED-GRANITE-300x300', ext: 'jpg' },
    { name: '28.-TROPICAL-BLUE-GRANITE-300x300', ext: 'jpg' },
    { name: '29.-COIN-BLACK-GRANITE-300x300', ext: 'jpg' },
    { name: '30.-ALASKA-PINK-GRANITE-300x300', ext: 'jpg' },
    { name: '31.-IMPERIAL-WHITE-GRANITE-300x300', ext: 'webp' },
    { name: '32.-BIANCO-GOLD-GRANITE-300x300', ext: 'jpg' },
    { name: '33.-COPPER-SILK-GRANITE-300x300', ext: 'webp' },
    { name: '34.-MALWADA-GRANITE-300x300', ext: 'webp' },
    { name: '35.-JASMINE-WHITE-GRANITE-300x300', ext: 'webp' },
    { name: '36.-DESERT-GOLD-GRANITE-300x300', ext: 'jpg' },
    { name: '37.-APPLE-GREEN-GRANITE-300x300', ext: 'jpg' },
    { name: '38.-IVORY-FANTASY-GRANITE-300x300', ext: 'jpg' }
  ];

  const graniteBlocks = [
    { name: '1.-ABSOLUTE-BLACK-300x300', ext: 'jpg' },
    { name: '2.-HIMALAYAN-BLUE-300x300', ext: 'jpg' },
    { name: '3.-BLACK-GALAXY-300x300', ext: 'jpg' },
    { name: '4.-BLUE-DUNES-300x300', ext: 'jpg' },
    { name: '5.-KUPPAM-GREEN-300x300', ext: 'jpg' },
    { name: '6.-VIZAG-BLUE-300x300', ext: 'jpg' },
    { name: '7.-VISCON-WHITE-300x300', ext: 'jpg' },
    { name: '8.-RIVER-BLUE-300x300', ext: 'jpg' },
    { name: '9.-RIVER-WHITE-300x300', ext: 'jpg' },
    { name: '10.-RED-MULTICOLOR-300x300', ext: 'jpg' },
    { name: '11.-BLACK-MARKINO-300x300', ext: 'jpg' },
    { name: '12.-COLOMBO-JUPRANA-300x300', ext: 'jpg' },
    { name: '13.-IMPALA-BLACK-300x300', ext: 'jpg' },
    { name: '14.-INDIAN-AURORA-300x300', ext: 'jpg' },
    { name: '15.-IVORY-BROWN-300x300', ext: 'jpg' },
    { name: '16.-CLASSIC-PARADISO-300x300', ext: 'jpg' },
    { name: '17.-BASH-PARADISO-300x300', ext: 'jpg' },
    { name: '18.-ALPINE-WHITE-300x300', ext: 'jpg' },
    { name: '19.-ALASKA-YELLOW-300x300', ext: 'jpg' },
    { name: '20.-ALASKA-WHITE-300x300', ext: 'jpg' },
    { name: '21.-COLONIAL-WHITE-300x300', ext: 'jpg' },
    { name: '22.-INDIAN-BROWN-300x300', ext: 'jpg' },
    { name: '23.-TAN-BROWN-300x300', ext: 'jpg' },
    { name: '24.-ROSY-PINK-300x300', ext: 'jpg' },
    { name: '25.-RAW-SILK-300x300', ext: 'jpg' },
    { name: '26.-VOLGA-BLUE-300x300', ext: 'jpg' },
    { name: '27.-IVORY-CREAM-300x300', ext: 'jpg' }
  ];

  const graniteCutterSlabs = [
    { name: '1.-ABSOLUTE-BLACK-GRANITE-2-300x281', ext: 'jpg' },
    { name: '2.-BLACK-GALAXY-GRANITE-300x281', ext: 'jpg' },
    { name: '3.-VISCON-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '4.-IMPERIAL-RED-GRANITE-300x281', ext: 'jpg' },
    { name: '5.-HIMALAYAN-BLUE-GRANITE-300x281', ext: 'jpg' },
    { name: '6.-ALASKA-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '7.-IVORY-BROWN-GRANITE-300x281', ext: 'jpg' },
    { name: '8.-P-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '9.-ALASKA-GOLD-300x281', ext: 'jpg' },
    { name: '10.-IMPERIAL-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '11.-AZUL-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '12.-HASSAN-GREEN-GRANITE-300x281', ext: 'jpg' },
    { name: '13.-MOON-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '14.-SADARHALLI-GREEN-GRANITE-300x281', ext: 'jpg' },
    { name: '15.-RIVER-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '16.-MULTI-RED-GRANITE-300x281', ext: 'jpg' },
    { name: '17.-BLACK-MARKINO-GRANITE-300x281', ext: 'jpg' },
    { name: '18.-STEEL-GREY-GRANITE-300x281', ext: 'jpg' },
    { name: '19.-JASMINE-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '20.-RAW-SILK-GRANITE-300x281', ext: 'jpg' },
    { name: '21.-VOLGA-BLUE-GRANITE-300x281', ext: 'jpg' },
    { name: '22.-TITANIUM-GOLD-300x281', ext: 'jpg' },
    { name: '23.-FISH-BLACK-GRANITE-300x281', ext: 'jpg' },
    { name: '24.-ALASKA-PINK-GRANITE-300x281', ext: 'jpg' },
    { name: '25.-IVORY-FANTASY-GRANITE-300x281', ext: 'jpg' },
    { name: '26.-TAN-BROWN-GRANITE-300x281', ext: 'jpg' },
    { name: '27.-TIGER-SKIN-GRANITE-300x281', ext: 'jpg' },
    { name: '28.-BIANCO-GOLD-GRANITE-300x281', ext: 'jpg' },
    { name: '29.-BLACK-FOREST-GRANITE-300x281', ext: 'jpg' },
    { name: '30.-COIN-BLACK-GRANITE-300x281', ext: 'jpg' },
    { name: '31.-ROSY-PINK-GRANITE-300x281', ext: 'jpg' },
    { name: 'astoria-cutter-300x281', ext: 'jpg' }
  ];

  const graniteGangsawSlabs = [
    { name: '3.-MOON-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '4.-VIZAG-BLUE-GRANITE-300x281', ext: 'jpg' },
    { name: '5.-VISCON-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '6.-TITANIUM-GOLD-GRANITE-300x281', ext: 'jpg' },
    { name: '7.-TAN-BROWN-GRANITE-300x281', ext: 'jpg' },
    { name: '8.-STEEL-GREY-GRANITE-300x281', ext: 'jpg' },
    { name: '9.-BLACK-GALAXY-GRANITE-300x281', ext: 'jpg' },
    { name: '10.-AZUL-NOVA-GRANITE-1-300x281', ext: 'jpg' },
    { name: '11.-FANTASY-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '12.-INDIAN-SATWARIO-GRANITE-300x281', ext: 'jpg' },
    { name: '13.-MAGIC-BLACK-GRANITE-300x281', ext: 'jpg' },
    { name: '14.-MONALISA-GRANITE-300x281', ext: 'jpg' },
    { name: '15.-MONTE-CRISTO-GRANITE-300x281', ext: 'jpg' },
    { name: '16.-MERCURY-GRANITE-300x281', ext: 'jpg' },
    { name: '17.-EXOTIC-GRANITE-300x281', ext: 'jpg' },
    { name: '18.-BRUNA-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '20.-BLACK-FOREST-GRANITE-2-300x281', ext: 'jpg' },
    { name: '21.-LAVA-GRANITE-300x281', ext: 'jpg' },
    { name: '22.-CYPRESS-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '23.-CALCUTTA-LATE-GRANITE-300x281', ext: 'jpg' },
    { name: '24.-FANTASY-BROWN-GRANITE-300x281', ext: 'jpg' },
    { name: '25.-LAVENDER-BLUE-GRANITE-300x281', ext: 'jpg' },
    { name: '26.-RIVER-BLUE-GRANITE-300x281', ext: 'jpg' },
    { name: '27.-RIVER-WHITE-GRANITE-300x281', ext: 'jpg' },
    { name: '28.-SILVER-FANTASY-GRANITE-300x281', ext: 'jpg' },
    { name: '29.-ARIZONA-GOLD-GRANITE-1-300x281', ext: 'jpg' },
    { name: '30.-LAVA-AURA-GRANITE-300x281', ext: 'jpg' },
    { name: '31.-MANGO-GRANITE-300x281', ext: 'jpg' },
    { name: '38.-SOAP-STONE-GRANITE-300x281', ext: 'jpg' },
    { name: '39.-PANDA-WHITE-300x281', ext: 'jpg' },
    { name: '40.-RAIN-FOREST-BROWN-300x281', ext: 'jpg' },
    { name: 'havana-300x281', ext: 'png' },
    { name: 'Astoria-Granite-Gangsaw-Slab-300x300', ext: 'webp' }
  ];

  const limestoneImages = [
    { name: '1.-Tandur-Yellow-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '2.-Kota-Blue-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '3.-Lime-Black-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '4.-Lime-Pink-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '5.-Kurnool-Grey-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '6.-Yellow-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '7.-Kota-Brown-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '8.-Tandur-Brown-Limestone-300x300', ext: 'jpg' },
    { name: '9.-Kota-Honey-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '10.-Tandur-Blue-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '11.-Kadappa-Black-Limestone-rotated-1-300x300', ext: 'jpg' },
    { name: '12.-Green-Limestone-300x300', ext: 'jpg' }
  ];

  const marbleImages = [
    { name: '1.-FOREST-GREEN-300x300', ext: 'jpg' },
    { name: '2.-FANTASY-BROWN-300x300', ext: 'jpg' },
    { name: '3.-BRUNO-WHITE-300x300', ext: 'webp' },
    { name: '4.-SPIDER-GREEN-300x300', ext: 'jpg' },
    { name: '5.-RAIN-FOREST-BROWN-300x300', ext: 'jpg' },
    { name: '6.-WHITE-FANTASY-300x300', ext: 'jpg' },
    { name: '7.-HIMALAYAN-ONYX-300x300', ext: 'jpeg' },
    { name: '7.-RAIN-FOREST-GREEN-300x300', ext: 'jpg' },
    { name: '8.-SPIDER-GREEN-DARK-300x300', ext: 'jpg' },
    { name: '9.-GREEN-ONYX-300x300', ext: 'jpg' },
    { name: '10.-PANDA-WHITE-300x300', ext: 'jpg' },
    { name: '11.-BANSWARA-WHITE-300x300', ext: 'jpg' },
    { name: '12.-DIANA-MARBLE-300x300', ext: 'jpg' },
    { name: '13.-WHITE-ONYX-300x300', ext: 'jpg' },
    { name: '14.-BOTTOCHINO-300x300', ext: 'jpg' },
    { name: '15.-FLAMINGO-300x300', ext: 'jpg' },
    { name: '16.-JADE-GREEN-ONYX-300x300', ext: 'jpg' },
    { name: '17.-MARINE-BLACK-300x300', ext: 'jpg' },
    { name: '18.-RIVER-BLUE-300x300', ext: 'jpg' },
    { name: '19.-STATUARIO-MARBLE-300x300', ext: 'jpg' },
    { name: '20.-DARK-EMPERADOR-300x300', ext: 'jpg' },
    { name: '21.-PINK-ONYX-300x300', ext: 'jpg' },
    { name: '22.-CLOUD-GREY-300x300', ext: 'jpg' },
    { name: '23.-CARBON-BLACK-300x300', ext: 'jpg' },
    { name: '24.-TORONTO-BROWN-300x300', ext: 'jpg' },
    { name: '25.-MILLENIUM-GREY-300x300', ext: 'jpg' }
  ];

  const monumentImages = [
    { name: '1.-Angel-Engraved-Black-Granite-Monument-300x300', ext: 'jpg' },
    { name: '2.-Triple-Heart-Granite-Headstone-300x300', ext: 'jpg' },
    { name: '3.-European-Styled-Premium-Black-Granite-Monument-300x300', ext: 'jpg' },
    { name: '5.-Angel-Heart-Upright-Memorial-300x300', ext: 'jpg' },
    { name: '6.-European-Styled-Granite-Monument-300x300', ext: 'jpg' },
    { name: '7.-Heart-Shaped-Black-Granite-Monument-1-300x300', ext: 'jpg' },
    { name: '8.-Indian-Red-Headstone-with-Base-300x300', ext: 'jpg' },
    { name: '9.-USA-Flag-Replica-Granite-Monument-300x300', ext: 'jpg' },
    { name: '10.-European-Styled-Cross-Engraved-Granite-Monument-300x300', ext: 'jpg' },
    { name: '11.-Black-Granite-Headstone-with-Base-300x300', ext: 'jpg' },
    { name: '12.-Black-Granite-Monument-300x300', ext: 'jpg' },
    { name: '15.-European-Styled-Granite-Monument-2-300x300', ext: 'jpg' },
    { name: '16.-Cera-Grey-Headstone-with-Base-300x300', ext: 'jpg' },
    { name: '17.-Customised-Granite-Headstone-300x300', ext: 'jpg' },
    { name: '19.-Russian-Styled-Black-Granite-Monument-300x300', ext: 'jpg' },
    { name: '20.-Cross-Shaped-Monument-300x300', ext: 'jpg' },
    { name: '21.-Angel-Shaped-Headstone-300x300', ext: 'jpg' },
    { name: '22.-Mahagani-Brown-Granite-Headstone-with-Base-300x300', ext: 'jpg' },
    { name: '23.-Heart-Shaped-Vizag-Blue-Granite-Monument-300x300', ext: 'jpg' },
    { name: '24.-Jet-Black-Granite-Headstone-with-Base-1-300x300', ext: 'jpg' },
    { name: '25.-Customised-Black-Granite-Monument-300x300', ext: 'jpg' },
    { name: '26.-Blue-Pearl-Headstone-300x300', ext: 'jpg' },
    { name: '27.-Black-Granite-Headstone-with-Rockpitch-Finish-Base-300x300', ext: 'jpg' },
    { name: '28.-Black-Granite-Monument-2-300x300', ext: 'jpg' },
    { name: '29.-Tree-Shaped-Granite-Monument-300x300', ext: 'jpg' },
    { name: '30.-Vases-300x300', ext: 'jpg' },
    { name: '31.-Customised-Granite-Monument-300x300', ext: 'jpg' },
    { name: '32.-Black-Granite-Tombstone-300x300', ext: 'jpg' },
    { name: '33.-Angel-Shaped-Granite-Monument-300x300', ext: 'jpg' }
  ];

  const sandstoneImages = [
    { name: '1.-Rainbow-Sandstone-300x300', ext: 'jpg' },
    { name: '2.-Golden-Buff-Sandstone-300x300', ext: 'jpg' },
    { name: '3.-Sagar-Black-Sandstone-300x300', ext: 'jpg' },
    { name: '4.-White-Mint-Sandstone-300x300', ext: 'jpg' },
    { name: '5.-Teakwood-Sandstone-300x300', ext: 'jpg' },
    { name: '6.-Jodhpur-Red-Sandstone-300x300', ext: 'jpg' },
    { name: '7.-Raj-Green-Sandstone-300x300', ext: 'jpg' },
    { name: '8.-Peach-Blossom-Sandstone-300x300', ext: 'jpg' },
    { name: '9.-Desert-Yellow-Sandstone-300x300', ext: 'jpg' },
    { name: '10.-Flowery-Gold-Sandstone-300x300', ext: 'jpg' },
    { name: '11.-Lalitpur-Yellow-Sandstone-300x300', ext: 'jpg' },
    { name: '12.-Modak-Sandstone-300x300', ext: 'jpg' },
    { name: '13.-Radiant-Red-Sandstone-300x300', ext: 'jpg' },
    { name: '14.-Lalitpur-Grey-Sandstone-300x300', ext: 'jpg' },
    { name: '15.-Dholpur-Beige-Sandstone-300x300', ext: 'jpg' },
    { name: '16.-Agra-Red-Sandstone-300x300', ext: 'jpg' }
  ];

  const slateImages = [
    { name: '1.-Copper-Slate-1-300x300', ext: 'jpg' },
    { name: '2.-Yellow-Multi-Slate-300x300', ext: 'jpg' },
    { name: '3.-Silver-Shine-Slate-300x300', ext: 'jpg' },
    { name: '4.-Red-Slate-300x300', ext: 'jpg' },
    { name: '5.-Black-Slate-300x300', ext: 'jpg' },
    { name: '6.-Golden-Slate-300x300', ext: 'jpg' },
    { name: '7.-Indian-Autumn-Slate-300x300', ext: 'jpg' },
    { name: '8.-Indian-Multicolor-Slate-300x300', ext: 'jpg' },
    { name: '9.-Pure-Pink-Slate-300x300', ext: 'jpg' },
    { name: '10.-Ocean-Green-Slate-300x300', ext: 'jpg' },
    { name: '11.-Premium-Black-Slate-300x300', ext: 'jpg' },
    { name: '12.-Silver-Grey-Slate-300x300', ext: 'jpg' },
    { name: '13.-Rosa-Slate-300x300', ext: 'jpg' },
    { name: '14.-Multi-Pink-Slate-300x300', ext: 'jpg' },
    { name: '15.-Chocolate-Slate-300x300', ext: 'jpg' },
    { name: '16.-Deoli-Green-Slate-300x300', ext: 'jpg' }
  ];

  // Return the appropriate list based on the category
  if (category === 'south-granite') {
    return southGraniteImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').trim(),
      path: `/images/south_granite_images/${item.name}.${item.ext}`,
      category: 'south-granite'
    }));
  } else if (category === 'granite') {
    return graniteImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').trim(),
      path: `/images/granite_images/${item.name}.${item.ext}`,
      category: 'granite'
    }));
  } else if (category === 'granite-blocks') {
    return graniteBlocks.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' '),
      path: `/images/granite-blocks/${item.name}.${item.ext}`,
      category: 'granite-blocks'
    }));
  } else if (category === 'granite-cutter-slabs') {
    return graniteCutterSlabs.map(item => ({
      name: item.name.split('-300x281')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' ').replace(' 2', ''),
      path: `/images/granite-cutter-slabs/${item.name}.${item.ext}`,
      category: 'granite-cutter-slabs'
    }));
  } else if (category === 'granite-gangsaw-slabs') {
    return graniteGangsawSlabs.map(item => ({
      name: item.name.split('-300x28')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' ').replace(' 1', '').replace(' 2', ''),
      path: `/images/granite-gangsaw-slabs/${item.name}.${item.ext}`,
      category: 'granite-gangsaw-slabs'
    }));
  } else if (category === 'limestone') {
    return limestoneImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-rotated-1$/, '').replace(/-/g, ' '),
      path: `/images/limestone/${item.name}.${item.ext}`,
      category: 'limestone'
    }));
  } else if (category === 'marble') {
    return marbleImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' '),
      path: `/images/marble/${item.name}.${item.ext}`,
      category: 'marble'
    }));
  } else if (category === 'monuments') {
    return monumentImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' '),
      path: `/images/monuments/${item.name}.${item.ext}`,
      category: 'monuments'
    }));
  } else if (category === 'sandstone') {
    return sandstoneImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' '),
      path: `/images/sandstone/${item.name}.${item.ext}`,
      category: 'sandstone'
    }));
  } else if (category === 'slate') {
    return slateImages.map(item => ({
      name: item.name.split('-300x300')[0].replace(/[0-9]+\.-/g, '').replace(/-/g, ' '),
      path: `/images/slate/${item.name}.${item.ext}`,
      category: 'slate'
    }));
  }

  return [];
};

// Function to get all images from all categories
export const getAllImages = () => {
  return [
    ...getImagesByCategory('south-granite'),
    ...getImagesByCategory('granite'),
    ...getImagesByCategory('granite-blocks'),
    ...getImagesByCategory('granite-cutter-slabs'),
    ...getImagesByCategory('granite-gangsaw-slabs'),
    ...getImagesByCategory('limestone'),
    ...getImagesByCategory('marble'),
    ...getImagesByCategory('monuments'),
    ...getImagesByCategory('sandstone'),
    ...getImagesByCategory('slate')
  ];
}; 