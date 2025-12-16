
import React from 'react'
import HomePage from '@/pages/HomePage'
// import ProductPage from '@/pages/ProductPage'
import Header from '@/components/sections/Header'

import { Route, Routes } from 'react-router-dom';
import Footer from './components/sections/Footer';
import CaseStudiesPage from './components/sections/CaseStudiesPage';

import WhatWeDoPage from './components/sections/WhatWeDoPage';

import MissionVisionPage from './components/sections/MissionVisionPage';
import GuidingPrinciplesPage from './components/sections/GuidingPrinciplesPage';

import ProjectOverviewPage from './components/sections/ProjectOverviewPage';

import ApproachPage from './components/sections/ApproachPage';

import ImpactPage from './components/sections/ImpactPage';


import GetInvolvedPage from './components/sections/GetInvolvedPage';
import RainwaterFarming from './components/sections/RainwaterFarming';




export default function App(){
  const [view, setView] = React.useState<'home'|'product'>('home')
  const leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ];
  return (
    <div className="text-brand-text">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
         <Route path='/case-studies' element={<CaseStudiesPage/>}/>
         <Route path='/what-we-do' element={<WhatWeDoPage/>}/>
          <Route path='/mission-and-vision' element={<MissionVisionPage/>}/>  {/* Placeholder for Mission and Vision page */}
          <Route path='/guiding-principles' element={<GuidingPrinciplesPage/>}/>  {/* Placeholder for Mission and Vision page */}
          <Route path='/project-overview' element={<ProjectOverviewPage/>}/>
          <Route path='/approach' element={<ApproachPage/>}/>
          <Route path='/impact' element={<ImpactPage/>}/>

          <Route path='/get-involved' element={<GetInvolvedPage/>}/>
          <Route path='/rainwater-harvesting-and-dryland-farming' element={<RainwaterFarming/>}/>
      </Routes>
   
      <Footer />
    </div>
  )
}
