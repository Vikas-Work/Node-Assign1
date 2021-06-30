Users = {
  UserBasic: {
    std1: "Vikas",
    std2: "Puneet",
    std3: "Aman",
    std4: "Deeksha",
  },
  UserExp: {
    Exp: "Fresher",
    Join: 2021,
  },
  UserPhotos: {
    Photo1: "value1",
    Photo2: "value2",
    Photo3: "value3",
    Photo4: "value4",
  },
  func: function print() {
    console.log("Name of the Students", this.UserBasic);
    console.log("UserExp", this.UserExp);
    console.log("UserPhotos", this.UserPhotos);
  },
};

Users.func();
