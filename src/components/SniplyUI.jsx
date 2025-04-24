import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const fontOptions = [
  "font-mono",
  "font-sans",
  "font-serif",
  "font-audiowide",
  "font-greatvibes",
  "font-caveat",
  "font-courier",
  "font-dancing",
  "font-electrolize",
  "font-lavishly",
  "font-playfair",
  "font-roboto",
  "font-tangerine",
];

const SniplyUI = ({
  orgurl,
  setorg,
  shortUrl,
  generate,
  copyToClipboard,
  setting,
  setSetting,
  bgcolor,
  Setbgcolor,
  textcolor,
  Settextcolor,
  bgcolorweb,
  Setbgcolorweb,
  font,
  setFont,
}) => {
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgcolorweb }}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <motion.div
          initial={{ y: -920, x: -620, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full md:w-[1200px] p-8 flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl"
          style={{ backgroundColor: bgcolor }}
        >
          <h2
            className={`text-5xl font-semibold m-5 mt-10 ${font}`}
            style={{ color: textcolor }}
          >
            Sniply
          </h2>
          <p
            className={`p-10 text-xl text-center ${font}`}
            style={{ color: textcolor }}
          >
            Tired of remembering and sharing long URLs? Shorten them instantly
            with Sniply!
          </p>
          <input
            type="text"
            className={`p-3 m-2 w-full md:w-[600px] rounded-2xl bg-gray-100 dark:bg-[#292929] ${font}`}
            placeholder="Enter your long URL"
            value={orgurl}
            onChange={(e) => setorg(e.target.value)}
          />
          <button
            className={`px-10 py-4 bg-blue-400 text-white rounded-2xl m-5 ${font}`}
            onClick={generate}
          >
            Submit
          </button>
          <input
            type="text"
            className={`p-3 m-2 w-full md:w-[600px] rounded-2xl bg-gray-100 dark:bg-[#292929] ${font}`}
            value={shortUrl}
            placeholder="Your shortUrl will appear here"
            readOnly
          />
          <button
            className={`px-10 py-4 bg-blue-400 text-white rounded-2xl m-5 ${font}`}
            onClick={copyToClipboard}
            disabled={!shortUrl}
          >
            Copy
          </button>

          <WhatsappShareButton
            className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-black/60 hover:bg-gray-200 flex gap-2 items-center"
            url={shortUrl}
            title="🔗 Shorten Your Links with Sniply!"
            separator=" -- "
          >
            <WhatsappIcon size={40} round />
            <span className={`text-xl ${font}`} style={{ color: textcolor }}>
              Share your URL
            </span>
          </WhatsappShareButton>

          {/* Settings */}
          {setting && (
            <div className="w-[300px] bg-white p-5 rounded-xl shadow-md mt-8">
              <label className="block mt-2">Background Color</label>
              <input
                type="color"
                value={bgcolor}
                onChange={(e) => Setbgcolor(e.target.value)}
              />

              <label className="block mt-2">Text Color</label>
              <input
                type="color"
                value={textcolor}
                onChange={(e) => Settextcolor(e.target.value)}
              />

              <label className="block mt-2">Website Background</label>
              <input
                type="color"
                value={bgcolorweb}
                onChange={(e) => Setbgcolorweb(e.target.value)}
              />

              <label className="block mt-2">Font Style</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="rounded p-1"
              >
                {fontOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setSetting(false)}
                className="mt-4 px-4 py-2 bg-red-400 rounded text-white"
              >
                Close
              </button>
            </div>
          )}

          {!setting && (
            <button
              onClick={() => setSetting(true)}
              className="mt-4 text-xl font-mono underline"
              style={{ color: textcolor }}
            >
              Open Settings
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default SniplyUI;
