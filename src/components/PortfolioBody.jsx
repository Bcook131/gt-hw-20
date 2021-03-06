import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import tileData from "./TileData";
import tileDataCont from "./TileDataCont";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.info}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <a
                    href={tile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: 'white'}}
                  >
                  <LanguageIcon />
                  </a>
                  <a
                    href={tile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: 'white'}}
                  >
                    <GitHubIcon />
                  </a>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileDataCont.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.info}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <a
                    href={tile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: 'white'}}
                  >
                  <LanguageIcon />
                  </a>
                  <a
                    href={tile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: 'white'}}
                  >
                    <GitHubIcon />
                  </a>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}