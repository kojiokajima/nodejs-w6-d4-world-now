import React from "react";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            {/* <time>{date}</time> */}
            <DateIcon />
                        <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            {/* {location} */}
            <AddressIcon />
                        <address>
                            {formattedAddress}
                        </address>
            </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              {/* &#x27A1; */}
              <ArrowRightIcon />
              </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
