import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from '@material-ui/core';

import { styled } from '@material-ui/core/styles';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useHistory } from 'react-router-dom';
import { formatNumberToAmountString } from '../utils';

import { ATTACHMENT_COVER_PHOTO_TYPE } from '../constants';

const RootCard = styled(Card)({
  width: 280,
  marginTop: 30,
});

const MediaCard = styled(CardMedia)({
  height: 180,
});

const FundingProgress = styled(LinearProgress)({
  marginTop: 10,
  marginBottom: 10,
});

const getCampaignStatus = (campaign) => {
  if (!campaign) return 0;
  else if (campaign.targetFund < campaign.currentFund) return 100;
  else return (campaign.currentFund / campaign.targetFund) * 100;
};

const getLastDonorsDescription = (campaign) => {
  if (!campaign || !campaign.donors || campaign.donors.length === 0) {
    return 'Be the first one to donate';
  }
  const latestDonor = [...campaign.donors].pop();
  const latestDonationDate = new Date(latestDonor.createdDate).getTime();
  return `Last donation ${formatDistanceToNow(latestDonationDate)}`;
};

export const Campaign = ({ campaign }) => {
  const { push } = useHistory();

  const handleCardActionAreaClick = () => {
    push(`/campaigns/${campaign._id}`);
  };

  const campaignMedia = campaign.attachments.find(
    (attachment) => attachment.type === ATTACHMENT_COVER_PHOTO_TYPE,
  ).url;

  return (
    <RootCard>
      <CardActionArea onClick={handleCardActionAreaClick}>
        <MediaCard image={campaignMedia} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {campaign ? campaign.name : 'Rise Juan Campaign'}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {campaign ? campaign.description : 'No Description added.'}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {getLastDonorsDescription(campaign)}
          </Typography>
          <FundingProgress
            variant="determinate"
            value={getCampaignStatus(campaign)}
          />
          <Typography variant="h6" color="textSecondary">
            {campaign
              ? `₱${formatNumberToAmountString(
                  campaign.currentFund,
                )} raised of ₱${formatNumberToAmountString(
                  campaign.targetFund,
                )}`
              : '<b>₱0 raised</b> of ₱0'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </RootCard>
  );
};
