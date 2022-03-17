import React from 'react'
import Metadata from "../layout/Metadata"
import { Link } from 'react-router-dom'

const Faqs = () => {
    return (
      <div className='col-container'>
      <Metadata title={"FAQs"} />
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
      </div>
    )
}

export default Faqs
