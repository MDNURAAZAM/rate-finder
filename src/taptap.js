import axios from "axios";

export const getTaptapRate = async () => {
  try {
    const response = await axios.get("https://api.taptapsend.com/api/fxRates", {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en;q=0.9,bn;q=0.8",
        "appian-version": "web/2022-05-03.0",
        origin: "https://www.taptapsend.com",
        referer: "https://www.taptapsend.com/",
        "sec-ch-ua":
          '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/146 Safari/537.36",
        "x-device-id": "web",
        "x-device-model": "web",
      },
    });

    const availableCountries = response?.data?.["availableCountries"];
    const germany = availableCountries?.find(
      (country) =>
        country?.isoCountryCode === "DE" &&
        country?.countryDisplayName === "Germany" &&
        country?.currency === "EUR"
    );

    const bangladesh = germany?.corridors?.find(
      (corridor) =>
        corridor?.isoCountryCode === "BD" &&
        corridor?.countryDisplayName === "Bangladesh" &&
        corridor?.currency === "BDT"
    );
    const rate = bangladesh?.fxRate;
    return rate;
  } catch (err) {
    console.error(err.response?.data || err.message);
    return err;
  }
};
