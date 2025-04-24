import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useSniplyLogic = () => {
  const [orgurl, setorg] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [setting, setSetting] = useState(false);
  const [bgcolor, Setbgcolor] = useState("#81E6D9");
  const [textcolor, Settextcolor] = useState("#000000");
  const [bgcolorweb, Setbgcolorweb] = useState("#e2e8f0");
  const [font, setFont] = useState("font-lavishly");

  const generate = async () => {
    if (orgurl === "" || !orgurl.startsWith("http")) {
      toast.error("Error: Please enter a valid URL!");
      return;
    }

    try {
      const response = await axios.post(
        "https://sniply.up.railway.app/shorten/",
        { org_url: orgurl }
      );

      if (response.data?.short_url) {
        setShortUrl(
          `https://sniply.up.railway.app/r/${response.data.short_url}`
        );
        toast.success("Short URL generated successfully!");
      } else {
        toast.error("Failed to shorten URL.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while shortening the URL.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("Shortened URL copied to clipboard!");
  };

  return {
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
  };
};
