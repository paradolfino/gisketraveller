class Contact extends React.Component {
  componentDidMount() {
    let formName = $("#formName").val();
    let formEmail = $("#formEmail").val();
    let formMsg = $("#formMsg").val();
    $("#contactme").click(e => {
      e.preventDefault();
      let contactDate = Date.now().toString();
      document.getElementById("theform").reset();
      $.ajax({
        url:
          "https://glestbukken.firebaseio.com/inbox/" + contactDate + ".json",
        type: "POST",
        data: JSON.stringify({
          client: "TTS",
          name: formName,
          email: formEmail,
          message: formMsg
        }),
        dataType: "json",
        contentType: "application/json",
        success(response) {
          console.log(response);
        },
        error(jqXHR, status, errorThrown) {
          console.log(jqXHR);
        }
      });
    });
  }

  render() {
    return (
      <div id="page-contact" className="page">
        <div className="content">
          <h4>Contact Me!</h4>
          <div>
            <form id="theform">
              <input id="formName" type="text" placeholder="Your Name" />
              <br />
              <input id="formEmail" type="email" placeholder="Your E-mail" />
              <br />
              <textarea
                id="formMsg"
                placeholder="Your Message"
                cols="50"
                rows="5"
              />
              <br />
              <button id="contactme" type="submit">
                Contact Me Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
