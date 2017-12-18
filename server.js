import express from "express";

export default class Server {
  constructor(port) {
    this.port = port;
    this.app = express();

    this.app.use(express.static("src"));
    this.app.listen(this.port, () => {
      console.log(`[WebVR] ${new Date()} Server listening on port ${this.port}`);
    });
  }
}
