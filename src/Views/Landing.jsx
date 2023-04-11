import React from "react";
import Form from "../components/Form";

export default function landing ({login}) {
    return(
        <div>
            <Form login={login}/>
        </div>
    )
}