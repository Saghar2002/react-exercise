import { Card } from "../common/Card";
import Button from "../common/Button";
import { useEffect, useState } from "react";

export const TitleChanger = () => {

    const [count , setCount] = useState(0);
    useEffect(() => {
        document.title = `Count = ${count}`;
    } , [count])
    return (
        <Card>
            <Button 
              buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
              title="Increase"
              buttonClick={() => setCount(count + 1)}
            />
           
        </Card>
    );
}