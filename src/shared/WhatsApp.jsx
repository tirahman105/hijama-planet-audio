const WhatsApp = () => {
  return (
    <div>
      <div
        className="fixed bottom-3 right-3 p-3"
        style={{ zIndex: 6, left: "initial" }}
      >
        <a
          href="https://wa.me/+8801614048774?text=Hello How can I help you ?"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
            width="60"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;
