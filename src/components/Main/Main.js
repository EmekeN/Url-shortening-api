import React, { useEffect, useState } from "react";
import "./Main.scss";
import Validator from "../../Validation/Validator";
import illustration from "../../assets/images/illustration-working.svg";
import { useSessionStorage } from "./../../hooks/useSessionStorage";

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
      <section>
        <div className="control card">
          <form onSubmit={handleAddShortURL}>
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
              <div key={url.hashid} className="card pairs ">
                <p>{url.url}</p>
                <div className="divider"></div>
                <p>https://rel.ink/{url.hashid}</p>
                <button>Copy</button>
              </div>
            );
          })}
      </section>

      <section></section>
      <section>
        <div>
          <h3>Boost your links today</h3>
          <a></a>
        </div>
      </section>
    </div>
  );
};

export default Main;
