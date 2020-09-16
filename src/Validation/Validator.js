function Validator() {
  const types = {
    email: "email",
  };

  /**
   * @param value: String representing the link
   * @return void 
   * @throws Error message on how input is malformed
   */
  this.linkValidation = (value) => {
    if (value.indexOf("https://") !== 0 && value.indexOf("http://") !== 0) {
        // throw new Error("Link must contain 'http://' or 'https://' ");
    } else {
        return ;
    }
  };
}

export default Validator;
