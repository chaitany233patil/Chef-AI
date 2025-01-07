export function Cover() {
  return <div className="cover"></div>;
}

export function Alert() {
  function handleAlert() {
    document.querySelector(".cover").style.display = "none";
    document.querySelector(".alert").style.display = "none";
  }

  return (
    <div className="alert">
      <h3 style={{ textAlign: "center" }}>
        Notice: <br />
        You have <u>only two attempts</u> <br /> available due to the free API{" "}
        <br />
        usage limit.
        <br /> Please use them wisely!
      </h3>
      <button className="alert-btn" onClick={handleAlert}>
        Ok
      </button>
    </div>
  );
}
