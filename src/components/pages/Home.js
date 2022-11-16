import Button from '../UI/Button';
import classes from './Home.module.css';

const Home = () => {

    const tracks = [
        {
          id: "m1",
          date: "JUL 16",
          place: "DETROIT, MI",
          description: "DTE ENERGY MUSIC THEATRE",
        },
        {
          id: "m2",
          date: "JUL 19",
          place: "TORONTO,ON",
          description: "BUDWEISER STAGE",
        },
        {
          id: "m3",
          date: "JUL 22",
          place: "BRISTOW, VA",
          description: "JIGGY LUBE LIVE",
        },
        {
          id: "m4",
          date: "JUL 29",
          place: "PHOENIX, AZ",
          description: "AK-CHIN PAVILION",
        },
        {
          id: "m5",
          date: "AUG 2",
          place: "LAS VEGAS, NV",
          description: "T-MOBILE ARENA",
        },
        {
          id: "m6",
          date: "AUG 7",
          place: "CONCORD, CA",
          description: "CONCORD PAVILION",
        }
      ];

      const trackList = tracks.map((item) => {
        return (
            <li className={classes['tour-item']} key={item.id}>
                <span className={classes['tour-date']}>{item.date}</span>
                <span className={classes['tour-place']}>{item.place}</span>
                <span className={classes['tour-description']}>{item.description}</span>
                <Button className={classes.button}> BUY TICKET</Button>
            </li>
        );
      });

    return(
        <section className={classes.home}>
            <h1>Tours</h1>
            <div className={classes.wrapper}>
              {trackList}
            </div>
        </section>
    );
};

export default Home;