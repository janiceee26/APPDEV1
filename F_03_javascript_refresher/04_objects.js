const userProfile = {
  username: "Jane",
  friendName: "Celine",
  favoriteNumber: 26,
  displayInfo: function () {
    console.log(`User: ${this.username}, Friend: ${this.friendName}`);
  }
};

userProfile.secondaryFriend = "Charlie";
userProfile.displayInfo();
console.log("Additional friend:", userProfile.secondaryFriend);