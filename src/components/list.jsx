import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

function ListComponent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(
          "https://hisocars.techinnsoft.com/api/Booking/get-hot-offer"
        );

        if (response.ok) {
          const data = await response.json();
          setList(data);
        } else {
          console.error("Request failed with status: " + response.status);
        }
      } catch (error) {
        console.error("Error fetching list:", error);
      }
    };

    fetchList();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Hot Offers
      </Typography>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.carName}
              secondary={`Price: ${item.price}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListComponent;
