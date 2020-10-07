function Validator() {
  const types = {
    email: "email",
  };

  /**
   * @param {String} value: String representing the link
   * @return void
   * @throws Error message on how input is malformed
   */
  this.linkValidation = (value) => {
    if (value.length === 0) {
       throw "Link cannot be empty";
    } else if (value.indexOf("https://") !== 0 && value.indexOf("http://") !== 0 ) {
        throw "Link must contain 'http://' or 'https://' ";
    }
    else {
      return;
    }
  };
}

export default Validator;
