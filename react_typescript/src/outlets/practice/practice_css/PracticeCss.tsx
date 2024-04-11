import classes from "./PracticeCss.module.css";

const PracticeCss: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textBox}>
        <h1 className={classes.text}>display: flex</h1>
      </div>
      <div className={classes.largeBox}>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.text}>justifyContent: center</h1>
      </div>
      <div className={classes.largeBox} style={{ justifyContent: "center" }}>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.text}>justifyContent: flex-end</h1>
      </div>
      <div className={classes.largeBox} style={{ justifyContent: "flex-end" }}>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.text}>justifyContent: space-around</h1>
      </div>
      <div
        className={classes.largeBox}
        style={{ justifyContent: "space-around" }}
      >
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.text}>justifyContent: space-between</h1>
      </div>
      <div
        className={classes.largeBox}
        style={{ justifyContent: "space-between" }}
      >
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.text}>justifyContent: space-evenly</h1>
      </div>
      <div
        className={classes.largeBox}
        style={{ justifyContent: "space-evenly" }}
      >
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
        <div className={classes.smallBox}></div>
      </div>
    </div>
  );
};

export default PracticeCss;
