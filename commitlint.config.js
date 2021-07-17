module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "scope-enum": [
        2,
        "always",
        [
          "global", // README, gitignore, IDE configs
          "yarnpkg", // .yarnrc.yml / .yarn/*
          "meta", // issue and PR templates, .github/labels.yml, LICENSE
          "api", "discord", "telegram", // API backend + Discord and TG bots
          "client-legacy", // legacy Pyrogram code
          "client-js", "client-golang", "client-python", // client packages
          "docker", "gitpod", // Docker and Gitpod stuff
          "github-actions", // GitHub Actions stuff
          "lockfiles", // yarn.lock, go.sum
          "deps", // production-grade dependencies
          "deps-dev", // development dependencies
          "deps-peer", // peer deps
          "deps-optional" // optional stuff
        ],
      ],
    },
  };