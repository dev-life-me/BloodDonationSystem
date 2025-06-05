import React from 'react';
import DonationList from './DonationList';

const InProgressDonations = ({ donors, onStatusUpdate }) => (
  <DonationList
    title="Donations currently being processed"
    donors={donors}
    type="progress"
    onStatusUpdate={onStatusUpdate}
  />
);

export default InProgressDonations; 