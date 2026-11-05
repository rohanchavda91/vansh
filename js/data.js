// ⚠️ Ye DUMMY data hai. Apna asli JSON yahin replace karna.
// Rules: har person ka unique id | photo khali ("") ho to '?' dikhega.
var FAMILY = {
  rootId: "p1",

  people: [
    { id: "p1", name: "Founder",        photo: "" },
    { id: "p2", name: "Founder's Wife", photo: "" },
    { id: "p3", name: "Beta 1",         photo: "", info: "b. 1950" },
    { id: "p4", name: "Beta 1 Wife",    photo: "" },
    { id: "p5", name: "Beti 2",         photo: "" },
    { id: "p6", name: "Beta 3",         photo: "" },
    { id: "p7", name: "Pota 1",         photo: "" },
    { id: "p8", name: "Pota 2",         photo: "" }
  ],

  marriages: [
    { a: "p1", b: "p2" },
    { a: "p3", b: "p4" }
  ],

  parentChild: [
    { parents: ["p1", "p2"], child: "p3" },
    { parents: ["p1", "p2"], child: "p5" },
    { parents: ["p1", "p2"], child: "p6" },
    { parents: ["p3", "p4"], child: "p7" },
    { parents: ["p3", "p4"], child: "p8" }
  ]
};
