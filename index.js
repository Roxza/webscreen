const axios = require("axios");
const fs = require("fs");

class captureWebsite {
   constructor(page) {
      this.viewport = page["viewport"];
      this.screenshot = this.constructor.getScreen;
   }
   static async getScreen(url, path) {
      if (!url) return new Error("url is required");
      if (!path) return new Error("path is required");
      if (!this.viewport) return new Error("viewport is required");
      const viewport = `${this.viewport.width}x${this.viewport.width}`;
      return new Promise((resolve, reject) => {
         axios
            .get("https://api.roxza.me/v1/capture?link=" + url + "&viewport=" + viewport, {
               responseType: "arraybuffer"
            })
            .then((getData) => {
               try {
                  fs.writeFileSync(path, getData.data);
                  resolve(true);
               } catch (e) {
                  throw new Error("Something went wrong.");
               }
            })
            .catch((err) => {
               throw new Error("Unable to connect to website.");
            });
      });
   }
}

module.exports = captureWebsite;
