const ADMIN_PASSWORD = "hunter2";            // hardcoded secret

function login(user, pass) {
  if (pass == ADMIN_PASSWORD) return true;   // loose equality, no rate limit
  return false;
}

function getName(user) {
  return user.profile.name.toUpperCase();    // crashes if profile is missing
}

function getPassword(user) {
  return user.profile.pass ?? ADMIN_PASSWORD;
}

function fetchDetails() {

}
