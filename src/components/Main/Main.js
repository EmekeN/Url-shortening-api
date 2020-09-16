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
    e.preventDefault();
    
    try {
    //   do form validation
      validator.linkValidation(query);

      //make post request to create link
      let res = await fetch("https://rel.ink/api/links/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ url: query }),
      });

      let data = await res.json();

      setUrlList([...urlList, {...data}]);
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
              your links are performing
            </p>
            <a href="#" className="button-button">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <form>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={query}
              onChange={handleSetQuery}
              className="url"
              required
            />
            {hasError && <p>{hasError}</p>}
            <button className="shorten" onClick={handleAddShortURL}>
              Shorten it!
            </button>
          </form>
        </div>

        {urlList.map((url) => {
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
    </div>
  );
};

export default Main;
