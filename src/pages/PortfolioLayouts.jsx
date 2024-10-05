import React from 'react'
import Design from '../component/PortfolioLayouts/Design'
import PortBanner from '../component/PortfolioLayouts/PortBanner'
import Works from '../component/PortfolioLayouts/Works'
import MenuBars from '../component/PortfolioLayouts/MenuBars'
import WorksItmes from '../component/PortfolioLayouts/WorksItmes'

const PortfolioLayouts = () => {
  return (
    <>
    <Design />
    <PortBanner />
    <MenuBars />
    <Works />
    <WorksItmes />
    </>
  )
}

export default PortfolioLayouts