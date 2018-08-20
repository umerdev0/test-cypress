

export const  MORTAGAGE_CALCULATOR_DATA = {
        mortgageTerm: '30',
        input_values: [
          { label: 'Home price', value: '300,000' },
          { label: 'Down payment', value: '0' },
          { label: 'Property taxes', value: '2,000' },
          { label: 'Homeowners insurance', value: '1,865' },
          { label: 'Private mortgage insurance (PMI)', value: '87' },
          { label: 'Interest rate', value: '5.0' }
        ],
        results:{
          totalMonthlyPayments: { label:'Your monthly payment', value:'$5,562' },
          principalAndInterest: {label: 'Principal and Interest' , value: '$1,610' }
        }
  };
