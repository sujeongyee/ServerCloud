import React, { useEffect, useRef } from 'react';

import Chart from 'tui-chart'; // tui-chart의 모듈을 가져옴
import 'tui-chart/dist/tui-chart.css';
// import { PieChart } from '@toast-ui/chart';

const PieChartComponent = ({periodic,emergency,approval}) => {
  const firstPeriodic = periodic[0];
  const firstemergency = emergency[0];
  const firstapproval = approval[0];
  const containerRef = useRef(null);
  console.log(periodic)

  useEffect(() => {
    if (periodic && emergency && approval) {
     const container = containerRef.current;
        const data = {
            categories: ['총 프로젝트 현황'],
            series: [
                {
                    name: '정기점검',
                    data: firstPeriodic,
                },
                {
                    name: '긴급출동',
                    data: firstemergency,
                },
                {
                    name: '장애대응',
                    data: firstapproval,
                },
                // {
                //     name: '계약만료',
                //     data: firstcomplete,
                // }
            ],
        };
        const options = {
            chart: {
                width: 480,
                height: 233,
            },series: {
                showLabel: false,
                dataLabels: {
                    visible: true,
                    pieSeriesName: {
                        visible: true,
                        anchor: 'outer',
                    },
                    
                },
            },
        };
        console.log(data);
        const chart = new Chart.pieChart(container, data, options); // tui-chart 인스턴스 생성
    
    return () => {
      // 컴포넌트 언마운트 시에 필요한 정리 작업 수행
      chart.destroy();
    };
  }
  }, [periodic,emergency,approval]);

  return <div id="chart-area" ref={containerRef} />;
};


export default PieChartComponent;