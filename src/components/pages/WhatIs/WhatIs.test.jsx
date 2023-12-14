import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WhatIs from './WhatIs';

describe('<WhatIs />', () => {
  test('it should mount', () => {
    render(<WhatIs />);
    
    const whatIs = screen.getByTestId('WhatIs');

    expect(whatIs).toBeInTheDocument();
  });
});