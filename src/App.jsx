import { useEffect, useState } from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function App() {
  const [orgurl, setorg] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [theme, setTheme] = useState(false);
  const [setting, setSetting] = useState(false);
  const [bgcolor, Setbgcolor] = useState("#81E6D9");
  const [textcolor, Settextcolor] = useState("#000000");

  const generate = () => {
    fetch("http://127.0.0.1:8000/shortly/shorten/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        org_url: orgurl,
      }),
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log("Success:", data);
        setShortUrl(data.short_url); // Assuming API returns { short_url: "shortened_link" }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error: Please enter a valid URL!");
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    // alert("Shortened URL copied to clipboard!");
    toast.success("Shortened URL copied to clipboard!");
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="w-full md:h-screen  md:p-8 md:m-4 overflow-x-hidden overflow-y-auto flex md:flex-col justify-center items-center">
        <motion.div exit={{ opacity: 0 }}>
          <Toaster position="top-center" reverseOrder={false} />
        </motion.div>
        <motion.div
          initial={{ y: -920, x: -620, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="md:w-[1200px] w-full h-full p-8 flex flex-col justify-center items-center  dark:bg-black/60 md:rounded-2xl hover:shadow-2xl"
          style={{ backgroundColor: bgcolor }}
        >
          <div className="flex justify-end w-full">
            <label id="theme-toggle-button">
              <input
                type="checkbox"
                id="toggle"
                onChange={() => setTheme(!theme)}
              />
              {/* {console.log(theme)} */}
              <svg
                viewBox="0 0 69.667 44"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(3.5 3.5)"
                  data-name="Component 15 – 1"
                  id="Component_15_1"
                >
                  <g
                    filter="url(#container)"
                    transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                  >
                    <rect
                      fill="#83cbd8"
                      transform="translate(3.5 3.5)"
                      rx="17.5"
                      height="35"
                      width="60.667"
                      data-name="container"
                      id="container"
                    ></rect>
                  </g>

                  <g transform="translate(2.333 2.333)" id="button">
                    <g data-name="sun" id="sun">
                      <g
                        filter="url(#sun-outer)"
                        transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                      >
                        <circle
                          fill="#f8e664"
                          transform="translate(5.83 5.83)"
                          r="15.167"
                          cy="15.167"
                          cx="15.167"
                          data-name="sun-outer"
                          id="sun-outer-2"
                        ></circle>
                      </g>
                      <g
                        filter="url(#sun)"
                        transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                      >
                        <path
                          fill="rgba(246,254,247,0.29)"
                          transform="translate(9.33 9.33)"
                          d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z"
                          data-name="sun"
                          id="sun-3"
                        ></path>
                      </g>
                      <circle
                        fill="#fcf4b9"
                        transform="translate(8.167 8.167)"
                        r="7"
                        cy="7"
                        cx="7"
                        id="sun-inner"
                      ></circle>
                    </g>

                    <g data-name="moon" id="moon">
                      <g
                        filter="url(#moon)"
                        transform="matrix(1, 0, 0, 1, -31.5, -5.83)"
                      >
                        <circle
                          fill="#cce6ee"
                          transform="translate(31.5 5.83)"
                          r="15.167"
                          cy="15.167"
                          cx="15.167"
                          data-name="moon"
                          id="moon-3"
                        ></circle>
                      </g>
                      <g
                        fill="#a6cad0"
                        transform="translate(-24.415 -1.009)"
                        id="patches"
                      >
                        <circle
                          transform="translate(43.009 4.496)"
                          r="2"
                          cy="2"
                          cx="2"
                        ></circle>
                        <circle
                          transform="translate(39.366 17.952)"
                          r="2"
                          cy="2"
                          cx="2"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(33.016 8.044)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(51.081 18.888)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(33.016 22.503)"
                          r="1"
                          cy="1"
                          cx="1"
                          data-name="patch"
                        ></circle>
                        <circle
                          transform="translate(50.081 10.53)"
                          r="1.5"
                          cy="1.5"
                          cx="1.5"
                          data-name="patch"
                        ></circle>
                      </g>
                    </g>
                  </g>

                  <g
                    filter="url(#cloud)"
                    transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                  >
                    <path
                      fill="#fff"
                      transform="translate(-3466.47 -160.94)"
                      d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z"
                      data-name="cloud"
                      id="cloud"
                    ></path>
                  </g>

                  <g
                    fill="#def8ff"
                    transform="translate(3.585 1.325)"
                    id="stars"
                  >
                    <path
                      transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)"
                      d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"
                    ></path>
                    <path
                      transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)"
                      d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)"
                      d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(12.677 0.388) rotate(104)"
                      d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)"
                      d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(8.326 28.061) rotate(11)"
                      d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(5.012 5.962) rotate(172)"
                      d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z"
                      data-name="star"
                    ></path>
                    <path
                      transform="translate(2.218 14.616) rotate(169)"
                      d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z"
                      data-name="star"
                    ></path>
                  </g>
                </g>
              </svg>
            </label>
          </div>

          <h2
            className="font-greatvibes text-5xl font-semibold m-5 mt-10 dark:text-white"
            style={{ color: textcolor }}
          >
            Shortly
          </h2>
          <p
            className="font-courier p-10 text-xl text-center dark:text-gray-300"
            style={{ color: textcolor }}
          >
            Tired of remembering and sharing long URLs? Shorten them instantly
            with Shortly and make sharing effortless!
          </p>
          <input
            type="text"
            className="p-3 m-2 md:w-[600px] w-full dark:text-gray-400 rounded-2xl bg-gray-100 dark:bg-[#292929] font-mono active:ring-red-400 focus:ring-green-700"
            placeholder="Enter your long URL"
            onChange={(e) => setorg(e.target.value)}
            value={orgurl}
          />
          <button
            className="px-10 py-4 bg-blue-400 rounded-2xl hover:bg-blue-500 cursor-pointer text-center m-5 text-white font-audiowide"
            onClick={generate}
          >
            Submit
          </button>
          <input
            type="text"
            className="p-3 m-2 w-full dark:bg-[#292929] dark:text-gray-400  md:w-[600px] rounded-2xl bg-gray-100 font-mono active:ring-red-400 focus:ring-green-700"
            placeholder="Shortened URL"
            value={shortUrl}
            readOnly
          />

          <button
            className="px-10 py-4 bg-blue-400 rounded-2xl hover:bg-blue-500 cursor-pointer text-center m-5 text-white font-audiowide"
            onClick={copyToClipboard}
            disabled={!shortUrl}
          >
            Copy
          </button>
          <WhatsappShareButton
            url={shortUrl}
            title="🔗 Shorten Your Links with Shortly! 🚀

Tired of long, messy URLs? Try Shortly – a simple and fast URL shortener! Just paste your link, get a short and shareable URL instantly.



🔹 Fast & Secure
🔹 Easy to Use
🔹 Perfect for Sharing

Start shortening now! 🌐✨
Here’s your short link
Check it out now! 🔥

"
            separator="--"
          >
            <button className="px-6 py-4 rounded-xl bg-gray-100 dark:bg-black/60 dark:hover:bg-black/70 hover:bg-gray-200 flex flex-row gap-2 items-center justify-between">
              <WhatsappIcon size={40} round={true} />
              <span className="font-audiowide text-xl dark:text-white">
                share your url
              </span>
            </button>
          </WhatsappShareButton>
          <div className="flex flex-col justify-end items-end mb-10 mr-10 w-full h-full">
            {setting ? (
              <div className="w-[250px] h-[200px] bg-[#d9d9d9]/80 dark:bg-[#d9d9d9]/50 rounded-2xl fixed flex justify-center items-center p-5 bottom-2 right-1 md:bottom-20 md:right-40">
                <div className="gap-2">
                  <label htmlFor="" className="text-xl font-mono">
                    Background Color
                  </label>
                  <input
                    type="color"
                    placeholder="Bg-color"
                    value={bgcolor}
                    id="colorPicker"
                    name="colorPicker"
                    onChange={(e) => Setbgcolor(e.target.value)}
                  />
                  <label htmlFor="" className="text-xl font-mono block">
                    Text Color
                  </label>
                  <input
                    type="color"
                    placeholder="text color"
                    value={textcolor}
                    id="color"
                    name="color"
                    onChange={(e) => Settextcolor(e.target.value)}
                  />
                  {/* <label htmlFor="" className="text-xl font-mono">
                  Font
                </label>
                <input type="text" placeholder="font" /> */}
                  <div className="flex justify-end items-end w-full h-full">
                    <button
                      onClick={() => setSetting(false)}
                      className="text-3xl font-mono m-5 p-1 rounded-full border border-black bg-white"
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <button
                  class="setting-btn"
                  onClick={() => setSetting(!setting)}
                >
                  <span class="bar bar1"></span>
                  <span class="bar bar2"></span>
                  <span class="bar bar1"></span>
                </button>
              </div>
            )}{" "}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
