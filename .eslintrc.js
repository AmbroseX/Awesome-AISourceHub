module.exports = {
  "extends": ["prettier"], // prettier 等价于 eslint-config-prettier
  "plugins": ["prettier"], // prettier 等价于 eslint-plugins-prettier
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
};
