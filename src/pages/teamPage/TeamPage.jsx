import './teamPage.css'
import React from 'react'
import { useParams } from "react-router-dom";

export default function TeamPage() {
    const { id } = useParams()

    return (
        <div className='teamPage'>{id}</div>
    )
}
