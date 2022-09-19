import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchTerm = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
 
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]); 

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          search result for :
          <span style={{ color: "#FC1503" }}>
           { `${searchTerm} videos`}
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    )
};

export default SearchTerm;