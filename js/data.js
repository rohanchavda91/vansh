var FAMILY = {
  rootId: "p1",

  people: [
    {
      id: "p1",
      name: "પુનાભાઈ",
      photo: ""
    },
    {
      id: "p1_",
      name: "મણીબેન",
      photo: ""
    },
    {
      id: "p2",
      name: "ભુરાભાઈ ચાવડા",
      photo: "./img/p2.png"
    },
    {
      id: "p2_",
      name: "સવિતાબેન રાઠોડ",
      photo: ""
    },
    {
      id: "p3",
      name: "અમીબેન ચાવડા",
      photo: ""
    },
    {
      id: "p4",
      name: "મંગુબેન ચાવડા",
      photo: ""
    },
    {
      id: "p5",
      name: "દયાબેન ચાવડા",
      photo: ""
    },
    {
      id: "p6",
      name: "પાસુબેન ચાવડા",
      photo: ""
    },
    {
      id: "p7",
      name: "શામબેન ચાવડા",
      photo: ""
    },
    {
      id: "p2_1",
      name: "ભૂપત ચાવડા",
      photo: ""
    },
    {
      id: "p2_2",
      name: "રેખા ચાવડા",
      photo: ""
    },
    {
      id: "p2_1_",
      name: "ગીતા પરમાર",
      photo: "./img/p2_1_.png"
    }, 
    {
      id: "p2_1_1",
      name: "રોહન ચાવડા",
      photo: ""
    },
    {
      id: "p2_1_2",
      name: "અમિત ચાવડા",
      photo: ""
    }


  ],

  marriages: [
    { a: "p1", b: "p1_" },
    { a: "p2", b: "p2_" },
    { a: "p2_1", b: "p2_1_" }
  ],

  parentChild: [
    { 
      parents: ["p1", "p1_"], 
      child: "p2" 
    },
    { 
      parents: ["p1", "p1_"], 
      child: "p3" 
    },
    { 
      parents: ["p1", "p1_"], 
      child: "p4" 
    },
    { 
      parents: ["p1", "p1_"], 
      child: "p5" 
    },
    { 
      parents: ["p2", "p2_"], 
      child: "p2_1" 
    },
    {
      parents: ["p2", "p2_"], 
      child: "p2_2"
    },
    {
      parents: ["p2_1", "p2_1_"], 
      child: "p2_1_1"
    },
    {
      parents: ["p2_1", "p2_1_"], 
      child: "p2_1_2"
    }
  ]
};
