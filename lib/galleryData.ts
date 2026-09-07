export type Photo = {
  src: string;
  caption: string;
};

export type Theme = "kitten" | "naps" | "outdoors" | "costumes";

export const themes: Theme[] = ["kitten", "naps", "outdoors", "costumes"];

export const galleryData: Record<Theme, Photo[]> = {
  kitten: [
    { src: "/photos/kitten/01.jpeg", caption: "First week home" },
    { src: "/photos/kitten/02.jpeg", caption: "Too small for the sofa" },
    { src: "/photos/kitten/03.jpeg", caption: "Discovering the window" },
    { src: "/photos/kitten/04.jpeg", caption: "Nap before the chaos" },
    { src: "/photos/kitten/05.jpeg", caption: "Learning to pounce" },
    { src: "/photos/kitten/06.jpeg", caption: "Still smaller than the shoe" },
    { src: "/photos/kitten/07.jpeg", caption: "First staredown with the dog" },
    { src: "/photos/kitten/08.jpeg", caption: "Sunbeam, correctly used" },
    { src: "/photos/kitten/09.jpeg", caption: "Box bigger than the cat" },
    { src: "/photos/kitten/10.jpeg", caption: "Practicing the loaf" },
    { src: "/photos/kitten/11.jpeg", caption: "Post-zoomies collapse" },
    { src: "/photos/kitten/12.jpeg", caption: "Almost a cat now" },
  ],
  naps: [
    { src: "/photos/naps/01.jpeg", caption: "Loaf mode, engaged" },
    { src: "/photos/naps/02.jpeg", caption: "Doesn't count if the eyes are open" },
    { src: "/photos/naps/03.jpeg", caption: "Windowsill, occupied" },
    { src: "/photos/naps/04.jpeg", caption: "Radiator supervision" },
    { src: "/photos/naps/05.jpeg", caption: "Blanket fort, unauthorized" },
    { src: "/photos/naps/06.jpeg", caption: "Sunbeam relocation complete" },
    { src: "/photos/naps/07.jpeg", caption: "Nineteen hours, give or take" },
    { src: "/photos/naps/08.jpeg", caption: "Keyboard now unavailable" },
    { src: "/photos/naps/09.jpeg", caption: "Mid-stretch, paused indefinitely" },
    { src: "/photos/naps/10.jpeg", caption: "Guarding the laundry pile" },
    { src: "/photos/naps/11.jpeg", caption: "Couch cushion, permanently dented" },
    { src: "/photos/naps/12.jpeg", caption: "Still not moving" },
  ],
  outdoors: [
    { src: "/photos/outdoors/01.jpeg", caption: "Supervised backyard patrol" },
    { src: "/photos/outdoors/02.jpeg", caption: "Bird count: high" },
    { src: "/photos/outdoors/03.jpeg", caption: "Grass, inspected thoroughly" },
    { src: "/photos/outdoors/04.jpeg", caption: "Fence line, memorized" },
    { src: "/photos/outdoors/05.jpeg", caption: "Leaf, briefly a threat" },
    { src: "/photos/outdoors/06.jpeg", caption: "Shade negotiated successfully" },
    { src: "/photos/outdoors/07.jpeg", caption: "Gravel path, approved" },
    { src: "/photos/outdoors/08.jpeg", caption: "Watching the neighbor's dog" },
    { src: "/photos/outdoors/09.jpeg", caption: "Porch shift, in progress" },
    { src: "/photos/outdoors/10.jpeg", caption: "Puddle, avoided on principle" },
    { src: "/photos/outdoors/11.jpeg", caption: "Bug surveillance detail" },
    { src: "/photos/outdoors/12.jpeg", caption: "Back inside within the hour" },
  ],
  costumes: [
    { src: "/photos/costumes/01.jpeg", caption: "Pumpkin, not amused" },
    { src: "/photos/costumes/02.jpeg", caption: "Bowtie, tolerated briefly" },
    { src: "/photos/costumes/03.jpeg", caption: "Sweater, worn under protest" },
    { src: "/photos/costumes/04.jpeg", caption: "Santa hat, five seconds" },
    { src: "/photos/costumes/05.jpeg", caption: "Bandana, surprisingly fine with it" },
    { src: "/photos/costumes/06.jpeg", caption: "Cape, superhero status pending" },
    { src: "/photos/costumes/07.jpeg", caption: "Tiny sombrero, no comment" },
    { src: "/photos/costumes/08.jpeg", caption: "Reindeer ears, revenge planned" },
    { src: "/photos/costumes/09.jpeg", caption: "Party hat, removed by force" },
    { src: "/photos/costumes/10.jpeg", caption: "Costume tax, paid in full" },
    { src: "/photos/costumes/11.jpeg", caption: "Dignity, temporarily suspended" },
    { src: "/photos/costumes/12.jpeg", caption: "Never again (until next year)" },
  ],
};
