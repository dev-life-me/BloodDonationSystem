import React from 'react';
import DonationList from './DonationList';

const CompletedDonations = ({ donors }) => (
  <DonationList
    title="Recently completed donations"
    donors={donors}
    type="completed"
  />
);

export default CompletedDonations; 