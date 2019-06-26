workflow "Build, Test & Deploy" {
  resolves = ["Deploy"]
  on = "push"
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install --pure-lockfile"
}

action "Test" {
  uses = "Borales/actions-yarn@master"
  needs = ["Install"]
  args = "test"
}

action "Deploy" {
  uses = "Borales/actions-yarn@master"
  needs = ["Test"]
  args = "deploy"
  secrets = ["ROCKETRY_PW"]
}
