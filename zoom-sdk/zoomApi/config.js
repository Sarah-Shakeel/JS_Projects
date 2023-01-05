const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "w0mr8So4SwGCSD_EXC-YfQ",
    APISecret: "EaegqlqA6cyJeFBaiqgagj3iiahpnlPt1lbU",
  },
};

module.exports = config[env];
