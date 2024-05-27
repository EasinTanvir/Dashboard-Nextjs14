"use client";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Post } from "../../../types/type";
import { Button, Tooltip } from "@mui/material";
import Buttons from "../Buttons";

const PostItem = ({ id, title, desc, image }: Post) => {
  const [showAll, setShowAll] = useState(false);
  let imageUrl: any = image ? image : "";
  let titles: any = title ? title : "";

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const initialWords = 20;
  const words = desc.split(" ");
  const displayWords = showAll ? words : words.slice(0, initialWords);

  return (
    <div className="border rounded-sm p-2">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={titles} src={imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={titles}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
                dangerouslySetInnerHTML={{
                  __html:
                    displayWords.join(" ") +
                    (!showAll && words.length > initialWords ? "..." : ""),
                }}
              />
              {!showAll && words.length > initialWords ? (
                <button
                  className="font-semibold  text-slate-700"
                  onClick={toggleShowAll}
                >
                  Read more
                </button>
              ) : (
                <button
                  className="font-semibold text-slate-700"
                  onClick={toggleShowAll}
                >
                  Read less
                </button>
              )}
            </React.Fragment>
          }
        />
        <Typography>
          <Tooltip title="Only Admin and Editor Can Take Action">
            <div className=" w-full flex justify-center  mx-auto">
              <Buttons className="bg-rose-700  text-white ">Action</Buttons>
            </div>
          </Tooltip>
        </Typography>
      </ListItem>
    </div>
  );
};

export default PostItem;
