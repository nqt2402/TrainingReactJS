import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider';
import BTProductList from './BTProductList'
import BTLaptop from './BTLaptop';
import BTPromotion from './BTPromotion';

export default class BTLayOut extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTSlider/>
                <BTProductList/>
                <BTLaptop/>
                <BTPromotion/>
            </div>
        )
    }
}
