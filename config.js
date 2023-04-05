const NodeCache = require("node-cache");

const config = {
  pageToken:
    "EAANOlelNYBsBAJJwmOR4BcNoObbdEZAAhXZCAIBZBswI6tuVBjZB6e0eeTx56OJcT3Rky9VKrsxSJ4L4Rff8l27TZA4UmJ9UwXXMRlbf9029izTor2MFkC9vf3lRvILoU527TnCYZADdnu3K5mGuu1JhFOGDUNRewLZCMYf3ZBnR3ZCBcG5aNelwZB", // Đưa token của fanpage của bạn vô đây.
  appSecret: "", // Cái này có thể có hoặc không, nếu có thì nó càng bảo mật.
  verifyToken: "ngocisnumber1", // Nhập cái gì vô đây cũng được nhưng nhớ copy vào Verify Token ở mục Webhooks.
  openai: {
    model: "gpt-3.5-turbo", // Model ChatGPT (gpt-3-turbo, gpt-3, gpt-4)
    token: "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", // API Token của ChatGPT
    max_tokens: 2048, // Bạn có thể thay đổi theo bạn muốn.
  },
  mode: "CHAT", // bạn có thể chỉnh thành IMAGE để bot tạo ảnh nhé.
  baseURL: "https://graph.facebook.com/v16.0",
  ratelimit: new Map(),
  cache: new NodeCache({
    checkperiod: 10000,
    deleteOnExpire: true,
  }),
  port: 5500,
};

module.exports = config;
