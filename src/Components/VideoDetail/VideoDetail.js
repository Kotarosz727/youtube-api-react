import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { fetchDetail } from "../../apis";
import { Store } from "../../store/index";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    await fetchDetail(id).then((res) => {
      const item = res.data.items.shift();
      console.log(item)
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  };
  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default VideoDetail;
