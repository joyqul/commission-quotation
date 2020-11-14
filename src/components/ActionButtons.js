import React from "react";
import { Button } from "@material-ui/core";

const actions = [
  {
    label: "排單狀況",
    url:
      "https://trello.com/b/MKu0sYmC/%E5%A7%94%E8%A8%97%E9%80%B2%E5%BA%A6%E8%A1%A8",
  },
  { label: "委託說明", url: "https://joyqul-commission.weebly.com/" },
  {
    label: "委託表單",
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSe1Pl32dFXb_XZ07MlixYLFomTzpF_zMRTgfm-hzGwRgu3sbw/viewform",
  },
];

const ActionButtons = () => {
  return (
    <p>
      {actions.map((action) => (
        <Button
          href={action.url}
          key={action.label}
          variant="outlined"
          color="primary"
        >
          {action.label}
        </Button>
      ))}
    </p>
  );
};

export default ActionButtons;
