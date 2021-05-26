import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DatabaseList } from "../markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none', 
    width: '100%',
    display:'flex',
  },
}));

function Item(props) {
    return (
        <img src = {props.img} />
    );
}

let databaseList = [];

function remove(element) {
    const index = databaseList.indexOf(element);
    if (index > -1) {
        databaseList.splice(index, 1);
    }
}

function add(element) {
    databaseList.push(element);
}

function Database() {

    const classes = useStyles();
    
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);
    const [checked8, setChecked8] = React.useState(false);
    const [checked9, setChecked9] = React.useState(false);
    const [checked10, setChecked10] = React.useState(false);
    const [checked11, setChecked11] = React.useState(false);
    const [checked12, setChecked12] = React.useState(false);
    const [checked13, setChecked13] = React.useState(false);

    databaseList = [];

    return (
        <div className = "skills-sub">
            <p>Database</p>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked1} onChange={() => setChecked1(!checked1)} {...checked1 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" /> MongoDB</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked2} onChange={() => setChecked2(!checked2)} {...checked2 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" /> MySQL</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked3} onChange={() => setChecked3(!checked3)} {...checked3 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" /> PostgreSQL</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked4} onChange={() => setChecked4(!checked4)} {...checked4 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" /> Redis</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked5} onChange={() => setChecked5(!checked5)} {...checked5 === true ? add("https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg")}/><Item img = "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" /> Oracle</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked6} onChange={() => setChecked6(!checked6)} {...checked6 === true ? add("https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg") : remove("https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" /> Cassandra</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked7} onChange={() => setChecked7(!checked7)} {...checked7 === true ? add("https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg") : remove("https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg")}/><Item img =  "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg" /> CouchDB</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked8} onChange={() => setChecked8(!checked8)} {...checked8 === true ? add("https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg") : remove("https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" /> Hive</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked9} onChange={() => setChecked9(!checked9)} {...checked9 === true ? add("https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg") : remove("https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg")}/><Item img = "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg" /> Realm</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked10} onChange={() => setChecked10(!checked10)} {...checked10 === true ? add("https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg") : remove("https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" /> MariaDB</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked11} onChange={() => setChecked11(!checked11)} {...checked11 === true ? add("https://cdn.worldvectorlogo.com/logos/cockroachdb.svg") : remove("https://cdn.worldvectorlogo.com/logos/cockroachdb.svg")}/><Item img =  "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg" /> CockroachDB</Paper></label>
                    </Grid>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked12} onChange={() => setChecked12(!checked12)} {...checked12 === true ? add("https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg") : remove("https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg")}/><Item img =  "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" /> Elasticsearch</Paper></label>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <label><Paper className={classes.paper}><input type="checkbox" value={checked13} onChange={() => setChecked13(!checked13)} {...checked13 === true ? add("https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg") : remove("https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg")}/><Item img = "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" /> SQLite</Paper></label>
                    </Grid>
                </Grid>
            </div>
            {console.log(databaseList)}
            <DatabaseList databaseList = {databaseList} />
        </div>
    );
}

export default Database;
