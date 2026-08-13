import CircularProgress from "@mui/material/CircularProgress";
import "./Loading.css";

const Loading = () => {
  return (
        <div className="loading">
            <CircularProgress size="3rem" aria-label="Loading…" />
         </div>
        );
};

export default Loading;