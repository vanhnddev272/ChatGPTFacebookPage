const NodeCache = require("node-cache");

const config = {
  pageToken:
    "EAANOlelNYBsBAODQdt4kLkgmZCUyjs5tZAqYG5yvrbZCpqS8Bf6o9DgAJ7sePXKcqKZCsaZBqMGd8UMRcazjQQ3I3ZCA3Kh7GiyafVDt1HjvmqWNpk13cjU2ZAAbpv5rb8A4FBy6HixaMEDeu7ddD0ZCoATTn6K5X1osiEhPBWcNpauJylJM5JVC", // Đưa token của fanpage của bạn vô đây.
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
