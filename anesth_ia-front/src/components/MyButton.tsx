import { useState } from "react";


export default function MyButton() {
    const [index, setIndex] = useState(0);
    return (
        <button className="btn btn-primary rounded-pill"
            style={{ background: "none", color: "blue", border: "2px solid blue", margin: "15px" }}
            onClick={() => setIndex(index + 1)
            }
        >
            Button Clicks {index}
        </button >

    );
}