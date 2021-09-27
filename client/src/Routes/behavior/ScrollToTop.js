import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
    useEffect(() => {
        const scrollUp = history.listen(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
        return () => scrollUp();
    }, []);

    return null;
}

export default withRouter(ScrollToTop);
