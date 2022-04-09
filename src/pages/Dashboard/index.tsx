import React, { useState } from "react";

const Dashboard: React.FC = () => {
    const [name, setName] = useState("");

    return (
        <main>
            <h1>Dashboard Works!</h1>

            <form>
                <input type="text" value={name} onInput={(e) => setName(e.currentTarget.value)}/>
                { name }
            </form>
        </main>
    )
}

export default Dashboard;