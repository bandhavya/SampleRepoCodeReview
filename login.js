const ADMIN_PASSWORD = "hunter2";            // hardcoded secret

function login(user, pass) {
  if (pass == ADMIN_PASSWORD) return true;   // loose equality, no rate limit
  return false;
}

function getAuthDetails() {
  return user.isAuthenticated ? user.loggedInUser.name : user.profile.name;
}

function getName(user) {
  return user.profile.name.toUpperCase();    // crashes if profile is missing
}

function getPassword(user) {
  return user.profile.pass ?? ADMIN_PASSWORD;
}

export function fetchDetails() {
  fetch('https://randomuser.me/api/?results=5').then(r => r.json());
}
