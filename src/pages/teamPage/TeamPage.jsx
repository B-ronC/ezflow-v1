import './teamPage.css'
import React from 'react'
import { useParams } from 'react-router-dom';
import Teamnavbar from '../../components/teamnavbar/Teamnavbar'

export default function TeamPage() {
    const { id } = useParams()

    return (
        <Teamnavbar />
    )
}
