export type Photo = {
  src: string;
  caption: string;
};

export type Theme = "kitten" | "naps" | "outdoors" | "costumes";

export const themes: Theme[] = ["kitten", "naps", "outdoors", "costumes"];

export const galleryData: Record<Theme, Photo[]> = {
  kitten: [
    { src: "/photos/kitten/01.jpg", caption: "First week home" },
    { src: "/photos/kitten/02.jpg", caption: "Too small for the sofa" },
    { src: "/photos/kitten/03.jpg", caption: "Discovering the window" },
    { src: "/photos/kitten/04.jpg", caption: "Nap before the chaos" },
    { src: "/photos/kitten/05.jpg", caption: "Learning to pounce" },
    { src: "/photos/kitten/06.jpg", caption: "Still smaller than the shoe" },
    { src: "/photos/kitten/07.jpg", caption: "First staredown with the dog" },
    { src: "/photos/kitten/08.jpg", caption: "Sunbeam, correctly used" },
    { src: "/photos/kitten/09.jpg", caption: "Box bigger than the cat" },
    { src: "/photos/kitten/10.jpg", caption: "Practicing the loaf" },
    { src: "/photos/kitten/11.jpg", caption: "Post-zoomies collapse" },
    { src: "/photos/kitten/12.jpg", caption: "Almost a cat now" },
  ],
  naps: [
    { src: "/photos/naps/01.jpg", caption: "Loaf mode, engaged" },
    { src: "/photos/naps/02.jpg", caption: "Doesn't count if the eyes are open" },
    { src: "/photos/naps/03.jpg", caption: "Windowsill, occupied" },
    { src: "/photos/naps/04.jpg", caption: "Radiator supervision" },
    { src: "/photos/naps/05.jpg", caption: "Blanket fort, unauthorized" },
    { src: "/photos/naps/06.jpg", caption: "Sunbeam relocation complete" },
    { src: "/photos/naps/07.jpg", caption: "Nineteen hours, give or take" },
    { src: "/photos/naps/08.jpg", caption: "Keyboard now unavailable" },
    { src: "/photos/naps/09.jpg", caption: "Mid-stretch, paused indefinitely" },
    { src: "/photos/naps/10.jpg", caption: "Guarding the laundry pile" },
    { src: "/photos/naps/11.jpg", caption: "Couch cushion, permanently dented" },
    { src: "/photos/naps/12.jpg", caption: "Still not moving" },
  ],
  outdoors: [
    { src: "/photos/outdoors/01.jpg", caption: "Supervised backyard patrol" },
    { src: "/photos/outdoors/02.jpg", caption: "Bird count: high" },
    { src: "/photos/outdoors/03.jpg", caption: "Grass, inspected thoroughly" },
    { src: "/photos/outdoors/04.jpg", caption: "Fence line, memorized" },
    { src: "/photos/outdoors/05.jpg", caption: "Leaf, briefly a threat" },
    { src: "/photos/outdoors/06.jpg", caption: "Shade negotiated successfully" },
    { src: "/photos/outdoors/07.jpg", caption: "Gravel path, approved" },
    { src: "/photos/outdoors/08.jpg", caption: "Watching the neighbor's dog" },
    { src: "/photos/outdoors/09.jpg", caption: "Porch shift, in progress" },
    { src: "/photos/outdoors/10.jpg", caption: "Puddle, avoided on principle" },
    { src: "/photos/outdoors/11.jpg", caption: "Bug surveillance detail" },
    { src: "/photos/outdoors/12.jpg", caption: "Back inside within the hour" },
  ],
  costumes: [
    { src: "/photos/costumes/01.jpg", caption: "Pumpkin, not amused" },
    { src: "/photos/costumes/02.jpg", caption: "Bowtie, tolerated briefly" },
    { src: "/photos/costumes/03.jpg", caption: "Sweater, worn under protest" },
    { src: "/photos/costumes/04.jpg", caption: "Santa hat, five seconds" },
    { src: "/photos/costumes/05.jpg", caption: "Bandana, surprisingly fine with it" },
    { src: "/photos/costumes/06.jpg", caption: "Cape, superhero status pending" },
    { src: "/photos/costumes/07.jpg", caption: "Tiny sombrero, no comment" },
    { src: "/photos/costumes/08.jpg", caption: "Reindeer ears, revenge planned" },
    { src: "/photos/costumes/09.jpg", caption: "Party hat, removed by force" },
    { src: "/photos/costumes/10.jpg", caption: "Costume tax, paid in full" },
    { src: "/photos/costumes/11.jpg", caption: "Dignity, temporarily suspended" },
    { src: "/photos/costumes/12.jpg", caption: "Never again (until next year)" },
  ],
};
