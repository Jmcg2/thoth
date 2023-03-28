const Landing = (props) => {
  return (
    <>
      <div id="lightbox">
        <div className="modalWrapperLanding">
          <div className="modalLanding">
            <div className="modalTopLanding">Notice of Intent</div>
            <div className="modalBodyLanding">
              <h1 className="text-lg">
                The purpose of this website is to serve as a collaborative
                effort between all DoD Software Development Organizations to
                reduce redundant efforts as well as providing a single source of
                projects for any Software Developer to use.
              </h1>
              <br />
              <div className="modalFooterLanding">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => props.setInputValue(false)}
                >
                  I Agree
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modalBackground"></div>
      </div>
    </>
  );
};

export default Landing;
