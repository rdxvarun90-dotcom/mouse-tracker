import { useState } from "react";
import MouseTracker from "./MouseTracker";

function ParentComponent() {   // ✅ fixed name
    const [showComponent, setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleComponent}>
                {showComponent ? "isko hada de badwee !" : "Mouse ma ungli karega !!!"}
            </button>

            {showComponent && <MouseTracker />}
        </div>
    );
}

export default ParentComponent;  