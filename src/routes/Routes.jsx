import React from "react"
import { Routes as Router, Route, Navigate } from "react-router-dom"
import { Results } from "../components/Results/Results"
export const Routes = () => {
  return (
    <div className="p-4">
      <Router>
        <Route path="/" exact element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Router>
    </div>
  )
}
