import { useEffect } from "react";
import { Card } from "../common/Card";

export const Resize = () => {

    useEffect(() => {
        const handleSize = () => {
            console.log("window size:" , window.innerHeight , window.innerWidth);
        }
        window.addEventListener("resize" , handleSize);

        return() => {
            window.removeEventListener("resize" , handleSize);
        }
    } , [])

    return (
        <Card>Resize Components</Card>
    );
}