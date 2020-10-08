// @ts-ignore
import React, { useEffect, useState } from "react";
import "./Main.scss";
import Validator from "../../Validation/Validator";
// @ts-ignore
import illustration from "./../../assets/images/illustration-working.svg";
// @ts-ignore
import brand from "./../../assets/images/icon-brand-recognition.svg";
// @ts-ignore
import records from "./../../assets/images/icon-detailed-records.svg";
// @ts-ignore
import custom from "./../../assets/images/icon-fully-customizable.svg";
import { useSessionStorage } from "./../../hooks/useSessionStorage";

// @ts-ignore
const Main = (props) => {
  const [urlList, setUrlList] = useSessionStorage("urls", []);
  const [query, setQuery] = useState("");
  const [hasError, setHasError] = useState("Please add link");
  const validator = new Validator();

  const handleSetQuery = (e) => {
    e.preventDefault();
    setHasError("");
    setQuery(e.target.value);
  };

  const handleAddShortURL = async (e) => {
    try {
      e.preventDefault();
      validator.linkValidation(query);

      let res = await fetch("https://rel.ink/api/links/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ url: query }),
      });

      let data = await res.json();

      setUrlList([...urlList, { ...data }]);
      setQuery("");
    } catch (err) {
      setHasError(err);
    }
  };

  return (
    <div className="Main">
      <section>
        <div className="above-fold">
          <img src={illustration} alt="Shortly hero image" className="hero" />
          <div className="info">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#" className="button-button">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section className="link-shorten">
        <div className="control card">
          <form onSubmit={handleAddShortURL}>
            <div className="control-input">
              <label className="visually-hidden" htmlFor="link-shorten">
                Shorten a link here
              </label>
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={query}
                onChange={handleSetQuery}
                className="url"
                minLength={1}
                maxLength={80}
                name="link-shorten"
                id="link-shorten"
                required
              />
              {hasError && <p className="error">{hasError}</p>}
            </div>
            <button
              className="shorten"
              onClick={handleAddShortURL}
              type="submit"
            >
              Shorten it!
            </button>
          </form>
        </div>

        {urlList &&
          urlList.map((url) => {
            return (
              <div key={url.hashid} className="pairs">
                <p>{url.url}</p>
                <div className="divider"></div>
                <p>https://rel.ink/{url.hashid}</p>
                <button>Copy</button>
              </div>
            );
          })}
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="header">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="brand-details">
            <div className="details-card">
              <img src={brand} alt="Brand Recognition" className="icon" />
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className="details-card">
              <img src={records} alt="Detailed Records" className="icon" />
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="details-card">
              <img src={custom} alt="Fully Customizable" className="icon" />
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="upsell">
        {/* <div className="upsell-contianer"> */}
        <h2 className="links">Boost your links today</h2>
        <a className="button-button">Get Started</a>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Main;
