"use client";

import React from 'react';
import dynamic from 'next/dynamic'

const Line = dynamic(() =>
  import('@ant-design/charts').then((mod) => mod.Line),{
    ssr: false
  }
)

const Chart: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const props = {
    data,
    xField: 'year',
    yField: 'value',
  };

  return <Line {...props} />
};
export default Chart;



