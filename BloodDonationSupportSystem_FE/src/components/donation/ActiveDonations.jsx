import React from 'react';
import DonationList from './DonationList';

const ActiveDonations = ({ donors, onStartProcess }) => (
  <DonationList
    title="Donors waiting to be processed"
    donors={donors}
    type="waiting"
    onAction={onStartProcess}
  />
);

export default ActiveDonations; 