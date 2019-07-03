import React, { Component } from 'react';
import TestHOC from "../HOC/testHOC";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

class TestComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidUpdate() {
        var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = this.props.pichartData;
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
    }

    render() { 
        const{PichartComponent}=this.props;

        return ( 
            <React.Fragment>
                
                <PichartComponent/>
                       
            </React.Fragment>
         );
    }
}

 
export default (TestHOC(TestComp));