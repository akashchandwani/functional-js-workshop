function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(user => goodUsers.some(goodUser => goodUser.id === user.id));
  };
}
/*
let goodUser = [
  {'id':1},
  {'id':2},
  {'id':3},
  {'id':4}
]

let submittedUsers = [
  {'id':1},
  {'id':2}
]

console.log("check for all submitted users in goodUser", checkUsersValid(goodUser)(submittedUsers));

submittedUsers = [
  {'id':1},
  {'id':55}
]

console.log("check for extra submitted users", checkUsersValid(goodUser)(submittedUsers));
*/
module.exports = checkUsersValid;
