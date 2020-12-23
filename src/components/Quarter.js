import React from 'react'
import SmallContents from './SmallContents'

export default function Quarter() {
    return (
        <div className='paper-ratio mr-auto ml-auto print-window'>
            <div className='quarter-ratio'>
            <SmallContents />
            </div>
            <div className='quarter-ratio'>
            <SmallContents />
            </div>
            <div className='quarter-ratio'>
            <SmallContents />
            </div>
            <div className='quarter-ratio'>
            <SmallContents />
            </div>
        </div>
    )
}
