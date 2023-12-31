import React from 'react'
import { useState, useEffect } from 'react'

export const useTabSwitch = ({tabs, defaultTab}) => {
    const [currentTab, setCurrentTab] = useState(defaultTab);
    useEffect(()=>{
        setCurrentTab(defaultTab)
    }, [defaultTab])

    const handleTabSwitch = (tab) => {
        setCurrentTab(tab)
    }

  return [currentTab, handleTabSwitch]
}
