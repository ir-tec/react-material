import {
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Toolbar,
  ListItem,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import { sideListItems } from "./customers/customersListMenu";
import { useStyles } from "../styles/styles";
import React from "react";
const SideBar = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Drawer
        open={true}
        variant="persistent"
        anchor="left"
        className={classes.Drawer}
      >
        <Toolbar />
        {sideListItems.map((item, index) => {
          return (
            <Accordion key={index} className={classes.Drawer}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{item.title}</Typography>
              </AccordionSummary>
              {item.Links.map((link, index) => {
                return (
                  <AccordionDetails key={index}>
                    <ListItem button>
                      <Typography
                        onClick={() => history.push(`/${link.link}`)}
                        variant="subtitle2"
                      >
                        {link.subTitle}
                      </Typography>
                    </ListItem>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          );
        })}
      </Drawer>
    </>
  );
};

export default SideBar;
